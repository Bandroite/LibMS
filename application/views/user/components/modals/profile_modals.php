<!-- Change Password Modal -->
<div class="modal" id="changePasswordModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form id="changePasswordForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-user-lock mr-1 text-primary"></i>
                    <span>Change Password</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Password Alert Container -->
                <div id="passwordAlertContainer"></div>
                
                <!-- Current Password -->
                <div class="form-group">
                    <label for="currentPassword">Current Password</label>
                    <input 
                        type="password"
                        class="form-control"
                        name="currentPassword"
                        id="currentPassword"
                        placeholder="Type your current password here"
                    >
                </div>

                <!-- New Password -->
                <div class="form-group">
                    <label for="currentPassword">New Password</label>
                    <input 
                        type="password"
                        class="form-control"
                        name="newPassword"
                        id="newPassword"
                        placeholder="Type your new password here"
                    >
                </div>

                <!-- Retype new Password -->
                <div class="form-group">
                    <label for="currentPassword">Retype new password to confirm</label>
                    <input 
                        type="password"
                        class="form-control"
                        name="retypePassword"
                        id="retypePassword"
                        placeholder="Retype your new password here for confirmation"
                    >
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-blue">
                    <i class="fas fa-check mr-1"></i>
                    <span>Save</span>
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Edit Staff Info Modal -->
<div class="modal" id="editStaffInfoModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form id="editStaffInfoForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-primary"></i>
                    <span>Edit your information</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- First Name -->
                <div class="form-group">
                    <label for="staffFirstName">First Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="staffFirstName"
                        id="staffFirstName"
                        placeholder="Enter your first name here"
                    >
                </div>

                <!-- Middle Name -->
                <div class="form-group">
                    <label for="staffMiddleName">Middle Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="staffMiddleName"
                        id="staffMiddleName"
                        placeholder="Enter your middle name here"
                    >
                </div>

                <!-- Last Name -->
                <div class="form-group">
                    <label for="staffLastName">Last Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="staffLastName"
                        id="staffLastName"
                        placeholder="Enter your last name here"
                    >
                </div>

                <!-- Staff Number -->
                <div class="form-group">
                    <label for="staffNumber">Staff Number</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="staffNumber"
                        id="staffNumber"
                        placeholder="Enter your staff number here"
                    >
                </div>

                <!-- Gender -->
                <div class="form-group">
                    <label for="staffGender">Gender</label>
                    <select 
                        name="staffGender" 
                        id="staffGender" 
                        class="selectpicker form-control"
                        data-style="form-control border"
                        title="Please select a gender"
                    >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="staffEmail">Email</label>
                    <input 
                        type="email"
                        class="form-control"
                        name="staffEmail"
                        id="staffEmail"
                        placeholder="Enter your email here"
                    >
                </div>

                <!-- Contact Number -->
                <div class="form-group">
                    <label for="staffContactNumber">Contact Number</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="staffContactNumber"
                        id="staffContactNumber"
                        placeholder="Enter your email here"
                    >
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-blue">
                    <i class="fas fa-check mr-1"></i>
                    <span>Save</span>
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Edit Student Info Modal -->
<div class="modal" id="editStudentInfoModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form id="editStudentInfoForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-primary"></i>
                    <span>Edit your information</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- First Name -->
                <div class="form-group">
                    <label for="studentFirstName">First Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentFirstName"
                        id="studentFirstName"
                        placeholder="Enter your first name here"
                    >
                </div>

                <!-- Middle Name -->
                <div class="form-group">
                    <label for="studentMiddleName">Middle Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentMiddleName"
                        id="studentMiddleName"
                        placeholder="Enter your middle name here"
                    >
                </div>

                <!-- Last Name -->
                <div class="form-group">
                    <label for="studentLastName">Last Name</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentLastName"
                        id="studentLastName"
                        placeholder="Enter your last name here"
                    >
                </div>

                <!-- Student Number -->
                <div class="form-group">
                    <label for="studentNumber">Student Number</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentNumber"
                        id="studentNumber"
                        placeholder="Enter your student number here"
                    >
                </div>

                <!-- Course -->
                <div class="form-group">
                    <label for="studentCourse">Course</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentCourse"
                        id="studentCourse"
                        placeholder="Enter your course here"
                    >
                </div>

                <!-- Year -->
                <div class="form-group">
                    <label for="studentYear">Year</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentYear"
                        id="studentYear"
                        placeholder="Enter your year here"
                    >
                </div>

                <!-- Section -->
                <div class="form-group">
                    <label for="studentSection">Section</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentSection"
                        id="studentSection"
                        placeholder="Enter your section here"
                    >
                </div>

                <!-- Gender -->
                <div class="form-group">
                    <label for="studentGender">Gender</label>
                    <select 
                        name="studentGender" 
                        id="studentGender" 
                        class="selectpicker form-control"
                        data-style="form-control border"
                        title="Please select a gender"
                    >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="studentEmail">Email</label>
                    <input 
                        type="email"
                        class="form-control"
                        name="studentEmail"
                        id="studentEmail"
                        placeholder="Enter your email here"
                    >
                </div>

                <!-- Contact Number -->
                <div class="form-group">
                    <label for="studentContactNumber">Contact Number</label>
                    <input 
                        type="text"
                        class="form-control"
                        name="studentContactNumber"
                        id="studentContactNumber"
                        placeholder="Enter your email here"
                    >
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-blue">
                    <i class="fas fa-check mr-1"></i>
                    <span>Save</span>
                </button>
            </div>
        </form>
    </div>
</div>
