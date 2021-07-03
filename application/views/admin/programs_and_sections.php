<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'list-ol',
    'title'    => 'Programs & Sections',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Programs & Sections Summary -->
<div class="form-row">

    <!-- Programs Summary -->
    <div class="col-md-6 mb-4">
        <div class="card card-status card-success">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-success text-success">
                        <i class="fas fa-list-ul text-success"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Programs</h6>
                        <h2 class="text-success">234</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Sections Summary -->
    <div class="col-md-6 mb-4">
        <div class="card card-status card-danger">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-danger text-danger">
                        <i class="fas fa-list-ol text-danger"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Sections</h6>
                        <h2 class="text-danger">234</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Programs & Sections Tables -->
<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-list-ol mr-1 text-primary"></i>
        <span>Programs & Sections</span>
    </div>
    <div class="card-body">
        <ul class="nav nav-tabs" id="myTab" role="tablist">

            <!-- Programs Tab -->
            <li class="nav-item" role="presentation">
                <a 
                    class       = "nav-link active" 
                    id          = "programs-tab" 
                    data-toggle = "tab" 
                    href        = "#programs" 
                    role        = "tab"
                >
                    <i class="fas fa-list-ul mr-1"></i>
                    <span>Programs</span>
                </a>
            </li>

            <!-- Sections Tab -->
            <li class="nav-item" role="presentation">
                <a 
                    class       = "nav-link" 
                    id          = "sections-tab" 
                    data-toggle = "tab" 
                    href        = "#sections" 
                    role        = "tab"
                >
                    <i class="fas fa-list-ol mr-1"></i>
                    <span>Sections</span>
                </a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            
            <!-- Programs Tab Panel -->
            <div 
                class = "tab-pane fade show active py-3" 
                id    = "programs" 
                role  = "tabpanel"
            >
                <!-- Add Program -->
                <div class="form-group text-center">
                    <a href="#" class="btn btn-sm btn-primary">
                        <i class="fas fa-plus mr-1"></i>
                        <span>Add Program</span>
                    </a>
                </div>

                <!-- Programs Table -->
                <div class="table-responsive">
                    <table class="table" id="programsDT">
                        <thead>
                            <tr>
                                <th>Program Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php for($i=0;$i<24;$i++): ?>
                            <tr>
                                <td>Program 1</td>
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
                            <?php endfor ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Sections Tab Panel -->
            <div 
                class = "tab-pane fade py-3" 
                id    = "sections" 
                role  = "tabpanel"
            >

                <!-- Add Section -->
                <div class="form-group text-center">
                    <a href="#" class="btn btn-sm btn-primary">
                        <i class="fas fa-plus mr-1"></i>
                        <span>Add section</span>
                    </a>
                </div>

                <!-- Sections Table -->
                <div class="table-responsive">
                    <table class="table" id="sectionsDT">
                        <thead>
                            <tr>
                                <th>Section</th>
                                <th>Program</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php for($i=0;$i<64;$i++): ?>
                            <tr>
                                <td>Section 1</td>
                                <td>Program 1</td>
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
                            <?php endfor ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>