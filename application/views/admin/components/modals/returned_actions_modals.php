<!-- Returned Material Details Modal -->
<div 
    class         = "modal fade" 
    id            = "returnedMaterialDetailsModal" 
    tabindex      = "-1"
>
    <div class="modal-lg modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-book mr-1 text-info"></i>
                    <span>Returned Material Details</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body d-flex">
                <div class="px-3">
                    <img src="<?= base_url() ?>public/images/materials/book_1.jpg" alt="" style="width: 15rem">
                </div>
                <div class="flex-grow-1">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a 
                                class="nav-link active" 
                                id="home-tab" 
                                data-toggle="tab" 
                                href="#materialDetailsTab" 
                                role="tab" 
                            >
                                <i class="fas fa-book mr-1"></i>
                                <span>Material Details</span>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a 
                                class="nav-link" 
                                id="home-tab" 
                                data-toggle="tab" 
                                href="#borrowerDetailsTab" 
                                role="tab" 
                            >
                                <i class="fas fa-book-reader mr-1"></i>
                                <span>Borrower Details</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        
                        <!-- Material Details Tab Panel -->
                        <div 
                            class = "tab-pane py-3 fade show active" 
                            id    = "materialDetailsTab" 
                            role  = "tabpanel" 
                        >
                            <table class="table border-bottom">
                                <tr>
                                    <th>Standard Number</th>
                                    <td>ISBN xxx-xxxx-xxxx</td>
                                </tr>
                                <tr>
                                    <th>Title</th>
                                    <td>Life of Juan</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>Book</td>
                                </tr>
                                <tr>
                                    <th>Copy Number</th>
                                    <td>xxx-xxxx-xxxx</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>
                                        <div class="badge alert-success text-success p-2">Returned</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        
                        <!-- Borrower Details Tab Panel -->
                        <div 
                            class = "tab-pane py-3 fade" 
                            id    = "borrowerDetailsTab" 
                            role  = "tabpanel" 
                        >
                            <table class="table border-bottom">
                                <tr>
                                    <th>Name</th>
                                    <td>Juan Dela Cruz</td>
                                </tr>
                                <tr>
                                    <th>User Type</th>
                                    <td>Student</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>