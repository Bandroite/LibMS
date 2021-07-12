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