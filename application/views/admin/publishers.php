<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Publishers',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Publishers Summary -->
<div class="form-row" id="publishersCountContainer">
    <div class="col-md-8 mb-4">
        <div class="card card-status card-primary">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-primary text-primary">
                        <i class="fas fa-book text-primary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Total Publishers</h6>
                        <h2 class="text-primary" id="publishersTotalCount">0</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="card card-status card-primary">
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
                        <td class="font-weight-bold text-right" id="publishersActiveCount">0</td>
                    </tr>
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-danger"></i>
                            </div>
                            <span>Inactive</span>
                        </td>
                        <td class="font-weight-bold text-right" id="publishersInactiveCount">0</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Publishers Table -->
<div class="card">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-book mr-1 text-primary"></i>
            <span>Publisher</span>
        </div>
        <div>
            <button 
                type="button" 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addPublisherModal"
            >
                <i class="fas fa-plus"></i>
                <span>Add publisher</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table w-100" id="publishersDT" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Publisher Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>