<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Material Types',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Alert -->
<div class="alert alert-success alert-dismissible fade show mb-4" role="alert">
    <div><strong>Success!</strong> A new material type has been added</div>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'primary',
    'icon'  => 'book',
    'title' => 'Total Material Types',
    'id'    => 'totalMaterialTypes',
    'value' => '8'
]); ?>

<!-- Material Types Table -->
<div class="card">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-book mr-1 text-primary"></i>
            <span>Material Types</span>
        </div>
        <div>
            <button 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addMaterialTypeModal"
            >
                <i class="fas fa-plus"></i>
                <span>Add material type</span>
            </button>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table" id="materialTypesDT">
                <thead>
                    <tr>
                        <th>Material Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php for($i=0;$i<7;$i++): ?>
                    <tr>
                        <td>Book</td>
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
                                        data-target="#editMaterialTypeModal"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeMaterialTypeModal"
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