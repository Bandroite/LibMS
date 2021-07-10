<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'money-check',
    'title'    => 'Borrowed Books',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<?php $this->load->view('admin/components/summary_card', [
    'theme' => 'success',
    'icon'  => 'money-check',
    'title' => 'Borrowed Books',
    'id'    => 'borrowedBooks',
    'value' => '234'
]); ?>

<!-- Borrowed Materials Table -->
<div class="card mb-4">
    <div class="card-header">
        <div>
            <i class="fas fa-list mr-1 text-primary"></i>
            <span>Borrowed Materials</span>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table id="borrowedMaterialsDT" class="table small w-100" cellspacing="0" width="100%">
                <thead>
                    <tr role="row">
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
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>