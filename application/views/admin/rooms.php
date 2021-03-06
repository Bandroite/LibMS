<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'cube',
    'title'    => 'Rooms',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Rooms Summary -->
<div class="form-row" id="roomsCountContainer">
    <div class="col-md-8 mb-4">
        <div class="card card-status card-secondary">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-secondary text-secondary">
                        <i class="fas fa-cube text-secondary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Number of Rooms</h6>
                        <h2 class="text-secondary" id="roomsTotalCount">0</h2>
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
                        <td class="font-weight-bold text-right" id="roomsActiveCount"></td>
                    </tr>
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-danger"></i>
                            </div>
                            <span>Inctive</span>
                        </td>
                        <td class="font-weight-bold text-right" id="roomsInactiveCount"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Rooms Table -->
<div class="card mb-4">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-cube mr-1 text-primary"></i>
            <span>Rooms</span>
        </div>
        <div>
            <button 
                type="button" 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addRoomModal"
            >
                <i class="fas fa-plus"></i>
                <span>Add room</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table w-100" id="roomsDT">
                <thead>
                    <tr>
                        <th>Room Name</th>
                        <th>Building</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                    <!-- Active Room -->
                    <tr>
                        <td>Lorem</td>
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
                                        data-target="#editRoomModal"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeRoomModal"
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
