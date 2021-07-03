<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'book',
    'title'    => 'Weeded Materials',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'dark',
    'icon'  => 'book',
    'title' => 'Number of Weeded Materials',
    'id'    => 'numberOfWeededMaterials',
    'value' => '8'
]); ?>

<!-- Weeded Materials Table -->
<div class="card">
    <div class="card-header">
        <i class="fas fa-book mr-1 text-primary"></i>
        <span>Weeded Languages</span>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table" id="weededMaterialsDT">
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
                        <td  class="text-center">
                            <div class="dropdown">

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
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="tooltip"
                                        data-target="#"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-secondary"></i>
                                        <span>View Details</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="tooltip"
                                        data-target="#"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="tooltip"
                                        data-target="#"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove as Weeded Material</span>
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