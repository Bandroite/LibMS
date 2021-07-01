<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'exchange-alt',
    'title'    => 'Transactions',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Transactions Summary -->
<div class="card card-status card-info mb-4">
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="card-icon-container alert-info text-info">
                <i class="fas fa-exchange-alt text-info"></i>
            </div>
            <div class="text-right">
                <h6 class="m-0">Total Transactions</h6>
                <h2 class="text-info">234</h2>
            </div>
        </div>
    </div>
</div>


<!-- Borrowed and Returned Summary -->
<div class="form-row">

    <!-- Borrowed Summary -->
    <div class="col-md-6 mb-4">
        <div class="card card-status card-success">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-success text-success">
                        <i class="fas fa-book-reader text-success"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Borrowed</h6>
                        <h2 class="text-success">234</h2>
                    </div>
                </div>
                <div class="dropdown-divider"></div>
                <div class="text-right">
                    <a href="<?= base_url() ?>admin/borrowed" class="btn btn-sm btn-success">View More Details</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Returned Summary -->
    <div class="col-md-6 mb-4">
        <div class="card card-status card-danger">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-danger text-danger">
                        <i class="fas fa-undo text-danger"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Returned</h6>
                        <h2 class="text-danger">234</h2>
                    </div>
                </div>
                <div class="dropdown-divider"></div>
                <div class="text-right">
                    <a href="<?= base_url() ?>admin/returned" class="btn btn-sm btn-danger">View More Details</a>
                </div>
            </div>
        </div>
    </div>
</div>


<a href="<?= base_url() ?>admin/add-borrow-record" class="btn btn-primary btn-sm">
    <i class="fas fa-plus mr-1"></i>
    <span>Add new record</span>
</a>
