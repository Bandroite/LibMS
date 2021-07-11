<div class="mb-4">
    <h2 class="mb-0">Add borrow record</h2>
    <div class="text-secondary">Add borrow record here by filling up the required fields</div>
</div>

<div id="alertContainer"></div>

<form id="addBorrowRecordForm">

    <!-- Fields -->
    <div class="row justify-content-center">
        
        <!-- Borrower Details -->
        <div class="col-md-6">
            <div class="card mb-4">
                <div class="card-header text-primary">
                    <i class="fas fa-book-reader mr-1"></i>
                    <span>Borrower</span>
                </div>
                <div class="card-body">

                    <!-- Student Number/Staff ID Form -->
                    <div id="borrowerForm">
                        <div id="alertContainer"></div>

                        <div class="form-group">
                            <label for="borrowerIDNumberInput">Student Number/Staff ID</label>
                            <select 
                                type="text" 
                                class="selectpicker form-control" 
                                id="borrowerIDNumberInput" 
                                data-style="form-control border"
                                data-live-search="true"
                                data-size="2"
                                title="Please select a borrower"
                            >
                                <option disabled class="text-center small">No data</option>
                            </select>
                        </div>
                        <div class="form-group text-center">
                            <button type="button" class="btn btn-success" id="saveBorrowerIDNumberBtn" disabled>
                                <span>Save</span>
                                <i class="fas fa-check ml-1"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Borrower Details -->
                    <div id="borrowerDetails" style="display: none">
                        <div class="d-flex mb-3">
                            <div class="mr-3">
                                <div style="width: 4.5rem; height: 4.5rem" class="rounded-lg alert-primary flex-center">
                                    <h2><i class="fas fa-book-reader text-primary"></i></h2>
                                </div>
                            </div>
                            <div>
                                <input type="hidden" name="userID" id="borrowerIDNumber">
                                <div class="small" id="borrowerIDNumberForDisplay"></div>
                                <h3 class="mb-1" id="borrowerFullName"></h3>
                                <h6 class="text-secondary" id="borrowerUserType"></h6>
                            </div>
                        </div>
                    
                        <!-- User Actions for Borrower Details -->
                        <div class="text-center">
                            <button class="btn btn-blue" id="editBorrowerIDNumberBtn" type="button">
                                <i class="fas fa-edit mr-1"></i>
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copies Form -->
        <div class="col-md-6">
            <div class="card mb-4">
                <div class="card-header text-primary">
                    <i class="fas fa-book mr-1"></i>
                    <span>Add Copies to be borrowed</span>
                </div>
                <div class="card-body">
                    <div id="copyForm">

                        <!-- Standard Number -->
                        <div class="form-group">
                            <label class="small" for="standardNumberForAddCopy">Standard Number</label>
                            <select 
                                id="standardNumberForAddCopy" 
                                class="selectpicker form-control form-control-sm"
                                data-style="form-control form-control-sm border"
                                data-live-search="true"
                                data-size="5"
                                title="Please select the material"
                            >
                                <option disabled class="text-center small">No data</option>
                            </select>
                        </div>

                        <!-- Copy Number -->
                        <div class="form-group">
                            <label class="small" for="copiesForAddCopy">Copy Number</label>
                            <select 
                                id="copiesForAddCopy" 
                                class="selectpicker form-control form-control-sm"
                                data-style="form-control form-control-sm border"
                                data-live-search="true"
                                data-size="5"
                                title="Please select the copy number"
                            >
                                <option disabled class="text-center small">Please select a material first</option>
                            </select>
                        </div>

                        <!-- Due date and time -->
                        <div class="form-group">
                            <label class="small" for="standardNumberForCopy">Due Date</label>
                            <div class="form-row">
                                <div class="col-6">
                                    <input 
                                        type="date" 
                                        id="dueDate"
                                        class="form-control form-control-sm"
                                    >
                                </div>
                                <div class="col-6">
                                    <input 
                                        type="time" 
                                        id="dueTime"
                                        class="form-control form-control-sm"
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- User Actions for Copy Form -->
                        <div class="form-group text-center">
                            <button class="btn btn-sm btn-danger" type="button" id="resetCopyFormBtn">
                                <span>Reset</span>
                                <i class="fas fa-undo ml-1"></i>
                            </button>
                            <button class="btn btn-sm btn-blue" type="button" id="addCopyBtn" disabled>
                                <span>Add</span>
                                <i class="fas fa-plus ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copy Tables -->
    <div class="card">
        <div class="card-header flex-h-separated">
            <div class="text-primary">
                <i class="fas fa-book mr-1"></i>
                <span>Copies to be borrowed</span>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table w-100" id="borrowedCopiesTable">
                    <thead>
                        <th>Copy Number</th>
                        <th>Material</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div class="form-group text-center">
                <button 
                    class="btn btn-blue" 
                    id="submitCopiesForBorrowBtn"
                    type="submit"
                    disabled
                >Submit</button>
            </div>
        </div>
    </div>
</form>
