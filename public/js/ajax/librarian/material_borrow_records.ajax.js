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
                                    <div class="text-secondary small font-italic">Student</div>
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
                            <div>${ moment(createdAt).format('MMM. d, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(createdAt).fromNow() }</div>
                        `;
                    }
                },

                // Due date
                { 
                    data: null,
                    render: data => {
                        const dueDate = data.dueDate;
                        return `
                            <div>${ moment(dueDate).format('MMM. d, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(dueDate).fromNow() }</div>
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
                        const material = data.copy.material;
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
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#markedAsReturnedModal"
                                    >
                                        <i class="fas fa-check dropdown-icon-item text-success"></i>
                                        <span>Marked as returned</span>
                                    </div>
                                    <div 
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#markedAsReturnedModal"
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
                                    <div class="text-secondary small font-italic">Student</div>
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
                            <div>${ moment(createdAt).format('MMM. d, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(createdAt).fromNow() }</div>
                        `;
                    }
                },

                // Due date
                { 
                    data: null,
                    render: data => {
                        const dueDate = data.dueDate;
                        return `
                            <div>${ moment(dueDate).format('MMM. d, YYYY') }</div>
                            <div class="small text-secondary font-italic">${ moment(dueDate).fromNow() }</div>
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
                        const material = data.copy.material;
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
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#markedAsReturnedModal"
                                    >
                                        <i class="fas fa-check dropdown-icon-item text-success"></i>
                                        <span>Marked as returned</span>
                                    </div>
                                    <div 
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#markedAsReturnedModal"
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