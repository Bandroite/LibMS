<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'undo',
    'title'    => 'Returned Books',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'danger',
    'icon'  => 'undo',
    'title' => 'Returned Materials',
    'id'    => 'returnedMaterials',
    'value' => '234'
]); ?>

<!-- Returned Books Table -->
<div class="card mb-4">
    <div class="card-header py-3 bg-white">
        <i class="fas fa-list text-primary mr-1"></i>
        <span>List of Returned Books</span>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table id="returnedMaterialsDT" class="table small w-100" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Standard No.</th>
                        <th>Material</th>
                        <th>Copy No.</th>
                        <th>Borrower</th>
                        <th>Borrowed At</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    <!-- Returned -->
                    <tr>
                        <td>ISBN 99-9999-9999-99-99</td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-book text-primary"></i>
                                </div>
                                <div>
                                    <div>Life of Juan</div>
                                    <div class="text-secondary small font-italic">Book</div>
                                </div>
                            </div>
                        </td>
                        <td>COPY-0001</td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-user text-primary"></i>
                                </div>
                                <div>
                                    <div>Ricardo Dalisay</div>
                                    <div class="text-secondary small font-italic">Student</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>Apr. 14, 2021</div>
                            <div class="small text-secondary font-italic">a few months ago</div>
                        </td>
                        <td>
                            <div>Jun. 20, 2021</div>
                            <div class="small text-secondary font-italic">a few months ago</div>
                        </td>
                        <td>
                            <div class="badge alert-success text-success p-2 w-100">Returned</div>
                        </td>
                        <td>
                            <div class="dropdown">
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
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#borrowedMaterialDetailsModal"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
                                    <div 
                                        class       = "dropdown-item"
                                        role        = "button"
                                        data-toggle = "modal"
                                        data-target = "#markedAsReturnedModal"
                                    >
                                        <i class="fas fa-check dropdown-icon-item text-primary"></i>
                                        <span>Marked as return</span>
                                    </div>
                                    <div 
                                        class       = "dropdown-item" 
                                        role        = "button"
                                        data-toggle = "modal" 
                                        data-target = "#removeBorrowedRecordModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</div>