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
                                        onclick     = "viewBorrower('${data.userID}')"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "editBorrower('${data.userID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeBorrower('${data.userID}')"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
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
                            <div class="dropdown">
                                <div>
                                    <div class="btn btn-sm btn-muted">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
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
        status:         'Active',
        userType:       'Student'
    }

   // Add Student via AJAX
    $.ajax({
    url: `${ BASE_URL_API }librarian/students`,
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