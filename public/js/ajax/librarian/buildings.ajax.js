/**
 * ===============================================================================
 * * BUILDINGS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing buildings
 * ===============================================================================
 */

$(() => {
    loadBuildingsDT();
    buildings_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL BUILDINGS AJAX
 * ===============================================================================
 */


// Load Buidlings DataTable
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
                    data: null,
                    render: data => {
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-building"></i>
                                </div>
                                <div>${ data.buildingName }</div>
                            </div>
                        `
                    }
                },
                {
                    data: null,
                    render: data => {
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>${ data.location }</div>
                            </div>
                        `
                    }
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

                    // Hide Modal
                    $('#addBuildingModal').modal('hide');
                    
                    // Show Alert
                    showAlert('success','Success!',result.message);

                    // Refresh data table after add
                    const dt = $('#buildingsDT').DataTable();
                    dt.ajax.reload();

                    // Reload buildings count
                    buildings_countAJAX();
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

// Edit building
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

// Validate Edit Building Form
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

// Update Building AJAX
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
 * REMOVE BUILDING AJAX
 * ===============================================================================
 */

// Remove Building
removeBuilding = (buildingID) => {
    setFormValues('#removeBuildingForm',[
        {
            name: 'buildingID',
            value: buildingID
        }
    ]);

    $('#removeBuildingModal').modal('show')
}

// Validate Remove Building Form
$('#removeBuildingForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_buildingAJAX()
}))

// Delete building AJAX
delete_buildingAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeBuildingForm')[0]);

    const buildingID = rawData.get('buildingID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings/${buildingID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#buildingsDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeBuildingModal').modal('hide');

                // Reload buildings count
                buildings_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeBuildingModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}


/**
 * ===============================================================================
 * BUILDINGS COUNT AJAX
 * ===============================================================================
 */

buildings_countAJAX = () => {
    if($('#buildingsCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/buildings/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const buildingsCount = result.count;
                    $('#buildingsTotalCount').html(buildingsCount.total);
                    $('#buildingsActiveCount').html(buildingsCount.active);
                    $('#buildingsInactiveCount').html(buildingsCount.inactive);
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