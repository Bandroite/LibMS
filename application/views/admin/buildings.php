<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'building',
    'title'    => 'Buildings',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Buildings Summary -->
<div class="form-row" id="buildingsCountContainer">
    <div class="col-md-8 mb-4">
        <div class="card card-status card-secondary">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-secondary text-secondary">
                        <i class="fas fa-building text-secondary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Total number of Buildings</h6>
                        <h2 class="text-secondary" id="buildingsTotalCount">0</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="card card-status card-secondary">
            <div class="card-body">
                <h6>Summary</h6>
                <table class="table table-sm border-bottom mb-0">
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-success"></i>
                            </div>
                            <span>Active</span>
                        </td>
                        <td class="font-weight-bold text-right" id="buildingsActiveCount">0</td>
                    </tr>
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-danger"></i>
                            </div>
                            <span>Inactive</span>
                        </td>
                        <td class="font-weight-bold text-right" id="buildingsInactiveCount">0</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Buildings Tables -->
<div class="card">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-building text-primary"></i>
            <span>Buildings</span>
        </div>
        <div>
            <button 
                type="button" 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addBuildingModal"
            >
                <i class="fas fa-plus"></i>
                <span>Add building</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table w-100" id="buildingsDT">
                <thead>
                    <tr>
                        <th>Building Name</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    <!-- Active -->
                    <tr>
                        <td>Rothlener Bdlg.</td>
                        <td>Don Fabian, QC</td>
                        <td>
                            <div class="badge alert-success text-success p-2 w-100">Active</div>
                        </td>
                        <td class="text-center">
                            <div class="dropdown d-inline-block">
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#editBuildingModal"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeBuildingModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <!-- Inactive -->
                    <tr>
                        <td>Rothlener Bdlg.</td>
                        <td>Don Fabian, QC</td>
                        <td>
                            <div class="badge alert-danger text-danger p-2 w-100">Inactive</div>
                        </td>
                        <td class="text-center">
                            <div class="dropdown d-inline-block">
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#editBuildingModal"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeBuildingModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
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
