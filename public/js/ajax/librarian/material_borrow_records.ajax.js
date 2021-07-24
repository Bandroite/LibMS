/**
 * ===============================================================================
 * * MATERIAL BORROW RECORDS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material borrow records
 * ===============================================================================
 */

$(() => {
    loadBorrowedMaterialsDT();
    loadReturnedMaterialsDT();
    material_borrow_records_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL BORROWED MATERIALS
 * ===============================================================================
 */

// Load Borrowed Materials DataTable
loadBorrowedMaterialsDT = () => {
    const dt = $('#borrowedMaterialsDT');
    if(dt.length) {
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/material_borrow_records/borrowed`,
                headers: AJAX_HEADERS,
                // success: result => console.log(result.data)
            },
            columns: [

                // Standard Number
                { 
                    data: null,
                    render: data => {
                        const material = data.copy.material;
                        return material.standardType + ' ' +  material.standardNumber;
                    }
                },

                // Material
                { 
                    data: null,
                    render: data => {
                        const material = data.copy.material;
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-book text-primary"></i>
                                </div>
                                <div>
                                    <div>${ material.title }</div>
                                    <div class="text-secondary small font-italic">${ material.material_type.typeName }</div>
                                </div>
                            </div>
                        `;
                    }
                },

                // Copy Number
                { data: 'copy.copyNumber', class: 'text-nowrap' },

                // Borrower
                { 
                    data: null,
                    render: data => {
                        const borrower = data.transaction.transaction_borrower;
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-user text-primary"></i>
                                </div>
                                <div>
                                    <div>${ borrower.firstName + ' ' + borrower.lastName }</div>
                                    <div class="text-secondary small font-italic">Student</div>
                                </div>
                            </div>
                        `;
                    }
                },
                
                // Borrowed At
                { 
                    data: null,
                    class: 'text-nowrap',
                    render: data => {
                        const createdAt = data.createdAt;
                        return `
                            <div>${ moment(createdAt).format('MMM. D, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(createdAt).fromNow() }</div>
                        `;
                    }
                },

                // Due date
                { 
                    data: null,
                    class: 'text-nowrap',
                    render: data => {
                        const dueDate = data.dueDate;
                        return `
                            <div>${ moment(dueDate).format('MMM. D, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(dueDate).fromNow() }</div>
                        `;
                    }
                },

                // Status
                { 
                    data: null,
                    render: data => {
                        const status = data.status;

                        if(moment().isAfter(data.dueDate)){
                            return `<div class="badge alert-danger text-danger p-2 w-100">Overdue</div>`;
                        }else{
                            if(status === 'Returned') {
                                return `<div class="badge alert-success text-success p-2 w-100">Returned</div>`;
                            } else if(status === 'Unreturned') {
                                return `<div class="badge alert-warning text-warning p-2 w-100">Unreturned</div>`;
                            } else if(status === 'Overdue') {
                                return `<div class="badge alert-danger text-danger p-2 w-100">Overdue</div>`;
                            }
                        }
                    }
                },

                // Actions
                { 
                    data: null,
                    render: data => {
                        const borrowID = data.borrowID;
                        return `
                            <div class="dropdown">
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <div  
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#borrowedMaterialDetailsModal"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
                                    <div 
                                        class   = "dropdown-item"
                                        role    = "button"
                                        onclick = markAsReturned('${ borrowID }')
                                    >
                                        <i class="fas fa-check dropdown-icon-item text-success"></i>
                                        <span>Marked as returned</span>
                                    </div>
                                    <div 
                                        class   = "dropdown-item"
                                        role    = "button"
                                        onclick = markAsWeeded('${ borrowID }')
                                    >
                                        <i class="fas fa-check dropdown-icon-item text-secondary"></i>
                                        <span>Marked as weeded</span>
                                    </div>
                                    <div 
                                        class       = "dropdown-item" 
                                        role        = "button"
                                        data-toggle = "modal" 
                                        data-target = "#removeBorrowedRecordModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                },
            ],
            columnDefs: [{
                targets: [7],
                orderable: false
            }]
        });
    }
}


// Borrowed copies count
if($('#borrowedCopiesCount').length) {
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_borrow_records/borrowed`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                $('#borrowedCopiesCount').html(data.length)
            }
        }
    })
    .fail(() => console.error('There was an error in getting the borrowed data'))
}

/**
 * ===============================================================================
 * MARK AS RETURNED
 * ===============================================================================
 */

// Mark as Retuned
markAsReturned = (borrowID) => {
    $('#borrowIDForReturn').val(borrowID);
    $('#markAsReturnedModal').modal('show');
}

// When Mark as Retuned Modal has been hidden,
// Reset Borrow ID by setting value as null
$('#markAsReturnedModal').on('hide.bs.modal', () => $('#borrowIDForReturn').val(null));

// Validate Mark as Returned Form
$('#markAsReturnedForm').validate(validateOptions({
    rules: { borrowID: { required: true }},
    messages: {},
    submitHandler: () => change_borrow_status_AJAX('Returned')
}));

// Change Borrow Status AJAX
change_borrow_status_AJAX = (borrowStatus) => {
    const rawData = new FormData($('#markAsReturnedForm')[0]);
    borrowID = rawData.get('borrowID');
    $.ajax({
        url: `${ BASE_URL_API }librarian/change_borrow_status/${ borrowID }`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: { status: borrowStatus },
        dataType: 'json',
        success: result => {
            if(result) {
                if(borrowStatus === 'Returned') {
                    $('#markAsReturnedModal').modal('hide');
                    showAlert('success', 'Success!', 'A borrow record has been marked as returned.');
                    const dt = $('#borrowedMaterialsDT').DataTable();
                    dt.ajax.reload();
                }
            }
        }
    })
    .fail(() => console.error('There was a problem in changing borrow status'))
}

/**
 * ===============================================================================
 * MARK AS WEEDED
 * ===============================================================================
 */

const markAsWeededModal = $('#markAsWeededModal');
const markAsWeededForm = $('#markAsWeededForm');

// Mark as Weeded
markAsWeeded = (borrowID) => {
    $('#borrowIDForWeed').val(borrowID);
    markAsWeededModal.modal('show');
}

// Validate Mark As Weeded Form
markAsWeededForm.validate(validateOptions({
    rules: {
        borrowID: {
            required: true
        },
        description: {
            required: true
        }
    },
    messages: {
        borrowID: {
            required: 'Borrow ID must have a value'
        },
        description: {
            required: 'Description is required'
        }
    },
    submitHandler: () => add_weeding_recordAJAX()
}));

// Reset mark as weeded form is its modal was hidden
markAsWeededModal.on('hide.bs.modal', () => markAsWeededForm.trigger('reset'))

// Add weeding record AJAX
add_weeding_recordAJAX = () => {
    const rawData = new FormData(markAsWeededForm[0]);

    const borrowID = rawData.get('borrowID')

    data = {
        description: rawData.get('description')
    }

    $.ajax({
        url: `${ BASE_URL_API }librarian/weedings/${borrowID}`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result){
                markAsWeededModal.modal('hide')

                showAlert('blue', 'Success', 'A copy has been marked as weeded')

                const dt = $('#borrowedMaterialsDT').DataTable();
                dt.ajax.reload()
            }
        }
    })
    .fail(() => console.error('There was an error in making a copy as weeded'))
}

/**
 * ===============================================================================
 * GET ALL RETURNED MATERIALS
 * ===============================================================================
 */

// Load Returned Materials DataTable
loadReturnedMaterialsDT = () => {
    const dt = $('#returnedMaterialsDT');
    if(dt.length) {
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/material_borrow_records/returned`,
                headers: AJAX_HEADERS,
                // success: result => console.log(result.data)
            },
            columns: [

                // Standard Number
                { 
                    data: null,
                    render: data => {
                        const material = data.copy.material;
                        return material.standardType + ' ' +  material.standardNumber;
                    }
                },

                // Material
                { 
                    data: null,
                    render: data => {
                        const material = data.copy.material;
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-book text-primary"></i>
                                </div>
                                <div>
                                    <div>${ material.title }</div>
                                    <div class="text-secondary small font-italic">${ material.material_type.typeName }</div>
                                </div>
                            </div>
                        `;
                    }
                },

                // Copy Number
                { data: 'copy.copyNumber' },

                // Borrower
                { 
                    data: null,
                    render: data => {
                        const borrower = data.transaction.transaction_borrower;
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-user text-primary"></i>
                                </div>
                                <div>
                                    <div>${ borrower.firstName + ' ' + borrower.lastName }</div>
                                    <div class="text-secondary small font-italic">${ borrower.userType }</div>
                                </div>
                            </div>
                        `;
                    }
                },
                
                // Borrowed At
                { 
                    data: null,
                    render: data => {
                        const createdAt = data.createdAt;
                        return `
                            <div>${ moment(createdAt).format('MMM. D, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(createdAt).fromNow() }</div>
                        `;
                    }
                },

                // Returned at
                { 
                    data: null,
                    render: data => {
                        const updatedAt = data.updatedAt;
                        return `
                            <div>${ moment(updatedAt).format('MMM. D, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(updatedAt).fromNow() }</div>
                        `;
                    }
                },

                // Status
                { 
                    data: null,
                    render: data => {
                        const status = data.status;
                        if(status === 'Returned') {
                            return `<div class="badge alert-success text-success p-2 w-100">Returned</div>`;
                        } else if(status === 'Unreturned') {
                            return `<div class="badge alert-warning text-warning p-2 w-100">Unreturned</div>`;
                        } else if(status === 'Overdue') {
                            return `<div class="badge alert-danger text-danger p-2 w-100">Overdue</div>`;

                        }
                    }
                },

                // Actions
                { 
                    data: null,
                    render: data => {
                        return `
                            <div class="dropdown">
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <div class="dropdown-menu dropdown-menu-right">
                                <div  
                                    class       = "dropdown-item"
                                    onclick     = "viewReturn('${data.borrowID}')"
                                >
                                    <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                    <span>View details</span>
                                </div>
                                </div>
                            </div>
                        `;
                    }
                },
            ],
            columnDefs: [{
                targets: [7],
                orderable: false
            }]
        });
    }
}


/**
 * ===============================================================================
 * VIEW RETURNED COPIES
 * ===============================================================================
 */

// View Returned Copies
viewReturn = (borrowID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_borrow_records/${borrowID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                const transaction = data.transaction;
                const borrower =    data.transaction.transaction_borrower;
                const copy =        data.copy;
                const returnedAt =  data.updatedAt;
                const addedBy =     data.added_by_librarian
                
                const returnProcessByFullName =
                setFullName('F Mi L',{
                    firstName: addedBy.firstName,
                    middleName: addedBy.middleName,
                    lastName: addedBy.lastName
                })

                const material = data.copy.material;
                console.log(material)

                const borrowerFullName =
                setFullName('F Mi L',{
                    firstName: borrower.firstName,
                    middleName: borrower.middleName,
                    lastName: borrower.lastName
                })

                const returnedDate = `
                    <div>${ moment(returnedAt).format("dddd, MMMM D, YYYY") }</div>
                    <div>${ moment(returnedAt).format("hh:mm A") }</div>
                    <div class="small text-secondary">${ moment(returnedAt).fromNow() }</div>
                `
                const borrowedAt = `
                    <div>${ moment(transaction.borrowedDate).format("dddd, MMMM D, YYYY") }</div>
                    <div>${ moment(transaction.borrowedDate).format("hh:mm A") }</div>
                    <div class="small text-secondary">${ moment(transaction.borrowedDate).fromNow() }</div>
                `

                $('#standardNumber').html(material.standardNumber);
                $('#title').html(material.title);
                $('#copyNo').html(copy.copyNumber);
                $('#returnedProcessBy').html(returnProcessByFullName);
                $('#borrower').html(borrowerFullName);
                $('#returnedAt').html(returnedDate);
                $('#borrowedAt').html(borrowedAt);
                
                $('#viewReturnModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

if($('#returnedCopiesCount').length) {
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_borrow_records/returned`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                $('#returnedCopiesCount').html(data.length)
            }
        }
    })
    .fail(() => console.error('There was an error in getting the returned copies count'))
}

/**
 * ===============================================================================
 * MATERIAL BORROW RECORDS COUNT
 * ===============================================================================
 */

// Materials count AJAX
material_borrow_records_countAJAX = () => {
    if($('#borrowedMaterialsCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/material_borrow_records/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => $('#borrowedMaterialsCount').html(result.count)
        })
        .fail(() => console.error('There was an error in getting room count'));
    }
}