/**
 * ===============================================================================
 * * AUTHORS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing authors
 * ===============================================================================
 */

$(() => {
    loadAuthorsDT();
    authors_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL AUTHORS AJAX
 * ===============================================================================
 */

// Load authors DataTable
loadAuthorsDT = () => {
    const dt = $('#authorsDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/authors`,
                type: 'GET',
                headers: AJAX_HEADERS,
                // success: (result) => {
                //     if(result){
                //         const data = result.data;
                //         console.log(data);
                //     }
                //     else{
                //         console.log('No result');
                //     }
                // }
            },
            columns: [
                {
                    data: 'authorFirstName'
                },
                {
                    data: 'authorLastName'
                },
                {
                    data: null,
                    render: (data) =>{
                        if(data.status == 'Active'){
                            return `
                                <div class="badge alert-success text-success p-2 w-100">Active</div>
                            `
                        }
                        else{
                            return `
                                <div class="badge alert-danger text-danger p-2 w-100">Inactive</div>
                            `
                        }
                    }
                },
                {
                    data: null,
                    class: 'text-center',
                    render: (data) => {
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
                                        class="dropdown-item"
                                        onclick = "editAuthor('${data.authorID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeAuthor('${data.authorID}')"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                },
            ],
            columnDefs: [{
                targets: [3],
                orderable: false,
            }]
        })
    }
}


/**
 * ===============================================================================
 * ADD AUTHORS AJAX
 * ===============================================================================
 */

// Add Author From Validation
$('#addAuthorForm').validate(validateOptions({
    rules: {
        authorFirstName: {
            required: true
        },
        authorLastName: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        authorFirstName: {
            required: 'First Name is required'
        },
        authorLastName: {
            required: 'Last Name is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_authorAJAX()
}))

// Add Author AJAX
add_authorAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addAuthorForm')[0]);

    // Get data from rawData
    data = {
        authorFirstName: rawData.get('authorFirstName'),
        authorLastName: rawData.get('authorLastName'),
        status: rawData.get('status'),
    }

    // Add Author via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/authors`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#addAuthorModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addAuthorModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Reload authors count
                    authors_countAJAX();

                    // Refresh data table after add
                    const dt = $('#authorsDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addAuthorModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}


/**
 * ===============================================================================
 * EDIT AUTHORS AJAX
 * ===============================================================================
 */

// Edit author
editAuthor = (authorID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/authors/${authorID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                console.log(data);

                setFormValues('#editAuthorForm',[
                    {
                        name: 'authorID',
                        value: data.authorID
                    },
                    {
                        name: 'authorFirstName',
                        value: data.authorFirstName
                    },
                    {
                        name: 'authorLastName',
                        value: data.authorLastName
                    },
                    {
                        name: 'status',
                        value: data.status
                    }
                ])
                
                $('#editAuthorModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

// Edit Author From Validation
$('#editAuthorForm').validate(validateOptions({
    rules: {
        authorFirstName: {
            required: true
        },
        authorLastName: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        authorFirstName: {
            required: 'First Name is required'
        },
        authorLastName: {
            required: 'Last Name is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => update_authorAJAX()
}))

// Update Author AJAX
update_authorAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editAuthorForm')[0]);

    // Get data from rawData
    data = {
        authorFirstName: rawData.get('authorFirstName'),
        authorLastName: rawData.get('authorLastName'),
        status: rawData.get('status')
    }

    const authorID = rawData.get('authorID')

    // Edit Building via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/authors/${authorID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editAuthorModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editAuthorModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');
                    
                    // Reload authors count
                    authors_countAJAX();
                    
                    // Refresh data table after add
                    const dt = $('#authorsDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editAuthorModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}


/**
 * ===============================================================================
 * REMOVE AUTHORS AJAX
 * ===============================================================================
 */

// Remove Author
removeAuthor = (authorID) => {
    setFormValues('#removeAuthorForm',[
        {
            name: 'authorID',
            value: authorID
        }
    ]);

    $('#removeAuthorModal').modal('show')
}

// Validate Remove Author Form
$('#removeAuthorForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_authorAJAX()
}))

// Delete Author AJAX
delete_authorAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeAuthorForm')[0]);

    const authorID = rawData.get('authorID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/authors/${authorID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#authorsDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeAuthorModal').modal('hide');

                // Reload authors count
                authors_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeAuthorModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}


/**
 * ===============================================================================
 * AUTHORS COUNT
 * ===============================================================================
 */

// Authors count AJAX
authors_countAJAX = () => {
    if($('#authorsCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/authors/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const authorsCount = result.count;
                    $('#authorsTotalCount').html(authorsCount.total);
                    $('#authorsActiveCount').html(authorsCount.active);
                    $('#authorsInactiveCount').html(authorsCount.inactive);
                } else {
                    console.log('No result was found');
                }
            }
        })
        .fail(() => {
            console.error('There was an error in getting room count');
        });
    }
}