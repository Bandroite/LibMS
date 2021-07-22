<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'tachometer-alt',
    'title'    => 'Dashboard',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Greetings -->
<div class="alert alert-primary alert-dismissible fade show" role="alert">
    <div>Welcome, <span id="librarianName"></span></div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<!-- Data Summary -->
<div class="form-row">

    <!-- Available Books -->
    <div class="col-md-6 mb-4">
        <div class="card card-status card-primary h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-primary text-primary">
                        <i class="fas fa-book text-primary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Available Books</h6>
                        <h2 class="text-primary">234</h2>
                    </div>
                </div>

                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="#" class="btn btn-sm btn-primary">View Details</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Borrowers -->
    <div class="col-md-6 mb-4">
        <div class="card card-status card-warning h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-warning text-warning">
                        <i class="fas fa-users text-warning"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Borrowers</h6>
                        <h2 class="text-warning">234</h2>
                    </div>
                </div>
                
                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="#" class="btn btn-sm btn-warning text-white">View Details</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Borrowed Books -->
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card card-status card-success h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-success text-success">
                        <i class="fas fa-money-check text-success"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Borrowed Books</h6>
                        <h2 class="text-success">234</h2>
                    </div>
                </div>
                
                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="#" class="btn btn-sm btn-success">View Details</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Returned Books -->
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card card-status card-danger h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-danger text-danger">
                        <i class="fas fa-undo text-danger"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Returned Books</h6>
                        <h2 class="text-danger">234</h2>
                    </div>
                </div>
                
                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="#" class="btn btn-sm btn-danger">View Details</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Weeded Books -->
    <div class="col-xl-4 col-md-12 mb-4">
        <div class="card card-status card-secondary h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-secondary text-secondary">
                        <i class="fas fa-unlink text-secondary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Weeded Books</h6>
                        <h2 class="text-secondary">234</h2>
                    </div>
                </div>
                
                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="#" class="btn btn-sm btn-secondary">View Details</a>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Inventory of Books -->
<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-table mr-1 text-primary"></i>
        <span>Inventory of Books</span>
    </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table" id="inventoryOfBooksDT" width="100%" cellspacing="0">
                    <thead class="thead">
                        <tr>
                            <th>Book Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Quantity</th> 
                        </tr>
                    </thead> 
                    <tbody>
                        <?php for($i=0;$i<25;$i++): ?>
                        <tr role="row" class="even">
                            <td class="sorting_1">book  now</td>
                            <td>book one</td>
                            <td>ALL</td>
                            <td>1</td>
                        </tr>
                        <?php endfor ?>
                    </tbody>
                </table>
            </div>
        </div>
</div>

<!-- Transactions History -->
<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-chart-area mr-1 text-primary"></i>
        <span>Transaction History</span>
    </div>
    <div class="card-body">
        <div class="table-responsive"> 
            <table id="transactionHistoryDT" class="table table-hover" cellspacing="0"  >
                <thead class="thead">
                    <tr> 
                        <th>IBSN</th>
                        <th>Title</th> 
                        <th>Borrower</th> 
                        <th>DateBorrowed</th>
                        <th>DueDate</th> 
                        <th>Date Returned</th>
                        <th>Remarks</th> 
                    </tr>   
                </thead>
                <tbody>
                    <?php for($i=0;$i<25;$i++): ?>
                        <tr role="row">
                            <td>1345673</td>
                            <td>life of juan</td>
                            <td>ambot guess sure</td>
                            <td>2018-03-23 19:01:51</td>
                            <td>2018-03-24 19:01:51</td>
                            <td>0000-00-00 00:00:00</td>
                            <td>Overdue</td>
                        </tr>
                    <?php endfor ?>
                </tbody>
            </table>
        </div>
    </div>
</div> 