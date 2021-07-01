<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'undo',
    'title'    => 'Returned Books',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'danger',
    'icon'  => 'undo',
    'title' => 'Returned Books',
    'id'    => 'returnedBooks',
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
            <table id="materialsBorrowRecordsDT" class="table table-hover" cellspacing="0">

                <thead>
                    <tr role="row">
                        <th>Standard No.</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Borrower</th>
                        <th>Date Borrowed</th>
                        <th>Due Date</th>
                        <th>Actions</th>
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
                        <td>
                            <div>March 2, 2021</div>
                            <div>11:00 AM</div>
                        </td>
                        <td>
                            <div>March 2, 2021</div>
                            <div>11:00 AM</div>
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
                                        data-target = "#returnedMaterialDetailsModal"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-blue"></i>
                                        <span>View details</span>
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