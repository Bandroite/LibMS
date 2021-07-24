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
                        <h6 class="m-0">Available Copies</h6>
                        <h2 class="text-primary" id="availableCopies">0</h2>
                    </div>
                </div>

                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="<?= base_url() ?>admin/materials" class="btn btn-sm btn-primary">View Details</a>
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
                        <h2 class="text-warning" id="borrowersCount">0</h2>
                    </div>
                </div>
                
                <div class="text-right">
                    <div class="dropdown-divider"></div>
                    <a href="<?= base_url() ?>" class="btn btn-sm btn-warning text-white">View Details</a>
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
                        <h2 class="text-success" id="borrowedCopiesCount">0</h2>
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
                        <h2 class="text-danger" id="returnedCopiesCount">0</h2>
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
                        <h2 class="text-secondary" id="weedingsCount">234</h2>
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

<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-table mr-1 text-primary"></i>
        <span>Latest Transactions</span>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table id="latestTransactionsDT" class="table small w-100" width="100%" cellspacing="0">
                <thead>
                    <th>Added by</th>
                    <th>Borrower</th>
                    <th>Date & Time Borrowed</th>
                    <th>No. of Copies Borrowed</th>
                    <th>Issued by:</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div>
                                    <div>Juan Dela Cruz</div>
                                    <div class="text-small font-italic text-secondary">Student</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-hand-paper"></i>
                                </div>
                                <div>
                                    <div>April 1, 2020</div>
                                    <div class="text-small font-italic text-secondary">a minute ago</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-copy"></i>
                                </div>
                                <div>
                                    <div>3</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                <div>
                                    <div>Juan Dela Cruz</div>
                                    <div class="text-small font-italic text-secondary">Librarian</div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="btn btn-sm btn-muted">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>