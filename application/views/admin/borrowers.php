<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book-reader',
    'title'    => 'Borrowers',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

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

<!-- Borrowers Lists -->
<div class="card shadow mb-4">
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
        <div class="table-responsive">
            <table id="borrowersDT" class="table table-hover">
                <thead>
                    <tr>
                        <th>BorrowerId</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Sex</th>
                        <th>ContactNo</th>
                        <th>Course/Year</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php for($i=0;$i<53;$i++): ?>
                    <tr>
                        <td>119</td>
                        <td>jom baron lozada</td>
                        <td>ilog</td>
                        <td>Female</td>
                        <td>0920</td>
                        <td>BEED</td>
                        <td class="text-center">
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
                            </div>
                        </td>
                    </tr>
                    <?php endfor ?>
                </tbody>

            </table>
        </div>
    </div>
</div>
