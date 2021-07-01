/**
 * ===============================================================================
 * * BUILDINGS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing buildings
 * ===============================================================================
 */

$(() => {
    loadBuildingsDT()
})

/**
 * ===============================================================================
 * GET ALL BUILDINGS AJAX
 * ===============================================================================
 */

loadBuildingsDT = () => {
    const dt = $('#buildingsDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/buildings`,
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
                    data: 'buildingName'
                },
                {
                    data: 'location'
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
                                        onclick = "editBuilding('${data.buildingID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeBuilding('${data.buildingID}')"
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
 * ADD BUILDINGS AJAX
 * ===============================================================================
 */

// Add Building From Validation
$('#addBuildingForm').validate(validateOptions({
    rules: {
        buildingName: {
            required: true
        },
        location: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        buildingName: {
            required: 'Building Name is required'
        },
        location: {
            required: 'Location is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_buildingAJAX()
}))

// Add Building AJAX
add_buildingAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addBuildingForm')[0]);

    // Get data from rawData
    data = {
        buildingName: rawData.get('buildingName'),
        location: rawData.get('location'),
        status: rawData.get('status'),
    }

    // Add Building via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#addBuildingModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addBuildingModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Refresh data table after add
                    const dt = $('#buildingsDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addBuildingModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}


/**
 * ===============================================================================
 * EDIT BUILDINGS AJAX
 * ===============================================================================
 */

editBuilding = (buildingID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings/${buildingID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                console.log(data);

                setFormValues('#editBuildingForm',[
                    {
                        name: 'buildingID',
                        value: data.buildingID
                    },
                    {
                        name: 'buildingName',
                        value: data.buildingName
                    },
                    {
                        name: 'location',
                        value: data.location
                    },
                    {
                        name: 'status',
                        value: data.status
                    }
                ])
                
                $('#editBuildingModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

// Edit Building From Validation

$('#editBuildingForm').validate(validateOptions({
    rules: {
        buildingName: {
            required: true
        },
        location: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        buildingName: {
            required: 'Building Name is required'
        },
        location: {
            required: 'Location is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => update_buildingAJAX()
}))


update_buildingAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editBuildingForm')[0]);

    // Get data from rawData
    data = {
        buildingName: rawData.get('buildingName'),
        location: rawData.get('location'),
        status: rawData.get('status')
    }

    const buildingID = rawData.get('buildingID')

    // Edit Building via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings/${buildingID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editBuildingModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editBuildingModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');

                    // Refresh data table after add
                    const dt = $('#buildingsDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editBuildingModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}

/**
 * ===============================================================================
 * REMOVE AUTHORS AJAX
 * ===============================================================================
 */

removeAuthor = (authorID) => {
    setFormValues('#removeAuthorForm',[
        {
            name: 'authorID',
            value: authorID
        }
    ]);

    $('#removeAuthorModal').modal('show')
}

$('#removeAuthorForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_authorAJAX()
}))

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
                
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeAuthorModal').modal('hide');
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        console.log('Cannot delete this record')
        showAlert('danger','Failed','Cannot delete this record!');
    })
}
