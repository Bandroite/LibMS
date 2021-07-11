<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Materials',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Show Sessioned Alert -->
<?php if($this->session->has_userdata('alert')): ?>
    <div class="alert alert-<?= $this->session->alertTheme ?> alert-dismissible fade show mb-4" role="alert" id="alert">
        <div><b><?= $this->session->alertTitle ?></b> <?= $this->session->alertMessage ?></div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
<?php endif ?>

<div class="card card-status card-primary mb-4" id="materialsCountContainer">
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="card-icon-container alert-primary text-primary">
                <i class="fas fa-book text-primary"></i>
            </div>
            <div class="text-right">
                <h6 class="m-0">Number of materials</h6>
                <h2 class="text-primary" id="materialsCount">0</h2>
            </div>
        </div>
    </div>
</div>

<!-- Materials Table -->
<div class="card">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-book mr-1 text-primary"></i>
            <span>Materials</span>
        </div>
        <div>
            <a href="<?= base_url() ?>admin/add-material" class="btn btn-sm btn-primary">
                <i class="fas fa-plus mr-1"></i>
                <span>Add material</span>
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table w-100 small" id="materialsDT">
                <thead>
                    <tr>
                        <th>Added At (Hidden)</th>
                        <th>Standard Number</th>
                        <th>Material</th>
                        <th>Authors</th>
                        <th>Genres</th>
                        <th>Copies</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>