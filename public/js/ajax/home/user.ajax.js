/**
 * ===============================================================================
 * * USER AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for user registration
 * ===============================================================================
 */

/**
 * ===============================================================================
 * REGISTER ACCOUNT FOR STUDENT
 * ===============================================================================
 */

// Add Student Account From Validation
$('#registerStudentForm').validate(validateOptions({
    rules: {
        idNumber: {
            required: true
        },
        firstName: {
            required: true
        },
        lastName: {
            required: true
        },
        contactNumber:{
            required: true
        },
        gender:{
            required: true
        },
        course:{
            required: true
        },
        year:{
            required: true
        },
        section:{
            required: true
        },
        email:{
            required: true
        },
        password:{
            required: true
        },
        retypePassword:{
            required: true,
            equalTo: '#password'
        }
    },
    messages: {
        idNumber: {
            required: 'Student Number is required'
        },
        firstName: {
            required: 'First Name is required'
        },
        lastName: {
            required: 'Last Name is required'
        },
        contactNumber:{
            required: 'Contact Number is required'
        },
        gender:{
            required: 'Gender is required'
        },
        course:{
            required: 'Course is required'
        },
        year:{
            required: 'Year is required'
        },
        section:{
            required: 'Section is required'
        },
        email:{
            required: 'Email is required'
        },
        password:{
            required: 'Password is required'
        },
        retypePassword:{
            required: 'Re-type Password is required',
            equalTo: 'This doesn\'t match to your input password'
        }
    },
    submitHandler: () => add_studentAJAX()
}))

// Add Student Account AJAX
add_studentAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#registerStudentForm')[0]);

    // Get data from rawData
    data = {
        idNumber:       rawData.get('idNumber'),
        firstName:      rawData.get('firstName'),
        lastName:       rawData.get('lastName'),
        contactNumber:  rawData.get('contactNumber'),
        gender:         rawData.get('gender'),
        course:         rawData.get('course'),
        year:           rawData.get('year'),
        section:        rawData.get('section'),
        email:          rawData.get('email'),
        password:       rawData.get('password'),
        status:         'Active',
        userType:       'Student'
    }

    // Add Student via AJAX
    $.ajax({
        url: `${ BASE_URL_API }home/users`,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                $('#registerSuccessModal').modal('show');
            } else {
                console.log('No result');
            }
        },
        error: err => {
            const responseJSON = err.responseJSON;
            showAlert('danger', 'Oops!', responseJSON.message)
        }
    })    
}


/**
 * ===============================================================================
 * REGISTER ACCOUNT FOR STAFF
 * ===============================================================================
 */

// Add Staff Account From Validation
$('#registerStaffForm').validate(validateOptions({
    rules: {
        idNumber: {
            required: true
        },
        firstName: {
            required: true
        },
        lastName: {
            required: true
        },
        contactNumber:{
            required: true
        },
        gender:{
            required: true
        },
        email:{
            required: true
        },
        password:{
            required: true
        },
        retypePassword:{
            required: true,
            equalTo: '#password'
        }
    },
    messages: {
        idNumber: {
            required: 'Student Number is required'
        },
        firstName: {
            required: 'First Name is required'
        },
        lastName: {
            required: 'Last Name is required'
        },
        contactNumber:{
            required: 'Contact Number is required'
        },
        gender:{
            required: 'Gender is required'
        },
        email:{
            required: 'Email is required'
        },
        password:{
            required: 'Password is required'
        },
        retypePassword:{
            required: 'Re-type Password is required',
            equalTo: 'This doesn\'t match to your input password'
        }
    },
    submitHandler: () => add_staffAJAX()
}))

// Add Staff Account AJAX
add_staffAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#registerStaffForm')[0]);

    // Get data from rawData
    data = {
        idNumber:       rawData.get('idNumber'),
        firstName:      rawData.get('firstName'),
        lastName:       rawData.get('lastName'),
        contactNumber:  rawData.get('contactNumber'),
        gender:         rawData.get('gender'),
        email:          rawData.get('email'),
        password:       rawData.get('password'),
        status:         'Active',
        userType:       'Staff'
    }

    // Add Staff via AJAX
    $.ajax({
        url: `${ BASE_URL_API }home/users`,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {$(
                '#registerSuccessModal').modal('show');
            } else {
                console.log('No result');
            }
        },
        error: err => {
            const responseJSON = err.responseJSON;
            showAlert('danger', 'Oops!', responseJSON.message)
        }
    })    
}
