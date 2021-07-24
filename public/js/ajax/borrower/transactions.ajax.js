/**
 * ===============================================================================
 * * TRANSACTIONS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing favorite materials
 * ===============================================================================
 */

$(() => {
    view_all_transactionsAJAX();
    get_transactions_countAJAX();
});


/**
 * ===============================================================================
 * VIEW ALL TRANSACTIONS
 * ===============================================================================
 */

// View all transactions
view_all_transactionsAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/transactions`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;

                // console.log(data);
                
                var transactionsBlade = '';
                data.forEach(t => {

                    const materialBorrowRecords = t.material_borrow_records;

                    var borrowCopiesSummary = {
                        total: 0,
                        returned: 0,
                        unreturned: 0,
                        overdue: 0
                    }

                    borrowCopiesSummary.total = materialBorrowRecords.length;

                    materialBorrowRecords.forEach(b => {
                        if(b.status == 'Returned')   borrowCopiesSummary.returned++;
                        if(b.status == 'Unreturned') borrowCopiesSummary.unreturned++;
                        if(b.status == 'Unreturned' && moment().isAfter(b.dueDate)) borrowCopiesSummary.overdue++;
                    });

                    const processedBy = t.added_by_librarian;
                    const processedByFullName = setFullName('F L', {
                        firstName: processedBy.firstName,
                        lastName: processedBy.lastName
                    })

                    transactionsBlade += `
                        <div class="list-group-item border rounded-lg mb-4 d-flex">
                            <div class="mr-3">
                                <div class="alert-primary rounded-lg flex-center" style="height: 4rem; width: 4rem">
                                    <h2><i class="fas fa-exchange-alt text-primary"></i></h2>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div class="mb-2">
                                    <div class="h5">${ moment(t.addedAt).format('dddd, MMMM D, YYYY; hh:mm A') }</div>
                                    <div class="h6 mb-1">
                                        <i class="fas fa-user-tie mr-1 text-secondary"></i>
                                        <span>Processed by: ${ processedByFullName }</span>
                                    </div>
                                    <div class="small text-secondary font-italic">${ moment(t.addedAt).fromNow() }</div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-3 col-md-6">
                                        <span>Total copies borrowed:</span>
                                        <span>
                                            <span class="badge badge-blue ml-2">${ borrowCopiesSummary.total }</span>
                                        </span>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <span>Returned copies:</span>
                                        <span>
                                            <span class="badge badge-success ml-2">${ borrowCopiesSummary.returned }</span>
                                        </span>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <span>Uneturned copies:</span>
                                        <span>
                                            <span class="badge badge-info ml-2">${ borrowCopiesSummary.unreturned }</span>
                                        </span>
                                    </div>
                                    <div class="col-lg-3 col-md-6">
                                        <span>Over due:</span>
                                        <span>
                                            <span class="badge badge-danger ml-2">${ borrowCopiesSummary.overdue }</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button onclick="viewTransactionDetails('${ t.transactionID }')" class="btn btn-sm btn-info">View More</button>
                                </div>
                            </div>
                        </div>
                    `
                })
                $('#transactionsList').html(transactionsBlade);
            }
        }
    })
}



/**
 * ===============================================================================
 * VIEW TRANSACTION DETAILS
 * ===============================================================================
 */

// View Transaction Details
viewTransactionDetails = (transactionID) => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/transactions/${ transactionID }`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;

                $('#transactionDate').html(moment(data.addedAt).format('dddd, MMMM D, YYYY; hh:mm A'))
                $('#transactionHumanized').html(moment(data.addedAt).fromNow());

                const addedByLibrarian = data.added_by_librarian;
                $('#processedBy').html(() => {
                    return setFullName('F L', {
                        firstName: addedByLibrarian.firstName,
                        lastName: addedByLibrarian.lastName
                    })
                })

                // Clear and destroy any existing content of DataTable first
                const dt = $('#copiesBorrowedDT').DataTable();
                dt.clear().destroy();
                
                $('#copiesBorrowedDT').DataTable({
                    ajax: {
                        url: `${ BASE_URL_API }borrower/transactions/${ data.transactionID }/borrowed_copies`,
                        type: 'GET',
                        headers: AJAX_HEADERS,
                        // success: result => console.log(result.data)
                    },
                    columns: [
                        
                        // Copy Number
                        {
                            data: null,
                            render: data => {
                                return `
                                    <div class="d-flex align-items-baseline">
                                        <div class="icon-container">
                                            <i class="fas fa-copy text-primary"></i>
                                        </div>
                                        <div>
                                            <div>${ data.copy.copyNumber }</div>
                                        </div>
                                    </div>
                                `
                            }
                        },

                        // Material
                        {
                            data: null,
                            render: data => {
                                return `
                                    <div class="d-flex align-items-baseline">
                                        <div class="icon-container">
                                            <i class="fas fa-book text-primary"></i>
                                        </div>
                                        <div>
                                            <div>${ data.copy.material.title }</div>
                                        </div>
                                    </div>
                                `
                            }
                        },

                        // Status
                        {
                            data: null,
                            render: data => {
                                const status = data.status;
                                if(status === 'Returned') {
                                    return `
                                        <span class="badge alert-success text-success p-2 w-100">Returned</span>
                                    `
                                } else if(status === 'Unreturned') {
                                    if(moment().isAfter(data.dueDate)){
                                        return `<div class="badge alert-danger text-danger p-2 w-100">Overdue</div>`;
                                    }else{
                                        return `
                                            <span class="badge alert-warning text-warning p-2 w-100">Unreturned</span>
                                        `
                                    }
                                } else if(status === 'Weeded') {
                                    return `
                                        <span class="badge alert-secondary text-secondary p-2 w-100">Weeded</span>
                                    `
                                }
                            }
                        },

                        // Due Date
                        {
                            data: null,
                            class: 'text-nowrap',
                            render: data => {
                                const dueDate = data.dueDate;
                                return `
                                    <div>${ moment(dueDate).format('MMM. D, YYYY') }</div>
                                    <div>${ moment(dueDate).format('hh:mm A') }</div>
                                    <div class="small text-secondary font-italic">${ moment(dueDate).fromNow() }</div>
                                `
                            }
                        },

                        // // Date Returned
                        // {
                        //     data: null,
                        //     class: 'text-nowrap',
                        //     render: data => {
                        //         const returnedDate = data.returnedDate;
                        //         if(returnedDate == null || returnedDate == '') {
                        //             return `<div class="text-secondary font-italic">Not yet returned</div>`
                        //         } else {
                        //             return `
                        //                 <div>${ moment(returnedDate).format('MMM. D, YYYY') }</div>
                        //                 <div>${ moment(returnedDate).format('hh:mm A') }</div>
                        //                 <div class="small text-secondary font-italic">${ moment(returnedDate).fromNow() }</div>
                        //             `
                        //         }
                        //     }
                        // }
                    ]
                });

                $('#viewTransactionDetailsModal').modal('show');
            }
        }
    })
    .fail(() => console.error('There was an error in getting a transaction details'))
}

// Clear or destroy DataTable on modal hide
$('#viewTransactionDetailsModal').on('hidden.bs.modal', () => {
    // Clear and destroy any existing content of DataTable first
    const dt = $('#copiesBorrowedDT').DataTable();
    dt.clear().destroy();
});


/**
 * ===============================================================================
 * GET TRANSACTIONS COUNT
 * ===============================================================================
 */

// Get transactions count AJAX
get_transactions_countAJAX = () => {
    const transactionsCountContainer = $('#transactionsCountContainer');
    const noOfTransactions = $('#noOfTransactions');

    if(transactionsCountContainer.length || noOfTransactions.length) {
        $.ajax({
            url: `${ BASE_URL_API }borrower/transactions/count`,
            type: 'GET',
            headers: AJAX_HEADERS, 
            success: result => {
                const count = result.data;

                // For user dropdown
                if(transactionsCountContainer.length)
                    if(count > 0) transactionsCountContainer.html(`<div class="badge badge-primary p-1">${ count }</div>`);

                // For transactions list
                if(noOfTransactions.length) {
                    var noOfTransactionsBlade;
                    if(count == 0) {
                        noOfTransactionsBlade = `You don't have any transactions yet.`;
                    } else {
                        withOrWithoutS = count > 1 ? 's' : '';
                        noOfTransactionsBlade = `Overall, you have ${count} transaction` + withOrWithoutS + `.`;
                    }
                    noOfTransactions.html(noOfTransactionsBlade);
                }
            }
        })
    }
}