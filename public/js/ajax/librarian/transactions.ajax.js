/**
 * ===============================================================================
 * * TRANSACTIONS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing transactions
 * ===============================================================================
 */


/**
 * ===============================================================================
 * ADD BORROW RECORDS AJAX
 * ===============================================================================
 */

let copies = [];

findBorrower = () => {
    const borrowerIDNumber = $('#borrowerIDNumberInput').val();

    if(borrowerIDNumber == null || borrowerIDNumber.trim() == '') {
        $('#saveBorrowerIDNumberBtn').attr('disabled', true);
    } else {
        $('#saveBorrowerIDNumberBtn').attr('disabled', false);
    }

    $.ajax({
        url: `${ BASE_URL_API }librarian/find-borrower`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: { idNumber: borrowerIDNumber },
        dataType: 'json',
        success: result => {
            if(result) {
                const data = result.data;

                if(data.length == 0) {
                    showAlert('danger', 'Oops!', 'That borrower does not exists');
                } else {
                    $('#borrowerForm').hide();
                    $('#borrowerDetails').show();

                    $('#borrowerIDNumber').val(data.userID);
                    $('#borrowerIDNumberForDisplay').html(data.idNumber);
                    $('#borrowerFullName').html(data.firstName + ' ' + data.lastName);
                    $('#borrowerUserType').html(data.userType);
                    
                    enableDisableSubmitBtnForCopy();
                }
            }
        }
    })
    .fail(() => {
        console.log('There was an error in getting a user');
    });
}

enableDisableSubmitBtnForCopy = () => {
    const submitCopiesForBorrowBtn = $('#submitCopiesForBorrowBtn');
    if($('#borrowedCopiesTable tr').length > 1 && $('#borrowerIDNumber').val() != '') {
        submitCopiesForBorrowBtn.attr('disabled', false);
    } else {
        submitCopiesForBorrowBtn.attr('disabled', true);
    };
}

resetCopyForm = () => {
    $('#standardNumberForAddCopy').selectpicker('val', null);
    $('#copiesForAddCopy').html(`<option class="text-center small" disabled>Please select standard number first</option>`);
    $('#copiesForAddCopy').selectpicker('refresh');
    $('#dueDate').val(null);
    $('#dueTime').val(null);
    $('#addCopyBtn').attr('disabled', true);
}

removeCopyForBorrow = (copyIDForRow) => {
    $('#copyIDForRemove').val(copyIDForRow);
    $('#removeCopyModal').modal('show');
}

if($('#borrowerIDNumberInput').length) {
    $.ajax({
        url: `${ BASE_URL_API }librarian/borrowers`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                var options = '';
                data.forEach(b => {
                    options += `
                        <option
                            title="${ b.idNumber }"
                            data-content="
                                <div class='font-weight-bold'>${ b.firstName } ${ b.lastName }</div>
                                <div class='small'>${ b.idNumber }</div>
                                <div class='small'>${ b.userType }</div>
                            "
                            val="${ b.idNumber }"
                        >${ b.idNumber }</option>
                    `
                });

                $('#borrowerIDNumberInput').html(options);
                $('#borrowerIDNumberInput').selectpicker('refresh');
            }
        }
    })
    .fail(() => console.error('There was an error in getting borrowers'))
}

$('#borrowerIDNumberInput').on('change.bs.select', () => findBorrower());
$('#saveBorrowerIDNumberBtn').on('click', () => findBorrower());

$('#editBorrowerIDNumberBtn').on('click', () => {
    $('#borrowerIDNumber').val(null);
    enableDisableSubmitBtnForCopy();
    $('#borrowerForm').show();
    $('#borrowerDetails').hide();
});

if($('#copyForm').length) {
    $.ajax({
        url: `${ BASE_URL_API }librarian/materials`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                console.log(data);

                standardNumberForAddCopyOptions = '';
                data.forEach(m => {
                    const copies = m.copies;
                    if(copies.length) {
                        standardNumberForAddCopyOptions += `
                            <option 
                                data-token="${ m.standardType } ${ m.standardNumber }"
                                data-content="
                                    <div class='font-weight-bold'>${ m.title }</div>
                                    <div class='small'>${ m.standardType } ${ m.standardNumber }</div>
                                    <div class='small'>${ m.material_type.typeName }</div>
                                "
                                title="${ m.standardType } ${ m.standardNumber }"
                                value="${ m.materialID }"
                            >${ m.standardType } ${ m.standardNumber }</option>
                        `;
                    }
                });

                $('#standardNumberForAddCopy').html(standardNumberForAddCopyOptions);
                $('#standardNumberForAddCopy').selectpicker('refresh');
            }
        }
    })
    .fail(() => console.error('There was an error in getting materials'));
}

$('#standardNumberForAddCopy').on('change', () => {
    const materialID = $('#standardNumberForAddCopy').val();
    $.ajax({
        url: `${ BASE_URL_API }librarian/materials/${ materialID }/copies`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;

                copiesForAddCopyOptions = '';
                data.forEach(c => {
                    let selected = false;
                    copies.forEach(copy => { if(copy.copyID === c.copyID) selected = true });
                    if(!selected && c.status == 'Available') {
                        copiesForAddCopyOptions += `
                            <option value="${ c.copyID }">${ c.copyNumber }</option>
                        `;
                    }
                });
                if(copiesForAddCopyOptions === '') {
                    copiesForAddCopyOptions += `
                        <option class="text-center small" disabled>Oops! We think you've selected all the available copies for this material</option>
                    `;
                }

                $('#copiesForAddCopy').html(copiesForAddCopyOptions);
                $('#copiesForAddCopy').selectpicker('refresh');
            }
        }
    })
    .fail(() => console.error('There was an error in getting materials'))
});

$('#standardNumberForAddCopy, #copiesForAddCopy, #dueDate, #dueTime').on('change', () => {
    const hasValue = 
        $('#standardNumberForAddCopy').val() == '' ||
        $('#copiesForAddCopy').val()         == '' ||
        $('#dueDate').val()                  == '' ||
        $('#dueTime').val()                  == '';
    if(hasValue) $('#addCopyBtn').attr('disabled', true);
    else $('#addCopyBtn').attr('disabled', false);
});

$('#resetCopyFormBtn').on('click', () => resetCopyForm());


$('#addCopyBtn').on('click', () => {
    const copyID = $('#copiesForAddCopy').val();
    const dueDate = new Date($('#dueDate').val() + ' ' + $('#dueTime').val());

    $.ajax({
        url: `${ BASE_URL_API }librarian/copies/${copyID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;

                const copyIDForRow = 'copy-' + Date.now();

                copies.push({
                    copyIDForRow: copyIDForRow,
                    copyID: data.copyID,
                    dueDate: moment(dueDate).format()
                });

                $('#borrowedCopiesTable tbody').append(`
                    <tr id="${ copyIDForRow }">
                        <!-- Copy Number-->
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <div class="fas fa-copy text-primary"></div>
                                </div>
                                <div>
                                    <div>${ data.copyNumber }</div>
                                </div>
                            </div>
                        </td>

                        <!-- Material-->
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <div class="fas fa-book text-primary"></div>
                                </div>
                                <div>
                                    <div>${ data.material.title }</div>
                                    <div class="text-secondary small font-italic">${ data.material.material_type.typeName }</div>
                                </div>
                            </div>
                        </td>

                        <!-- Due date-->
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <div class="fas fa-stopwatch text-primary"></div>
                                </div>
                                <div>
                                    <div>${ moment(dueDate).format("MMMM d, YYYY; hh:mm A") }</div>
                                    <div class="text-secondary small font-italic">${ moment(dueDate).fromNow() }</div>
                                </div>
                            </div>
                        </td> 

                        <!-- Actions-->
                        <td>
                            <button 
                                class="btn btn-danger btn-sm" 
                                type="button"
                                onclick="removeCopyForBorrow('${ copyIDForRow }')"
                            >
                                <i class="fas fa-trash-alt mr-1"></i>
                                <span>Remove</span>
                            </button>
                        </td>
                    </tr>
                `);

                resetCopyForm();
                enableDisableSubmitBtnForCopy();
            }
        }
    });
});

$('#removeCopyBtn').on('click', () => {
    const copyIDForRemove = $('#copyIDForRemove').val();
    copies = copies.filter(c => c.copyIDForRow !== copyIDForRemove);
    $(`#${ copyIDForRemove }`).remove();
    $('#removeCopyModal').modal('hide');
    showAlert('info', 'Success!', 'A copy has been remove.')
    enableDisableSubmitBtnForCopy();
});

$('#addBorrowRecordForm').on('submit', e => {
    e.preventDefault();
    const rawData = new FormData($('#addBorrowRecordForm')[0]);

    let material_borrow_records = []
    copies.forEach(c => {
        material_borrow_records.push({
            copyID: c.copyID,
            dueDate: c.dueDate,
            status: 'Unreturned',
            addedBy: localStorage.getItem('userID'),
            updatedBy: localStorage.getItem('userID'),
        });
    });

    data = {
        userID: rawData.get('userID'),
        borrowDate: moment(new Date()).format(),
        material_borrow_records: material_borrow_records
    }

    $.ajax({
        url: `${ BASE_URL_API }librarian/transactions`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: result => {
            if(result) {

                // Request a temporary sessioned alert
                // (for next page alerts)
                $.ajax({
                    url: `${ BASE_URL_WEB }alert`,
                    type: 'POST',
                    data: {
                        theme: 'success',
                        title: 'Success!',
                        message: 'A new transaction is added'
                    },
                    success: () => location.replace(`${ BASE_URL_WEB }admin/transactions`)
                });
            }
        }
    })
    .fail(() => console.error('There was an error in adding a new transaction'));
});