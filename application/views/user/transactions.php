<!-- Materials -->
<div class="container py-5">

    <!-- Header -->
    <div class="mb-4">
        <h3>View all of your transactions here</h3>
        <h6 class="text-secondary" id="noOfTransactions"></h6>
    </div>

    <!-- Transaction List -->
    <div class="list-group" id="transactionsList"></div>
</div>

<!-- Returned Material Details Modal -->
<div class="modal" id="viewTransactionDetailsModal" tabindex="-1">
    <div class="modal-xl modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-exchange-alt mr-1 text-primary"></i>
                    <span>Transaction Details</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Header -->
                <div class="d-flex mb-4">
                    <div class="mr-3">
                        <div class="alert-primary rounded-lg flex-center" style="height: 4rem; width: 4rem">
                            <h2><i class="fas fa-exchange-alt text-primary"></i></h2>
                        </div>
                    </div>
                    <div>
                        <h4 id="transactionDate"></h4>
                        <h6>
                            <i class="fas fa-user-tie mr-1 text-secondary"></i>
                            <span>Processed by: <span id="processedBy"></span></span>
                        </h6>
                        <div class="small text-secondary font-italic" id="transactionHumanized"></div>
                    </div>
                </div>

                <!-- List of borrowed copies -->
                <h6>
                    <i class="fas fa-copy text-primary mr-1"></i>
                    <span>List of borrowed copies</span>
                </h6>
                <div class="table-responsive p-3 border rounded-lg">
                    <table class="table w-100" width="100%" cellspacing="0" id="copiesBorrowedDT">
                        <thead>
                            <th>Copy Number</th>
                            <th>Material</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Date Returned</th>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>