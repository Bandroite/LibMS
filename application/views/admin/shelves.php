<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'grip-vertical',
    'title'    => 'Shelves',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Shelves Summary -->
<div class="form-row" id="shelvesCountContainer">
    <div class="col-md-8 mb-4">
        <div class="card card-status card-secondary">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-secondary text-secondary">
                        <i class="fas fa-grip-vertical text-secondary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Total number of Shelves</h6>
                        <h2 class="text-secondary" id="shelvesTotalCount">0</h2>
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
                        <td class="font-weight-bold text-right" id="shelvesActiveCount">0</td>
                    </tr>
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-danger"></i>
                            </div>
                            <span>Inactive</span>
                        </td>
                        <td class="font-weight-bold text-right" id="shelvesInactiveCount">0</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Shelves -->
<div class="card mb-4">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-grip-vertical mr-1 text-primary"></i>
            <span>Shelves</span>
        </div>
        <div>
            <button 
                type="button" 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addShelfModal"
            >
                <i class="fas fa-plus"></i>
                <span>Add shelf</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table w-100" id="shelvesDT" width="100%">
                <thead>
                    <tr>
                        <th>Shelf Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>