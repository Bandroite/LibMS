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


    <!-- Student Forms -->
    <form id="editStudentAsBorrowerForm"> 

        <!-- ID Number field -->
        <div class="form-group">
            <label for="studentIDNumber">Student Number</label>
            <input 
                type        = "text" 
                class       = "form-control"
                id          = "studentIDNumber"
                name        = "studentIDNumber"
                placeholder = "Enter the ID Number here"
            >
        </div>
        
        <!-- Student Name Fields -->
        <div class="form-row">
            
            <!-- First Name Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="studentFirstName">First Name</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "studentFirstName"
                        name        = "studentFirstName"
                        placeholder = "Enter first name here"
                    >
                </div>
            </div>

            <!-- Middle Name Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="studentMiddleName">Middle Name</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "studentMiddleName"
                        name        = "studentMiddleName"
                        placeholder = "Enter middle name here"
                    >
                </div>
            </div>

            <!-- Last Name Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="studentLastName">Last Name</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "studentLastName"
                        name        = "studentLastName"
                        placeholder = "Enter last name here"
                    >
                </div>
            </div>
        </div>

        <!-- Course, Year and Section -->
        <div class="form-row">

            <!-- Course Field -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="course">Course</label>
                    <input 
                        type="text" 
                        name="course" 
                        id="course" 
                        class="form-control" 
                        placeholder="Type course here"
                    >
                </div>
            </div>

            <!-- Year Field -->
            <div class="col-md-4">
                <div class="form-group">
                        <label for="year">Year</label>
                        <input 
                            type="text" 
                            name="year" 
                            id="year" 
                            class="form-control" 
                            placeholder="Type year here"
                        >
                </div>
            </div>

            <!-- Section Field -->
            <div class="col-md-4">
                <div class="form-group">
                        <label for="section">Section</label>
                        <input 
                            type="text" 
                            name="section" 
                            id="section" 
                            class="form-control" 
                            placeholder="Type your section here"
                        >
                </div>
            </div>

        </div>

        <!-- Gender & Contact Number Field -->
        <div class="form-row">

            <!-- Gender Field -->
            <div class="col-md-6">
                <div class="form-group">
                    <label for="studentGender">Gender</label>
                    <select 
                        name="studentGender" 
                        id="studentGender" 
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
                    <label for="studentContactNumber">Contact Number</label>
                    <input 
                        type="text" 
                        name="studentContactNumber" 
                        id="studentContactNumber" 
                        class="form-control" 
                        placeholder="Type your contact number here"
                    >
                </div>
            </div>

        </div>
        

        <!-- Active Field -->
        <div class="form-group">
            <label class="mb-0" for="active">User status</label>
            <div class="form-control">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="activeStudent" name="studentStatus" class="custom-control-input">
                    <label class="custom-control-label" for="activeStudent" value="Active">Active</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="inactiveStudent" name="studentStatus" class="custom-control-input">
                    <label class="custom-control-label" for="inactiveStudent" value="Inactive">Not active</label>
                </div>
            </div>
        </div>

        <!-- User Actions -->
        <div class="form-group text-center">
            <button type="button" class="btn btn-muted" onclick="history.back()">Cancel</button>
            <button type="submit" class="btn btn-blue">
                <i class="fas fa-check mr-1"></i>
                <span>Save</span>
            </button>
        </div>
    </form>
    
</div>