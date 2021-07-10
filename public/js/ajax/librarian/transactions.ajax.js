/**
 * ===============================================================================
 * * TRANSACTIONS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing transactions
 * ===============================================================================
 */

$('#borrowerIDNumberInput').on('keyup', () => {
    const borrowerIDNumber = $('#borrowerIDNumberInput').val();

    if(borrowerIDNumber == null || borrowerIDNumber.trim() == '') {
        $('#saveBorrowerIDNumberBtn').attr('disabled', true);
    } else {
        $('#saveBorrowerIDNumberBtn').attr('disabled', false);
    }
});

$('#saveBorrowerIDNumberBtn').on('click', () => {
    const borrowerIDNumber = $('#borrowerIDNumberInput').val();

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

                    $('#borrowerIDNumber').html(data.idNumber);
                    $('#borrowerFullName').html(data.firstName + ' ' + data.lastName);
                    $('#borrowerUserType').html(data.userType);
                }
            }
        }
    })
    .fail(() => {
        console.log('There was an error in getting a user');
    });
});

$('#editBorrowerIDNumberBtn').on('click', () => {
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
                console.log(data);

                copiesForAddCopyOptions = '';
                data.forEach(c => {
                    copiesForAddCopyOptions += `
                        <option value="${ c.copyID }">${ c.copyNumber }</option>
                    `;
                });

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

resetCopyForm = () => {
    $('#standardNumberForAddCopy').selectpicker('val', null);
    $('#copiesForAddCopy').html(`
        <option class="text-center" disabled>Please select standard number first</option>
    `);
    $('#copiesForAddCopy').selectpicker('refresh');
    $('#dueDate').val(null);
    $('#dueTime').val(null);
    $('#addCopyBtn').attr('disabled', true);
}

$('#resetCopyFormBtn').on('click', () => resetCopyForm());

$('#addCopyBtn').on('click', () => {
    $('#borrowedCopiesTable tbody').append(`
        <tr>
            <td>COPY-0001</td>
            <td>Life of Juan</td>
            <td>August 1, 2021; 10:00 AM</td>
            <td>
                <button class="btn btn-danger btn-sm">
                    <i class="fas fa-trash-alt mr-1"></i>
                    <span>Remove</span>
                </button>
            </td>
        </tr>
    `);
    resetCopyForm();
})