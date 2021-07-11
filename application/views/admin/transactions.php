<?php $this->load->view('admin/components/title_header', [
    'icon'     => 'exchange-alt',
    'title'    => 'Transactions',
    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
]); ?>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Show Sessioned Alert -->
<?php if($this->session->has_userdata('alert')): ?>
    <div class="alert alert-<?= $this->session->alertTheme ?> alert-dismissible fade show mb-4" role="alert" id="alert">
        <div><b><?= $this->session->alertTitle ?></b> <?= $this->session->alertMessage ?></div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
<?php endif ?>

<!-- Transactions Summary -->
<div class="card card-status card-info mb-4" id="transactionsCountContainer">
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="card-icon-container alert-info text-info">
                <i class="fas fa-exchange-alt text-info"></i>
            </div>
            <div class="text-right">
                <h6 class="m-0">Total Transactions</h6>
                <h2 class="text-info" id="transactionsCount">0</h2>
            </div>
        </div>
    </div>
</div>

<div class="card mb-4">
    <div class="card-header flex-h-separated">
        <div class="text-primary">
            <i class="fas fa-exchange-alt mr-1"></i>
            <span>Transactions</span>
        </div>
        <div>
            <a href="<?= base_url() ?>admin/add-borrow-record" class="btn btn-primary btn-sm">
                <i class="fas fa-plus mr-1"></i>
                <span>Add new record</span>
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table id="transactionsDT" class="table small w-100" width="100%" cellspacing="0">
                <thead>
                    <th>Added by</th>
                    <th>Borrower</th>
                    <th>Date & Time Borrowed</th>
                    <th>No. of Copies Borrowed</th>
                    <th>Issued by:</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div>
                                    <div>Juan Dela Cruz</div>
                                    <div class="text-small font-italic text-secondary">Student</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-hand-paper"></i>
                                </div>
                                <div>
                                    <div>April 1, 2020</div>
                                    <div class="text-small font-italic text-secondary">a minute ago</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-copy"></i>
                                </div>
                                <div>
                                    <div>3</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                <div>
                                    <div>Juan Dela Cruz</div>
                                    <div class="text-small font-italic text-secondary">Librarian</div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="btn btn-sm btn-muted">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


