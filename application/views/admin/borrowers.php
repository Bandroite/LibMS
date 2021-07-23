<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book-reader',
    'title'    => 'Borrowers',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Show Sessioned Alert -->
<?php if($this->session->has_userdata('alert')): ?>
    <div class="alert alert-<?= $this->session->alertTheme ?> alert-dismissible fade show mb-4" role="alert" id="alert">
        <div><b><?= $this->session->alertTitle ?></b> <?= $this->session->alertMessage ?></div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
<?php endif ?>

<!-- Borrowers Summary -->
<div class="form-row">
    
    <!-- Students -->
    <div class="col-md-6">
        <div class="card card-status card-warning mb-4">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-warning text-warning">
                        <i class="fas fa-book-reader text-warning"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Students</h6>
                        <h2 class="text-warning" id="studentsCount">0</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Staffs -->
    <div class="col-md-6">
        <div class="card card-status card-warning mb-4">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-warning text-warning">
                        <i class="fas fa-book-reader text-warning"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Staffs</h6>
                        <h2 class="text-warning" id="staffsCount">0</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Students and Staffs Table -->
<div class="card mb-4">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-book-reader mr-1 text-primary"></i>
            <span>Borrowers</span>
        </div>
        <div>
            <a href="<?= base_url() ?>admin/add-borrower" class="btn btn-sm btn-primary">
                <i class="fas fa-plus mr-1"></i>
                <span>Add new borrower</span>
            </a>
        </div>
    </div>
    <div class="card-body">
        <ul class="nav nav-tabs" id="myTab" role="tablist">

            <!-- Students Tab -->
            <li class="nav-item" role="presentation">
                <a 
                    class       = "nav-link active" 
                    id          = "students-tab" 
                    data-toggle = "tab" 
                    href        = "#studentsPanel" 
                    role        = "tab"
                >
                    <i class="fas fa-users mr-1"></i>
                    <span>Students</span>
                </a>
            </li>

            <!-- Staffs Tab -->
            <li class="nav-item" role="presentation">
                <a 
                    class       = "nav-link" 
                    id          = "staffs-tab" 
                    data-toggle = "tab" 
                    href        = "#staffsPanel" 
                    role        = "tab"
                >
                    <i class="fas fa-users mr-1"></i>
                    <span>Staffs</span>
                </a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            
            <!-- Students Tab Panel -->
            <div class="tab-pane fade show active py-3" id="studentsPanel" role="tabpanel">

                <!-- Students Table -->
                <div class="table-responsive">
                    <table class="table small w-100" id="studentBorrowersDT" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Added At (hidden)</th>
                                <th>Student No.</th>
                                <th>Student Name</th>
                                <th>Program, Year/Section</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>

            <!-- Staff Tab Panel -->
            <div class="tab-pane fade py-3" id="staffsPanel" role="tabpanel">

                <!-- Staff Table -->
                <div class="table-responsive">
                    <table class="table small w-100" id="staffBorrowersDT" width="100%">
                        <thead>
                            <tr>
                                <th>Added At (hidden)</th>
                                <th>ID Number</th>
                                <th>Staff Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>