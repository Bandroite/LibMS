<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Publication Countries',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Publication Countries Summary -->
<div class="form-row" id="pubCountriesCountContainer">
    <div class="col-md-8 mb-4">
        <div class="card card-status card-primary">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-primary text-primary">
                        <i class="fas fa-book text-primary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Total number of Publication Countries</h6>
                        <h2 class="text-primary" id="pubCountriesTotalCount">0</h2>
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
                        <td class="font-weight-bold text-right" id="pubCountriesActiveCount">0</td>
                    </tr>
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-danger"></i>
                            </div>
                            <span>Inactive</span>
                        </td>
                        <td class="font-weight-bold text-right" id="pubCountriesInactiveCount">0</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- Publication Countries Table -->
<div class="card">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-book mr-1 text-primary"></i>
            <span>Publication Country</span>
        </div>
        <div>
            <button type="button" class="btn btn-sm btn-primary" data-toggle="modal"
                data-target="#addPublicationCountryModal">
                <i class="fas fa-plus"></i>
                <span>Add publication country</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table" id="publicationCountriesDT">
                <thead>
                    <tr>
                        <th>Publishher Country</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php for($i=0;$i<7;$i++): ?>
                    <tr>
                        <td>Philippines</td>
                        <td>
                            <div class="badge alert-success text-success p-2 w-100">Active</div>
                        </td>
                        <td class="text-center">
                            <div class="dropdown">

                                <!-- Dropdown Toggler -->
                                <div data-toggle="dropdown">
                                    <div class="btn btn-sm btn-muted" data-toggle="tooltip" title="More">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <!-- User Dropdown Menu -->
                                <div class="dropdown-menu dropdown-menu-right">
                                    <div class="dropdown-item" data-toggle="tooltip" data-target="#">
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div class="dropdown-item" data-toggle="tooltip" data-target="#">
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Delete</span>
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