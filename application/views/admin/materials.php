<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Materials',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Alert -->
<div class="alert alert-success alert-dismissible fade show mb-4" role="alert">
    <div><strong>Success!</strong> A new material has been added</div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

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
            <table class="table" id="materialsDT">
                <thead>
                    <tr>
                        <th>Standard Number</th>
                        <th>Title</th>
                        <th>Copies</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php for($i=0;$i<7;$i++): ?>
                    <tr>
                        <td>ISBN xxx-xxxx-xxxx</td>
                        <td>Life of Juan</td>
                        <td>3</td>
                        <td class="text-center">
                            <div class="dropdown d-inline-block">

                                <!-- Dropdown Toggler -->
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <!-- User Dropdown Menu -->
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a
                                        class="dropdown-item"
                                        href="<?= base_url() ?>admin/materials/1"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View Details</span>
                                    </a>
                                    <a 
                                        class="dropdown-item"
                                        href="<?= base_url() ?>admin/edit-material"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </a>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeMaterialModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
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