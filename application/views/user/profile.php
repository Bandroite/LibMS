<div class="d-flex p-5">
    <div class="container m-2 w-50">
        <div class="shadow d-flex flex-column p-3">
            <img class="content-image" src="public/images/app/avatar.png" width="350">
            <div class="container flex-column flex-center p-3">
                <h5>John Doe</h5>
                <h7 class="font-weight-light">Student</h7>
                <h7 class="font-weight-light">2017-00179-CM-0</h7>
                <h7 class="font-weight-light">john@gmail.com</h7>
            </div>
        </div>
    </div>
    <div class="container m-2 shadow p-5">
    <div class="form-group">
                    <label for="studentIDNumber">Student Number</label>
                    <input 
                        type        = "text" 
                        class       = "form-control"
                        id          = "studentIDNumber"
                        name        = "studentIDNumber"
                        value       = "2018-00179-CM-0"
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
                                value       = "John"
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
                                value       = ""
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
                                value       = "Doe"
                            >
                        </div>
                    </div>
                </div>

                <!-- Course and Section -->
                <div class="form-row">

                    <!-- Course Field -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="course">Course</label>
                            <input 
                                type        = "text" 
                                class       = "form-control"
                                id          = "course"
                                name        = "course"
                                value       = "Bachelor of Science in Information Technology"
                            >
                        </div>
                    </div>

                    <!-- Section Field -->
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="section">Section</label>
                            <input 
                                type        = "text" 
                                class       = "form-control"
                                id          = "section"
                                name        = "section"
                                value       = "1"
                            >
                        </div>
                    </div>

                    <!-- Gender Field -->
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="gender">Gender</label>
                            <input 
                                type        = "text" 
                                class       = "form-control"
                                id          = "gender"
                                name        = "gender"
                                value       = "Male"
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
                            <input type="radio" id="activeStudent" name="studentStatus" class="custom-control-input" checked>
                            <label class="custom-control-label" for="activeStudent">Active</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="inactiveStudent" name="studentStatus" class="custom-control-input" disabled>
                            <label class="custom-control-label" for="inactiveStudent">Not active</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>