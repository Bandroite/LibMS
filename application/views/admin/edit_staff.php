<div class="mb-4">
    <h2 class="mb-0">Edit borrower</h2>
    <div class="text-secondary">Edit borrower here by filling up the required fields</div>
</div>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Edit Borrower Form -->
<div class="card">
    <div class="card-header bg-white">
        <div class="i fas fa-user mr-1 text-primary"></div>
        <span>Borrower Details</span>
    </div>
    <div class="card-body">


    <form id="editStaffAsBorrowerForm">

        <!-- ID Number field -->
        <div class="form-group">
            <label for="staffIDNumber">Staff ID</label>
            <input 
                type        = "text" 
                class       = "form-control"
                id          = "staffIDNumber"
                name        = "staffIDNumber"
                placeholder = "Enter the ID Number here"
            >
        </div>

        <!-- Staff Name Fields -->
        <div class="form-row">
            
            <!-- First Name Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="staffFirstName">First Name</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "staffFirstName"
                        name        = "staffFirstName"
                        placeholder = "Enter first name here"
                    >
                </div>
            </div>

            <!-- Middle Name Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="staffMiddleName">Middle Name</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "staffMiddleName"
                        name        = "staffMiddleName"
                        placeholder = "Enter middle name here"
                    >
                </div>
            </div>

            <!-- Last Name Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "staffLastName"
                        name        = "staffLastName"
                        placeholder = "Enter last name here"
                    >
                </div>
            </div>
        </div>

        <!-- Gender, Contact Number and Email Field -->
        <div class="form-row">

            <!-- Gender Field -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="staffGender">Gender</label>
                    <select 
                        name="staffGender" 
                        id="staffGender" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select your gender here"
                    >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    </select>
                </div>
            </div>
                
            <!-- Contact Number field -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="staffContactNumber">Contact Number</label>
                    <input 
                        type="text" 
                        name="staffContactNumber" 
                        id="staffContactNumber" 
                        class="form-control" 
                        placeholder="Type your contact number here"
                    >
                </div>
            </div>
        </div>


        <!-- Active Field -->
        <div class="form-group">
            <label class="mb-0" for="active">User status</label>
            <div class="small text-secondary mb-2">This is an example of some helper text</div>
            <div class="form-control">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="activeStaff" name="staffStatus" class="custom-control-input" value="Active">
                    <label class="custom-control-label" for="activeStaff">Active</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="inactiveStaff" name="staffStatus" class="custom-control-input" value="Inactive">
                    <label class="custom-control-label" for="inactiveStaff">Not active</label>
                </div>
            </div>
        </div>

        <!-- User Actions -->
        <div class="form-group text-center">
            <button class="btn btn-muted" type="button" onclick="history.back()">
                <span>Cancel</span>
            </button>
            <button class="btn btn-blue" type="submit">
                <span>Save</span>
                <i class="fas fa-plus ml-1"></i>
            </button>
        </div>
    </form>
    </div>
</div>