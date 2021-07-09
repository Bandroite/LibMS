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
            <table class="table w-100" id="publicationCountriesDT" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Publisher Countries</th>
                        <th>Status</th>
                        <th>Added At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>