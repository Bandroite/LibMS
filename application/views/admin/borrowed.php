<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'money-check',
    'title'    => 'Borrowed Books',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Borrowed Materials Summary -->
<div class="card card-status card-success mb-4" id="borrowedMaterialsCountContainer">
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="card-icon-container alert-info text-success">
                <i class="fas fa-money-check text-success"></i>
            </div>
            <div class="text-right">
                <h6 class="m-0">Total Borrowed Materials</h6>
                <h2 class="text-success" id="borrowedMaterialsCount">0</h2>
            </div>
        </div>
    </div>
</div>

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