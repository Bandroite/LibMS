<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'building',
    'title'    => 'Buildings',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'secondary',
    'icon'  => 'building',
    'title' => 'Number of Buildings',
    'id'    => 'numberOfBuildings',
    'value' => '8'
]); ?>

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
                        <th>Actions</tr>
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
