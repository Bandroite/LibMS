<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'undo',
    'title'    => 'Returned Copies',
    'subtitle' => 'Manage the list of returned copies here.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'danger',
    'icon'  => 'undo',
    'title' => 'Returned Copies',
    'id'    => 'returnedCopiesCount',
    'value' => '0'
]); ?>

<!-- Returned Books Table -->
<div class="card mb-4">
    <div class="card-header py-3 bg-white">
        <i class="fas fa-list text-primary mr-1"></i>
        <span>List of Returned Copies</span>
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
                        <th>Returned At</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>