<!-- Materials -->
<div class="container py-5">
    <div class="list-group" id="transactions">
        
        <?php for($i=0;$i<16;$i++): ?>
            <div class="list-group-item border rounded-lg mb-4 d-flex">
                <div class="mr-3">
                    <div class="alert-primary rounded-lg flex-center" style="height: 4rem; width: 4rem">
                        <h2><i class="fas fa-exchange-alt text-primary"></i></h2>
                    </div>
                </div>
                <div class="flex-grow-1">
                    <div class="mb-2">
                        <div class="h5">Saturday, July 1, 2021; 11:45 AM</div>
                        <div class="h6 mb-1">
                            <i class="fas fa-user-tie mr-1 text-secondary"></i>
                            <span>Processed by: Vanessah Buenaventura</span>
                        </div>
                        <div class="small text-secondary font-italic">3 hours ago</div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <span>Total copies borrowed:</span>
                            <span>
                                <span class="badge badge-blue ml-2">3</span>
                            </span>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <span>Returned copies:</span>
                            <span>
                                <span class="badge badge-success ml-2">3</span>
                            </span>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <span>Uneturned copies:</span>
                            <span>
                                <span class="badge badge-info ml-2">3</span>
                            </span>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <span>Over due:</span>
                            <span>
                                <span class="badge badge-danger ml-2">3</span>
                            </span>
                        </div>
                    </div>
                    <div class="mt-3">
                        <a href="#" data-toggle="modal" data-target="#viewTransactionDetailsModal" class="btn btn-sm btn-info">View More</a>
                    </div>
                </div>
            </div>
        <?php endfor ?>

    </div>
</div>

<!-- Returned Material Details Modal -->
<div class="modal fade" id="viewTransactionDetailsModal" tabindex="-1">
    <div class="modal-lg modal-dialog modal-dialog-centered modal-dialog-scrollable">
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
                        <h4>Saturday, July 1, 2021; 11:45 AM</h4>
                        <h6>
                            <i class="fas fa-user-tie mr-1 text-secondary"></i>
                            <span>Processed by: Vanessah Buenaventura</span>
                        </h6>
                        <div class="small text-secondary font-italic">3 hours ago</div>
                    </div>
                </div>

                <!-- List of borrowed copies -->
                <h6>
                    <i class="fas fa-copy text-primary mr-1"></i>
                    <span>List of borrowed copies</span>
                </h6>
                <div class="table-responsive">
                    <table class="table w-100" width="100%" cellspacing="0">
                        <thead>
                            <th>Copy Number</th>
                            <th>Material</th>
                            <th>Status</th>
                            <th>Date Returned</th>
                        </thead>
                        <tbody>
                            <?php for($i=0;$i<3;$i++): ?>
                            <tr>
                                <td>COPY-0001</td>
                                <td>The Life of Juan</td>
                                <td>
                                    <span class="badge alert-warning text-warning p-2 w-100">Unreturned</span>
                                </td>
                                <td>
                                    <span class="font-italic text-secondary">Not yet returned</span>
                                </td>
                            </tr>
                            <?php endfor ?>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>