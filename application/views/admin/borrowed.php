<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'money-check',
    'title'    => 'Borrowed Books',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'success',
    'icon'  => 'money-check',
    'title' => 'Borrowed Books',
    'id'    => 'borrowedBooks',
    'value' => '234'
]); ?>

<!-- Borrowed Books Table -->
<div class="card mb-4">
    <div class="card-header">
        <div>
            <i class="fas fa-list mr-1 text-primary"></i>
            <span>Borrowed Books</span>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table id="materialsBorrowRecordsDT" class="table table-hover" cellspacing="0">

                <thead>
                    <tr role="row">
                        <th>Standard No.</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Borrower</th>
                        <th>Date Borrowed</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php for($i=0;$i<50;$i++): ?>
                    
                    <!-- Returned -->
                    <tr>
                        <td>ISBN 134567364</td>
                        <td>Life of Juan</td>
                        <td>History and Geography</td>
                        <td>John Craig Palacios Nillos</td>
                        <td>2020-05-03 01:18:00</td>
                        <td>2020-05-10 01:18:00</td>
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
                    
                    <!-- Unreturned -->
                    <tr>
                        <td>ISBN 134567364</td>
                        <td>Life of Juan</td>
                        <td>History and Geography</td>
                        <td>John Craig Palacios Nillos</td>
                        <td>2020-05-03 01:18:00</td>
                        <td>2020-05-10 01:18:00</td>
                        <td>
                            <div class="badge alert-warning text-warning p-2 w-100">
                                <span>Unreturned</span>
                            </div>
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

                    <!-- Over due date -->
                    <tr>
                        <td>ISBN 134567364</td>
                        <td>Life of Juan</td>
                        <td>History and Geography</td>
                        <td>John Craig Palacios Nillos</td>
                        <td>2020-05-03 01:18:00</td>
                        <td>2020-05-10 01:18:00</td>
                        <td>
                            <div class="badge alert-danger text-danger p-2 w-100">
                                <span>Over due</span>
                            </div>
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
                    <?php endfor ?>
                </tbody>
            </table>
        </div>
    </div>
</div>