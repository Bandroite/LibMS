<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Materials',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'primary',
    'icon'  => 'book',
    'title' => 'Number of Materials',
    'id'    => 'numberOfMaterials',
    'value' => '234'
]); ?>

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
                        <th>Standard Number</th>
                        <th>Material</th>
                        <th>Genres</th>
                        <th>Language</th>
                        <th>Publisher</th>
                        <th>Copies</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>