/**
 * ===============================================================================
 * * ACCOUNT AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing authors
 * ===============================================================================
 */



$(() => {
    get_borrower_infoAJAX();
})

/**
 * ===============================================================================
 * GET BORROWER INFORMATION AJAX
 * ===============================================================================
 */


// Get Borrower Info AJAX
get_borrower_infoAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/info`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                
                const borrowerFullName = setFullName('F M L', {
                    firstName: data.firstName,
                    middleName: data.middleName,
                    lastName: data.lastName
                });

                $('#borrowerFirstName').html(data.firstName);

                // For Profile
                if(('borrowerProfile').length) {
                    const userType = data.userType;
                    
                    $('#borrowerFullNameForProfile').html(borrowerFullName);
                    $('#borrowerIDNumberForProfile').html(data.idNumber);
                    $('#borrowerTypeForProfile').html(userType);
                    $('#borrowerEmailForProfile').html(data.email);

                    var sexIcon;
                    if(data.gender === 'Male') {
                        $('#avatar').attr('src', `${ BASE_URL_WEB }public/images/app/avatar_male.png`);
                        sexIcon =`<i class="fas fa-mars text-blue mr-1"></i>`
                    } else if(data.gender === 'Female') {
                        $('#avatar').attr('src', `${ BASE_URL_WEB }public/images/app/avatar_female.png`);
                        sexIcon =`<i class="fas fa-venus text-danger mr-1"></i>`
                    } else {
                        $('#avatar').attr('src', `${ BASE_URL_WEB }public/images/app/avatar_genderless.png`);
                        sexIcon =`<i class="fas fa-genderless text-secondary mr-1"></i>`
                    }

                    if(userType === 'Student') {
                        $('#borrowerDetails').html(`
                            <tr>
                                <th>Full Name</th>
                                <td>${ borrowerFullName }</td>
                            </tr>
                            <tr>
                                <th>Student Number</th>
                                <td>${ data.idNumber }</td>
                            </tr>
                            <tr>
                                <th>Course, Year and Section</th>
                                <td>${ data.course }, ${ data.year } - ${ data.section }</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>
                                    ${ sexIcon }
                                    <span>${ data.gender }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <i class="fas fa-at text-secondary mr-1"></i>
                                    <span>${ data.email }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>
                                    <i class="fas fa-phone text-secondary mr-1"></i>
                                    <span>${ data.contactNumber }</span>
                                </td>
                            </tr>
                        `)
                    } else if(userType === 'Staff') {
                        $('#borrowerDetails').html(`
                            <tr>
                                <th>Full Name</th>
                                <td>${ borrowerFullName }</td>
                            </tr>
                            <tr>
                                <th>Staff Number</th>
                                <td>${ data.idNumber }</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td> 
                                    ${ sexIcon }
                                    <span>${ data.gender }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <i class="fas fa-at text-secondary mr-1"></i>
                                    <span>${ data.email }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>
                                    <i class="fas fa-phone text-secondary mr-1"></i>
                                    <span>${ data.contactNumber }</span>
                                </td>
                            </tr>
                        `);
                    }
                }
            }
            else{
                console.log('No result');
            }
        } 
    })
}

/**
 * ===============================================================================
 * CHANGE PASSWORD
 * ===============================================================================
 */

const changePasswordModal = $('#changePasswordModal');
const changePasswordForm = $('#changePasswordForm');

// Validate Change Password Form
changePasswordForm.validate(validateOptions({
    rules: {
        currentPassword: {
            required: true
        },
        newPassword: {
            required: true,
            minlength: 8,
        },
        retypePassword: {
            required: true,
            equalTo: '#newPassword'
        },
    },
    messages: {
        currentPassword: {
            required: 'Your current password is required'
        },
        newPassword: {
            required: 'Your new password is required',
            minlength: 'Your password should be 8 random characters as minimum',
        },
        retypePassword: {
            required: 'Please retype your new password for confirmation',
            equalTo: 'This doesn\'t match to your new password'
        },
    },
    submitHandler: () => change_passwordAJAX()
}));


// Change Password AJAX
change_passwordAJAX = () => {
    const rawData = new FormData(changePasswordForm[0]);

    data = {
        currentPassword: rawData.get('currentPassword'),
        newPassword: rawData.get('newPassword')
    }

    $.ajax({
        url: `${ BASE_URL_API }borrower/update-password`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: result => {
            const data = result.data;
            if(data.length) {

                // Hide change password modal
                changePasswordModal.modal('hide');

                // Show success alert
                showAlert('success', 'Success!', 'Your password has been updated');
            } else {
                $('#passwordAlertContainer').html(`
                    <div class="alert alert-danger alert-dismissible fade show mb-4" role="alert" id="passwordAlert">
                        <span class="font-weight-semibold">You current password is wrong</span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `);
                setTimeout(() => $('#passwordAlert').alert('close'), 5000);
            }
        }
    })
    .fail(() => console.error('There was a problem in updating password'))
}


// Reset Change Password form if its modal is hidden
changePasswordModal.on('hide.bs.modal', () => changePasswordForm.trigger('reset'))


// Edit Borrower Info
$('#editBorrowerInfo').on('click', () => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/info`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                const data = result.data;
                console.log(data);
                if(localStorage.getItem('userType') == 'Staff') {

                    // Get All Staff Data
                    $('#staffFirstName').val(data.firstName);
                    $('#staffMiddleName').val(data.middleName);
                    $('#staffLastName').val(data.lastName);
                    $('#staffNumber').val(data.idNumber);
                    $('#staffGender').selectpicker('val', data.gender);
                    $('#staffEmail').val(data.email);
                    $('#staffContactNumber').val(data.contactNumber);

                    // Show Edit Staff Info Modal
                    $('#editStaffInfoModal').modal('show');
                } else if(localStorage.getItem('userType') == 'Student') {

                    // Get All Student Data
                    $('#studentFirstName').val(data.firstName);
                    $('#studentMiddleName').val(data.middleName);
                    $('#studentLastName').val(data.lastName);
                    $('#studentNumber').val(data.idNumber);
                    $('#studentCourse').val(data.course);
                    $('#studentYear').val(data.year);
                    $('#studentSection').val(data.section);
                    $('#studentGender').selectpicker('val', data.gender);
                    $('#studentEmail').val(data.email);
                    $('#studentContactNumber').val(data.contactNumber);

                    // Show Edit Student Modal
                    $('#editStudentInfoModal').modal('show');
                }
            }
        }
    })
    .fail('There was an error in getting borrower information')
});

// Validate Edit Staff Form
$('#editStaffInfoForm').validate(validateOptions({
    rules: {
        staffFirstName: {
            required: true
        },
        staffLastName: {
            required: true
        },
        staffNumber: {
            required: true
        },
        staffGender: {
            required: true
        },
        staffEmail: {
            required: true
        },
        staffContactNumber: {
            required: true
        },
    },
    messages: {
        staffFirstName: {
            required: 'Your first name is required'
        },
        staffLastName: {
            required: 'Your last name is required'
        },
        staffNumber: {
            required: 'Your staff number is required'
        },
        staffGender: {
            required: 'Please select your gender'
        },
        staffEmail: {
            required: 'Your email is required'
        },
        staffContactNumber: {
            required: 'Your contact number is required'
        },
    },
    submitHandler: () => update_staff_infoAJAX()
}));


update_staff_infoAJAX = () => {
    const rawData = new FormData($('#editStaffInfoForm')[0]);
    
    data = {
        firstName:      rawData.get('staffFirstName'),
        middleName:      rawData.get('staffMiddleName'),
        lastName:       rawData.get('staffLastName'),
        idNumber:       rawData.get('staffNumber'),
        gender:         rawData.get('staffGender'),
        email:          rawData.get('staffEmail'),
        contactNumber:  rawData.get('staffContactNumber'),
    }

    $.ajax({
        url: `${ BASE_URL_API }borrower/info`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: result => {
            if(result) {
                $('#editStaffInfoModal').modal('hide');
                showAlert('success', 'Success!', 'Your information has been updated');
                get_borrower_infoAJAX()
            }
        }
    })
    .fail(() => console.error('There was an error in updating user information'));
}

$('#editStudentInfoForm').validate(validateOptions({
    rules: {
        studentFirstName: {
            required: true
        },
        studentLastName: {
            required: true
        },
        studentNumber: {
            required: true
        },
        studentCourse: {
            required: true
        },
        studentYear: {
            required: true
        },
        studentSection: {
            required: true
        },
        studentGender: {
            required: true
        },
        studentEmail: {
            required: true
        },
        studentContactNumber: {
            required: true
        },
    },
    messages: {
        studentFirstName: {
            required: 'Your first name is required'
        },
        studentLastName: {
            required: 'Your last name is required'
        },
        studentNumber: {
            required: 'Your staff number is required'
        },
        studentCourse: {
            required: 'Your course is required'
        },
        studentYear: {
            required: 'Your year is required'
        },
        studentSection: {
            required: 'Your section is required'
        },
        studentGender: {
            required: 'Please select your gender'
        },
        studentEmail: {
            required: 'Your email is required'
        },
        studentContactNumber: {
            required: 'Your contact number is required'
        },
    },
    submitHandler: () => update_student_infoAJAX()
}));

update_student_infoAJAX = () => {
    const rawData = new FormData($('#editStudentInfoForm')[0]);
    
    data = {
        firstName:      rawData.get('studentFirstName'),
        middleName:     rawData.get('studentMiddleName'),
        lastName:       rawData.get('studentLastName'),
        idNumber:       rawData.get('studentNumber'),
        course:         rawData.get('studentCourse'),
        year:           rawData.get('studentYear'),
        section:        rawData.get('studentSection'),
        gender:         rawData.get('studentGender'),
        email:          rawData.get('studentEmail'),
        contactNumber:  rawData.get('studentContactNumber'),
    }

    $.ajax({
        url: `${ BASE_URL_API }borrower/info`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: result => {
            if(result) {
                $('#editStudentInfoModal').modal('hide');
                showAlert('success', 'Success!', 'Your information has been updated');
                get_borrower_infoAJAX()
            }
        }
    })
    .fail(() => console.error('There was an error in updating user information'));
}

// Reset Edit Staff Info when its modal has been hidden
$('#editStaffInfoModal').on('hide.bs.modal', () => $('#editStaffInfoForm').trigger('reset'))


// Reset Edit Staff Info when its modal has been hidden
$('#editStudentInfoModal').on('hide.bs.modal', () => $('#editStudentInfoForm').trigger('reset'))