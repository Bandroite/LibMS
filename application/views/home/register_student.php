<div class="container py-5">
    <div class="min-vh-100 flex-center m-0">
    
        <!-- Register Section -->
        <div class="col-lg-8 min-h-100 d-flex justify-content-between align-items-center">
            <div class="container-fluid py-5">
    
                <!-- Registration Form -->
                <form id="registerStudentForm">
                    <div class="mb-5">
                        <h1 class="text-center display-4 m0-5">Register as Student</h1>
                        <div class="text-secondary text-center">Create your account by filling up the field below</div>
                    </div>
                    
                    <!-- Show Alert -->
                    <div id="alertContainer"></div>
                    
                    <!-- Student Number field -->
                    <div class="form-group">
                        <label for="idNumber">Student Number</label>
                        <input 
                            type="text" 
                            name="idNumber" 
                            id="idNumber" 
                            class="form-control" 
                            placeholder="Type your student number here"
                        >
                    </div>
                    
                    <!-- Student Name Field -->
                    <div class="form-row">

                        <!-- First Name Field -->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    class="form-control" 
                                    placeholder="Type your first name here"
                                >
                            </div>
                        </div>

                        <!-- Middle Name Field -->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="middleName">Middle Name</label>
                                <input 
                                    type="text" 
                                    name="middleName" 
                                    id="middleName" 
                                    class="form-control" 
                                    placeholder="Type your middle name here"
                                >
                            </div>
                        </div>

                        <!-- Last Name Field -->
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="firstName">Last Name</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    class="form-control" 
                                    placeholder="Type your last name here"
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Course, year, and section field -->
                    <div class="form-row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="course">Course</label>
                                <input 
                                    type="text" 
                                    name="course" 
                                    id="course" 
                                    class="form-control" 
                                    placeholder="Type your last name here"
                                >
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="year">Year</label>
                                <input 
                                    type="text" 
                                    name="year" 
                                    id="year" 
                                    class="form-control" 
                                    placeholder="Type your last name here"
                                >
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="section">Section</label>
                                <input 
                                    type="text" 
                                    name="section" 
                                    id="section" 
                                    class="form-control" 
                                    placeholder="Type your last name here"
                                >
                            </div>
                        </div>
                    </div>
                    
                    <!-- Gender & Contact Number Field -->
                    <div class="form-row">

                        <!-- Gender Field -->
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="gender">Gender</label>
                                <select 
                                    name="gender" 
                                    id="gender" 
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
                                <label for="contactNumber">Contact Number</label>
                                <input 
                                    type="text" 
                                    name="contactNumber" 
                                    id="contactNumber" 
                                    class="form-control" 
                                    placeholder="Type your contact number here"
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Email field -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            class="form-control" 
                            placeholder="Type your email here"
                        >
                    </div>

                    <!-- Password Field -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            class="form-control" 
                            placeholder="Type your password here"
                        >
                    </div>

                    <!-- Re-type Password Field -->
                    <div class="form-group">
                        <label for="retypePassword">Confirm Password</label>
                        <input 
                            type="password" 
                            name="retypePassword" 
                            id="retypePassword" 
                            class="form-control" 
                            placeholder="Re-type your password here"
                        >
                    </div>
    
                    <!-- User Actions -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                            <span>Register</span>
                            <i class="fas fa-sign-in-alt ml-1"></i>
                        </button>
                        <a href="<?= base_url() ?>login" class="btn btn-light btn-block">I already have an account</a>
                    </div>
                </form>
    
                <div class="dropdown-divider"></div>
    
                <div class="form-group small d-flex justify-content-between align-items-center">
                    <div>
                        <a href="<?= base_url() ?>home">Home</a>
                        <span>|</span>
                        <a href="<?= base_url() ?>about-us">About Us</a>
                    </div>
                    <div>
                        <a href="<?= base_url() ?>terms-and-conditions">Terms and Condition</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>