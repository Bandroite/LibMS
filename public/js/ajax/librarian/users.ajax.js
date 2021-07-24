/**
 * ===============================================================================
 * * USER AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for user information
 * ===============================================================================
 */

$(() => {
    loadStudentBorrowersDT();
    loadStaffBorrowersDT();
});

/**
 * ===============================================================================
 * GET BORROWERS
 * ===============================================================================
 */

// Load student borrowers DataTable
loadStudentBorrowersDT = () => {
    const dt = $('#studentBorrowersDT');
    if(dt.length) {
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/students`,
                headers: AJAX_HEADERS,
            },
            columns: [

                // Added At (hidden for default sorting)
                { data: 'addedAt', visible: false },

                // Student Number
                { data: 'idNumber' },

                // Student Name
                { 
                    data: null,
                    render: data => {
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-user text-primary"></i>
                                </div>
                                <div>${ data.firstName + ' ' + data.lastName }</div>
                            </div>
                        `;
                    }
                },

                // Program, Year & Section
                {
                    data: null,
                    render: data => {
                        return `
                            <div>${ data.course }</div>
                            <div>${ data.year }-${ data.section }</div>
                        `;
                    }
                },
                
                // Status
                {
                    data: null,
                    render: data => {
                        const status = data.status;

                        if(status === 'Active') {
                            return `
                                <div class="badge alert-success text-success p-2 w-100">Active</div>
                            `
                        } else if(status === 'Inactive') {
                            return `
                                <div class="badge alert-danger text-danger p-2 w-100">Inactive</div>
                            `
                        } else {
                            return `
                                <div class="badge alert-dark text-dark p-2 w-100">No data</div>
                            `
                        }
                    }
                },

                // Actions
                {
                    data: null,
                    class: 'text-center',
                    render: data => {
                        return `
                            <div class="dropdown d-inline-block">
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <div class="dropdown-menu dropdown-menu-right">
                                    <div  
                                        class       = "dropdown-item"
                                        onclick     = "viewStudent('${data.userID}')"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
                                    <a 
                                        class="dropdown-item"
                                        href="${ BASE_URL_WEB }admin/edit-student/${ data.userID }"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </a>
                                </div>
                            </div>
                        `
                    }
                }
            ],
            columnDefs: [{
                targets: [5],
                orderable: false
            }],
            order: [[0, 'desc']]
        });
    }
}

// Load staff borrowers DataTable
loadStaffBorrowersDT = () => {
    const dt = $('#staffBorrowersDT');
    if(dt.length) {
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/staffs`,
                headers: AJAX_HEADERS
            },
            columns: [

                // Added At (hidden for default sorting)
                { data: 'addedAt', visible: false },

                // ID number
                { data: 'idNumber' },

                // Staff Name
                { 
                    data: null,
                    render: data => {
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-user text-primary"></i>
                                </div>
                                <div>${ data.firstName + ' ' + data.lastName }</div>
                            </div>
                        `;
                    }
                },

                // Status
                {
                    data: null,
                    render: data => {
                        const status = data.status;

                        if(status === 'Active') {
                            return `
                                <div class="badge alert-success text-success p-2 w-100">Active</div>
                            `
                        } else if(status === 'Inactive') {
                            return `
                                <div class="badge alert-danger text-danger p-2 w-100">Inactive</div>
                            `
                        } else {
                            return `
                                <div class="badge alert-dark text-dark p-2 w-100">No data</div>
                            `
                        }
                    }
                },
                
                // Actions
                {
                    data: null,
                    class: 'text-center',
                    render: data => {
                        return `
                            <div class="dropdown d-inline-block">
                            <div data-toggle="dropdown">
                                <div 
                                    class       = "btn btn-sm btn-muted"
                                    data-toggle = "tooltip"
                                    title       = "More"
                                >
                                    <i class="fas fa-ellipsis-v"></i>
                                </div>
                            </div>

                            <div class="dropdown-menu dropdown-menu-right">
                                <div  
                                    class       = "dropdown-item"
                                    onclick     = "viewStaff('${data.userID}')"
                                >
                                    <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                    <span>View details</span>
                                </div>
                                <a 
                                class="dropdown-item"
                                href="${ BASE_URL_WEB }admin/edit-staff/${ data.userID }"
                                >
                                    <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                    <span>Edit</span>
                                </a>
                            </div>
                        </div>
                        `
                    }
                }
            ],
            columnDefs: [{
                targets: [4],
                orderable: false
            }],
            order: [[0, 'desc']]
        });
    }
}

/**
 * ===============================================================================
 * ADD STUDENT AJAX
 * ===============================================================================
 */

const addStudentForm = $('#addStudentAsBorrowerForm');

// Add Student From Validation
addStudentForm.validate(validateOptions({
    rules: {
        studentIDNumber: {
            required: true
        },
        studentFirstName: {
            required: true
        },
        studentLastName: {
            required: true
        },
        studentContactNumber:{
            required: true
        },
        studentGender:{
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
        studentEmail:{
            required: true
        },
        studentPassword:{
            required: true
        },
        studentRetypePassword:{
            required: true,
            equalTo: '#studentPassword'
        },
        studentStatus:{
            required: true
        }
    },
    messages: {
        studentIDNumber: {
            required: 'Student Number is required'
        },
        studentFirstName: {
            required: 'First Name is required'
        },
        studentLastName: {
            required: 'Last Name is required'
        },
        studentContactNumber:{
            required: 'Contact Number is required'
        },
        studentGender:{
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
        studentEmail:{
            required: 'Email is required'
        },
        studentPassword:{
            required: 'Password is required'
        },
        studentRetypePassword:{
            required: 'Re-type Password is required',
            equalTo: 'This doesn\'t match to your input password'
        },
        studentStatus:{
            required: 'Status is required'
        }
    },
    submitHandler: () => add_studentAJAX()
}))

// Add Student AJAX
add_studentAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData(addStudentForm[0]);


    // Get data from rawData
    data = {
        idNumber:       rawData.get('studentIDNumber'),
        firstName:      rawData.get('studentFirstName'),
        middleName:     rawData.get('studentMiddleName'),
        lastName:       rawData.get('studentLastName'),
        contactNumber:  rawData.get('studentContactNumber'),
        gender:         rawData.get('studentGender'),
        course:         rawData.get('course'),
        year:           rawData.get('year'),
        section:        rawData.get('section'),
        email:          rawData.get('studentEmail'),
        password:       rawData.get('studentPassword'),
        status:         rawData.get('studentStatus'),
        userType:       'Student'
    }

   // Add Student via AJAX
    $.ajax({
    url: `${ BASE_URL_API }librarian/users`,
    type: 'POST',
    headers: AJAX_HEADERS,
    data: data,
    dataType: 'json',
    success: (result) => {
        if(result) {
                // Request a temporary sessioned alert
                // (for next page alerts)
                $.ajax({
                    url: `${ BASE_URL_WEB }alert`,
                    type: 'POST',
                    data: {
                        theme: 'success',
                        title: 'Success!',
                        message: 'A new student account is added'
                    },
                    success: () => location.replace(`${ BASE_URL_WEB }admin/borrowers`)
                });

            // Refresh data table after add
            const dt = $('#studentBorrowersDT').DataTable();
            dt.ajax.reload();
        } else {
            showAlert('danger','Failed!',result.message);
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
 * ADD STAFF AJAX
 * ===============================================================================
 */

const addStaffForm = $('#addStaffAsBorrowerForm');

// Add Student From Validation
addStaffForm.validate(validateOptions({
    rules: {
        staffIDNumber: {
            required: true
        },
        staffFirstName: {
            required: true
        },
        staffLastName: {
            required: true
        },
        staffContactNumber:{
            required: true
        },
        staffGender:{
            required: true
        },
        staffEmail:{
            required: true
        },
        staffPassword:{
            required: true
        },
        staffRetypePassword:{
            required: true,
            equalTo: '#staffPassword'
        },
        staffStatus:{
            required: true
        }
    },
    messages: {
        staffIDNumber: {
            required: 'Student Number is required'
        },
        staffFirstName: {
            required: 'First Name is required'
        },
        staffLastName: {
            required: 'Last Name is required'
        },
        staffContactNumber:{
            required: 'Contact Number is required'
        },
        staffGender:{
            required: 'Gender is required'
        },
        course:{
            required: 'Course is required'
        },
        staffEmail:{
            required: 'Email is required'
        },
        staffPassword:{
            required: 'Password is required'
        },
        staffRetypePassword:{
            required: 'Re-type Password is required',
            equalTo: 'This doesn\'t match to your input password'
        },
        staffStatus:{
            required: 'Status is required'
        }
    },
    submitHandler: () => add_staffAJAX()
}))

// Add Staff AJAX
add_staffAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData(addStaffForm[0]);


    // Get data from rawData
    data = {
        idNumber:       rawData.get('staffIDNumber'),
        firstName:      rawData.get('staffFirstName'),
        middleName:     rawData.get('staffMiddleName'),
        lastName:       rawData.get('staffLastName'),
        contactNumber:  rawData.get('staffContactNumber'),
        gender:         rawData.get('staffGender'),
        email:          rawData.get('staffEmail'),
        password:       rawData.get('staffPassword'),
        status:         rawData.get('staffStatus'),
        userType:       'Staff'
    }

// Add Staff via AJAX
    $.ajax({
    url: `${ BASE_URL_API }librarian/users`,
    type: 'POST',
    headers: AJAX_HEADERS,
    data: data,
    dataType: 'json',
    success: (result) => {
        if(result) {
                // Request a temporary sessioned alert
                // (for next page alerts)
                $.ajax({
                    url: `${ BASE_URL_WEB }alert`,
                    type: 'POST',
                    data: {
                        theme: 'success',
                        title: 'Success!',
                        message: 'A new staff account is added'
                    },
                    success: () => location.replace(`${ BASE_URL_WEB }admin/borrowers`)
                });

            // Refresh data table after add
            const dt = $('#studentBorrowersDT').DataTable();
            dt.ajax.reload();
        } else {
            showAlert('danger','Failed!',result.message);
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
 * VIEW STUDENT INFORMATION
 * ===============================================================================
 */

viewStudent = (userID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/students/${userID}`,
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

                var statusBlade;
                if(data.status == 'Active') {
                    statusBlade = `<div class="badge alert-success text-success p-2">Active</div>`
                } else {
                    statusBlade = `<div class="badge alert-danger text-danger p-2">Inactive</div>`
                }

                var sexIcon;
                if(data.gender === 'Male') {
                    sexIcon =`<i class="fas fa-mars text-blue mr-1"></i>`
                } else if(data.gender === 'Female') {
                    sexIcon =`<i class="fas fa-venus text-danger mr-1"></i>`
                } else {
                    sexIcon =`<i class="fas fa-genderless text-secondary mr-1"></i>`
                }

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
                    <tr>
                        <th>Status</th>
                        <td>
                            <span>${ statusBlade }</span>
                        </td>
                    </tr>
                `)

                $('#viewBorrowerModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

/**
 * ===============================================================================
 * VIEW STAFF INFORMATION
 * ===============================================================================
 */

viewStaff = (userID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/staffs/${userID}`,
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

                var statusBlade;
                if(data.status == 'Active') {
                    statusBlade = `<div class="badge alert-success text-success p-2">Active</div>`
                } else {
                    statusBlade = `<div class="badge alert-danger text-danger p-2">Inactive</div>`
                }

                var sexIcon;
                if(data.gender === 'Male') {
                    sexIcon =`<i class="fas fa-mars text-blue mr-1"></i>`
                } else if(data.gender === 'Female') {
                    sexIcon =`<i class="fas fa-venus text-danger mr-1"></i>`
                } else {
                    sexIcon =`<i class="fas fa-genderless text-secondary mr-1"></i>`
                }

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
                    <tr>
                        <th>Status</th>
                        <td>
                            <span>${ statusBlade }</span>
                        </td>
                    </tr>
                `);

                $('#viewBorrowerModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

/**
 * ===============================================================================
 * VIEW EDIT STUDENT INFORMATION
 * ===============================================================================
 */

// Get student details when student form is loaded
if($('#editStudentAsBorrowerForm').length) {
    const params = window.location.pathname.split('/');
    const userID = params[params.length-1];

    $.ajax({
        url: `${BASE_URL_API}librarian/users/${userID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                const gender = data.gender
                console.log(data);

                $('#studentIDNumber').val(data.idNumber);
                $('#studentFirstName').val(data.firstName);
                $('#studentMiddleName').val(data.middleName);
                $('#studentLastName').val(data.lastName);
                $('#course').val(data.course);
                $('#year').val(data.year);
                $('#section').val(data.section);
                $('#studentGender').selectpicker('val', gender);
                $('#studentContactNumber').val(data.contactNumber);

                if(data.status == 'Active'){
                    $('#activeStudent').prop('checked', true);
                }
                else{
                    $('#inactiveStudent').prop('checked', true);
                }
            }
        }
    })
    .fail(() => console.error('There was an error in getting material details'));
}

// Vadlidate edit material form
$('#editStudentAsBorrowerForm').validate(validateOptions({
    rules: {
        studentIDNumber: {
            required: true
        },
        studentFirstName: {
            required: true
        },
        studentLastName: {
            required: true
        },
        studentContactNumber:{
            required: true
        },
        studentGender:{
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
        studentStatus:{
            required: true
        }
    },
    messages: {
        studentIDNumber: {
            required: 'Student Number is required'
        },
        studentFirstName: {
            required: 'First Name is required'
        },
        studentLastName: {
            required: 'Last Name is required'
        },
        studentContactNumber:{
            required: 'Contact Number is required'
        },
        studentGender:{
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
        studentStatus:{
            required: 'Status is required'
        }
    },
    submitHandler: () => edit_studentAJAX()
}));

// Edit Student AJAX
edit_studentAJAX = () => {
    const rawData = new FormData($('#editStudentAsBorrowerForm')[0]);
    const params = window.location.pathname.split('/');
    const userID = params[params.length-1];

    data = {
        idNumber:       rawData.get('studentIDNumber'),
        firstName:      rawData.get('studentFirstName'),
        middleName:     rawData.get('studentMiddleName'),
        lastName:       rawData.get('studentLastName'),
        contactNumber:  rawData.get('studentContactNumber'),
        gender:         rawData.get('studentGender'),
        course:         rawData.get('course'),
        year:           rawData.get('year'),
        section:        rawData.get('section'),
        status:         rawData.get('studentStatus'),
        userType:       'Student'
    }

    console.log(data)

    //Edit Student via AJAX
    $.ajax({
        url: `${BASE_URL_API}librarian/users/${userID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                    // Request a temporary sessioned alert
                    // (for next page alerts)
                    $.ajax({
                        url: `${ BASE_URL_WEB }alert`,
                        type: 'POST',
                        data: {
                            theme: 'success',
                            title: 'Success!',
                            message: 'Student Information successfully updated!'
                        },
                        success: () => location.replace(`${ BASE_URL_WEB }admin/borrowers`)
                    });
    
            } else {
                showAlert('danger','Failed!',result.message);
            }
        },
        error: err => {
            showAlert('danger', 'Oops!', 'ID Number already existed')
        }
    })
}

/**
 * ===============================================================================
 * VIEW EDIT STAFF INFORMATION
 * ===============================================================================
 */

// Get staff details when staff form is loaded
if($('#editStaffAsBorrowerForm').length) {
    const params = window.location.pathname.split('/');
    const userID = params[params.length-1];

    $.ajax({
        url: `${BASE_URL_API}librarian/users/${userID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                const gender = data.gender
                console.log(data);

                $('#staffIDNumber').val(data.idNumber);
                $('#staffFirstName').val(data.firstName);
                $('#staffMiddleName').val(data.middleName);
                $('#staffLastName').val(data.lastName);
                $('#staffGender').selectpicker('val', gender);
                $('#staffContactNumber').val(data.contactNumber);

                if(data.status == 'Active'){
                    $('#activeStaff').prop('checked', true);
                }
                else{
                    $('#inactiveStaff').prop('checked', true);
                }
            }
        }
    })
    .fail(() => console.error('There was an error in getting material details'));
}

// Vadlidate edit material form
$('#editStaffAsBorrowerForm').validate(validateOptions({
    rules: {
        staffIDNumber: {
            required: true
        },
        staffFirstName: {
            required: true
        },
        staffLastName: {
            required: true
        },
        staffContactNumber:{
            required: true
        },
        staffGender:{
            required: true
        },
        staffStatus:{
            required: true
        }
    },
    messages: {
        staffIDNumber: {
            required: 'Student Number is required'
        },
        staffFirstName: {
            required: 'First Name is required'
        },
        staffLastName: {
            required: 'Last Name is required'
        },
        staffContactNumber:{
            required: 'Contact Number is required'
        },
        staffGender:{
            required: 'Gender is required'
        },
        staffStatus:{
            required: 'Status is required'
        }
    },
    submitHandler: () => edit_staffAJAX()
}));

// Edit Student AJAX
edit_staffAJAX = () => {
    const rawData = new FormData($('#editStaffAsBorrowerForm')[0]);
    const params = window.location.pathname.split('/');
    const userID = params[params.length-1];

    data = {
        idNumber:       rawData.get('staffIDNumber'),
        firstName:      rawData.get('staffFirstName'),
        middleName:     rawData.get('staffMiddleName'),
        lastName:       rawData.get('staffLastName'),
        contactNumber:  rawData.get('staffContactNumber'),
        gender:         rawData.get('staffGender'),
        status:         rawData.get('staffStatus'),
        userType:       'Staff'
    }

    console.log(data)

    //Edit Student via AJAX
    $.ajax({
        url: `${BASE_URL_API}librarian/users/${userID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                    // Request a temporary sessioned alert
                    // (for next page alerts)
                    $.ajax({
                        url: `${ BASE_URL_WEB }alert`,
                        type: 'POST',
                        data: {
                            theme: 'success',
                            title: 'Success!',
                            message: 'Staff Information successfully updated!'
                        },
                        success: () => location.replace(`${ BASE_URL_WEB }admin/borrowers`)
                    });
    
            } else {
                showAlert('danger','Failed!',result.message);
            }
        },
        error: err => {
            showAlert('danger', 'Oops!', 'ID Number already existed')
        }
    })
}

/**
 * ===============================================================================
 * GET STUDENT AND STAFF COUNT
 * ===============================================================================
 */

if($('#studentsCount, #staffsCount').length) {
    $.ajax({
        url: `${ BASE_URL_API }librarian/users/count`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const count = result.count;
                $('#studentsCount').html(count.students);
                $('#staffsCount').html(count.staffs);
            }
        }
    })
    .fail(() => console.log('There was a problem in getting users count'));
}