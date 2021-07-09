<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Genre',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Genres Summary -->
<div class="form-row" id="genresCountContainer">
    <div class="col-md-8 mb-4">
        <div class="card card-status card-primary">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="card-icon-container alert-primary text-primary">
                        <i class="fas fa-book text-primary"></i>
                    </div>
                    <div class="text-right">
                        <h6 class="m-0">Total number of Languages</h6>
                        <h2 class="text-primary" id="genresTotalCount">0</h2>
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
                        <td class="font-weight-bold text-right" id="genresActiveCount">0</td>
                    </tr>
                    <tr>
                        <td class="d-flex align-items-center">
                            <div style="font-size: 8px" class="mr-2">
                                <i class="fas fa-circle text-danger"></i>
                            </div>
                            <span>Inactive</span>
                        </td>
                        <td class="font-weight-bold text-right" id="genresInactiveCount">0</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Genres Table -->
<div class="card">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-book mr-1 text-primary"></i>
            <span>Genres</span>
        </div>
        <div>
            <button 
                type="button" 
                href="#" 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addGenreModal"
            >
                <i class="fas fa-plus"></i>
                <span>Add genre</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table w-100" id="genresDT" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Genre</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>
