<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book-reader',
    'title'    => 'Borrowers',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

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
                        <h2 class="text-warning">4</h2>
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
                        <h2 class="text-warning">4</h2>
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
                    href        = "#students" 
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
                    href        = "#staffs" 
                    role        = "tab"
                >
                    <i class="fas fa-users mr-1"></i>
                    <span>Staffs</span>
                </a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            
            <!-- Students Tab Panel -->
            <div class="tab-pane fade show active py-3" id="students" role="tabpanel">

                <!-- Students Table -->
                <div class="table-responsive">
                    <table class="table small" id="studentBorrowersDT">
                        <thead>
                            <tr>
                                <th>Student No.</th>
                                <th>Student Name</th>
                                <th>Program, Year/Section</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2018-00001-CM-0</td>
                                <td>
                                    <div class="d-flex align-items-baseline">
                                        <div class="icon-container">
                                            <i class="fas fa-user text-primary"></i>
                                        </div>
                                        <div>Juan Dela Cruz</div>
                                    </div>
                                </td>
                                <td>BSIT 3-1</td>
                                <td>
                                    <div class="badge alert-success text-success p-2 w-100">Active</div>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <div>
                                            <div class="btn btn-sm btn-muted">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Sections Tab Panel -->
            <div class="tab-pane fade py-3" id="staffs" role="tabpanel">

                <!-- Staff Table -->
                <div class="table-responsive">
                    <table class="table small" id="sectionsDT">
                        <thead>
                            <tr>
                                <th>ID Number</th>
                                <th>Staff Name</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>STAFFID-00001</td>
                                <td>
                                    <div class="d-flex align-items-baseline">
                                        <div class="icon-container">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div>Juan Dela Cruz</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="badge alert-success text-success p-2 w-100">Active</div>
                                </td>
                                <td class="text-center">
                                    <div class="dropdown">
                                        <div>
                                            <div class="btn btn-sm btn-muted">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>