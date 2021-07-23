<div class="mb-4">
    <h2 class="mb-0">Add borrower</h2>
    <div class="text-secondary">Add borrower here by filling up the required fields</div>
</div>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Add Borrower Form -->
<div class="card">
    <div class="card-header bg-white">
        <div class="i fas fa-user mr-1 text-primary"></div>
        <span>Borrower Details</span>
    </div>
    <div class="card-body">

    <label class="mb-3">Please select the type of user you want to register</label>

    <!-- Student or Staff Tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a 
                class         = "nav-link active" 
                id            = "student-form-tab" 
                data-toggle   = "tab" 
                href          = "#studentForm" 
                role          = "tab" 
            >
                <i class="fas fa-book-reader mr-1"></i>
                <span>Student</span>
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a 
                class         = "nav-link" 
                id            = "staff-form-tab" 
                data-toggle   = "tab" 
                href          = "#staffForm" 
                role          = "tab" 
            >
                <i class="fas fa-book-reader mr-1"></i>
                <span>Staff</span>
            </a>
        </li>
    </ul>

    <!-- Forms -->
    <div class="tab-content" id="myTabContent">
        
        <!-- Add Student as Borrower Form -->
        <div 
            class           = "tab-pane fade show active py-3" 
            id              = "studentForm" 
            role            = "tabpanel" 
            aria-labelledby = "student-form-tab"
        >
            <form id="addStudentAsBorrowerForm"> 

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

                <!-- Gender, Contact Number and Email Field -->
                <div class="form-row">

                    <!-- Gender Field -->
                    <div class="col-md-4">
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
                    <div class="col-md-4">
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

                    <!-- Email Field -->
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="studentEmail">Email</label>
                            <input 
                                type="email" 
                                name="studentEmail" 
                                id="studentEmail" 
                                class="form-control" 
                                placeholder="Type your email here"
                            >
                        </div>
                    </div>
                </div>
                
                <!-- Password and Confirm Password -->
                <div class="form-row">

                    <!-- Password Field -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="studentPassword">Password</label>
                            <input 
                                type="password" 
                                name="studentPassword" 
                                id="studentPassword" 
                                class="form-control" 
                                placeholder="Type your password here"
                            >
                        </div>
                    </div>

                    <!-- Re-type Password Field -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="studentRetypePassword">Confirm Password</label>
                            <input 
                                type="password" 
                                name="studentRetypePassword" 
                                id="studentRetypePassword" 
                                class="form-control" 
                                placeholder="Re-type your password here"
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
                    <button class="btn btn-muted" type="button" onclick="history.back()">
                        <span>Cancel</span>
                    </button>
                    <button class="btn btn-blue" type="submit">
                        <span>Add</span>
                        <i class="fas fa-plus ml-1"></i>
                    </button>
                </div>
            </form>
        </div>
        
        <!-- Add Staff as Borrower Form -->
        <div 
            class           = "tab-pane fade py-3" 
            id              = "staffForm" 
            role            = "tabpanel" 
            aria-labelledby = "profile-form-tab"
        >
            <form id="addStaffAsBorrowerForm">

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
                    <div class="col-md-4">
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
                    <div class="col-md-4">
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

                    <!-- Email Field -->
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="staffEmail">Email</label>
                            <input 
                                type="email" 
                                name="staffEmail" 
                                id="staffEmail" 
                                class="form-control" 
                                placeholder="Type your email here"
                            >
                        </div>
                    </div>
                </div>
                
                <!-- Password and Confirm Password -->
                <div class="form-row">

                    <!-- Password Field -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="staffPassword">Password</label>
                            <input 
                                type="password" 
                                name="staffPassword" 
                                id="staffPassword" 
                                class="form-control" 
                                placeholder="Type your password here"
                            >
                        </div>
                    </div>

                    <!-- Re-type Password Field -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="staffRetypePassword">Confirm Password</label>
                            <input 
                                type="password" 
                                name="staffRetypePassword" 
                                id="staffRetypePassword" 
                                class="form-control" 
                                placeholder="Re-type your password here"
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
                            <input type="radio" id="activeStaff" name="staffStatus" class="custom-control-input">
                            <label class="custom-control-label" for="activeStaff" value="Active">Active</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="inactiveStaff" name="staffStatus" class="custom-control-input">
                            <label class="custom-control-label" for="inactiveStaff" value="Inactive">Not active</label>
                        </div>
                    </div>
                </div>

                <!-- User Actions -->
                <div class="form-group text-center">
                    <button class="btn btn-muted" type="button" onclick="history.back()">
                        <span>Cancel</span>
                    </button>
                    <button class="btn btn-blue" type="submit">
                        <span>Add</span>
                        <i class="fas fa-plus ml-1"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>

        
        
        
        
    </div>
</div>