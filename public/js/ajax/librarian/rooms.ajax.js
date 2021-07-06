/**
 * ===============================================================================
 * * ROOMS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing roms
 * ===============================================================================
 */

$(() => {
    loadRoomsDT();
    rooms_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL ROOMS
 * ===============================================================================
 */

// Load Rooms DataTable
loadRoomsDT = () => {
    const dt = $('#roomsDT');
    if(dt.length){
        dt.DataTable({
            ajax:{
                url:`${ BASE_URL_API }librarian/rooms`,
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
                                    <i class="fas fa-cube"></i>
                                </div>
                                <div>${ data.roomName }</div>
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
                                    <i class="fas fa-building"></i>
                                </div>
                                <div>
                                    <div>${ data.building.buildingName }</div>
                                    <div class="small text-secondary font-italic">${ data.building.location }</div>
                                </div>
                            </div>
                        `
                    }
                },
                {
                    data: null,
                    render: (data) => {
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
                                        onclick = "editRoom('${data.roomID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "deleteRoom('${data.roomID}')"
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
 * ADD ROOM
 * ===============================================================================
 */

// When add room modal is shown
$('#addRoomModal').on('show.bs.modal', () => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(building => options +=`
                    <option value="${building.buildingID}">${building.buildingName}</option>
                `);

                // For add select in add material
                $('#buildingsForAddRoom').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        $('#addRoomModal').modal('hide');
        showAlert('danger', 'Error:', 'There was an error while trying to get buildings')
    })
});

// Add Room From Validation
$('#addRoomForm').validate(validateOptions({
    rules: {
        roomName: {
            required: true
        },
        building: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        roomName: {
            required: 'Room Name is required'
        },
        building: {
            required: 'Building is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_roomAJAX()
}))

// Add Room AJAX
add_roomAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addRoomForm')[0]);

    // Get data from rawData
    data = {
        roomName: rawData.get('roomName'),
        buildingID: rawData.get('building'),
        status: rawData.get('status'),
    }
        
    // Add Room via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/rooms`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    showAlert('danger', 'Error: ', result.message)
                    $('#addRoomModal').modal('hide');
                    showAlert('danger','Failed!',result.message);
                } else {

                    // Hide Add Room Modal
                    $('#addRoomModal').modal('hide');
                    
                    // Show success alert
                    showAlert('success','Success!',result.message);

                    // Refresh data table after add
                    const dt = $('#roomsDT').DataTable();
                    dt.ajax.reload();

                    // Reload rooms count
                    rooms_countAJAX();

                    // Reset add form
                    $('#addRoomForm').trigger('reset')
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addRoomModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}

// When add room modal is hidden
$('#addRoomModal').on('hide.bs.modal', () => $('#addRoomForm').trigger('reset'));


/**
 * ===============================================================================
 * UPDATE ROOM
 * ===============================================================================
 */

// Edit Room
editRoom = (id) => {
    
    // Get all buildings for select
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(building => options +=`
                    <option value="${building.buildingID}">${building.buildingName}</option>
                `);

                // For edit select in edit material
                $('#buildingForEditRoom').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        $('#editRoomModal').modal('hide');
        showAlert('danger', 'Failed!', 'There was an error in getting buildings');
    });

    // Get the details of room for editing
    $.ajax({
        url: `${ BASE_URL_API }librarian/rooms/${ id }`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;

                // Set the ID of the room
                $('#roomIDForEdit').val(data.roomID);

                // Set the name of the room
                $('#roomNameForEdit').val(data.roomName);

                // Set the selected building
                $('#buildingForEditRoom').selectpicker('val', `${ data.building.buildingID }`);
                
                // Set the status of room
                const radios = $(`input:radio[name="statusForEdit"]`);
                if(data.status === 'Active') {
                    radios.filter(`[value="Active"]`).prop('checked', true);
                } else if(data.status === 'Inactive') {
                    radios.filter(`[value="Inactive"]`).prop('checked', true);
                }

                // Show Edit Room Modal
                $('#editRoomModal').modal('show');
            } else {
                showAlert('danger', 'Failed!', 'No result was found');
            }
        }
    })
    .fail(() => showAlert('danger', 'Failed!', 'There was an error in getting a room'));
}

// Validate Edit Room Form
$('#editRoomForm').validate(validateOptions({
    rules: {
        roomName: {
            required: true,
        },
        building: {
            required: true,
        },
        statusForEdit: {
            required: true
        }
    },
    messages: {
        roomName: {
            required: 'Room name is required',
        },
        building: {
            required: 'Please select the building where the room belongs to',
        },
        statusForEdit: {
            required: 'Please select the status of the room'
        }
    },
    submitHandler: () => update_roomAJAX()
}));


// Update Room AJAX
update_roomAJAX = () => {
    const rawData = new FormData($('#editRoomForm')[0]);

    data = {
        roomName:   rawData.get('roomName'),
        buildingID: rawData.get('building'),
        status:     rawData.get('statusForEdit'),
        updatedAt:  moment().format()
    }

    const id = rawData.get('roomID');

    $.ajax({
        url: `${ BASE_URL_API }librarian/rooms/${ id }`,
        type: 'PUT',
        data: data,
        dataType: 'json',
        headers: AJAX_HEADERS,
        success: (result) => {
            
            if(result) {

                // Reload DataTables
                const dt = $('#roomsDT').DataTable();
                dt.ajax.reload()

                // Show success alert
                showAlert('info', 'Success!', 'A room has been updated.');
            } else {
                showAlert('danger', 'Failed!', 'There was an error in updating a room. Please try again.');
            }
            
            $('#editRoomModal').modal('hide');
        }
    })
    .fail(() => {
        $('#editRoomModal').modal('hide');
        showAlert('danger', 'Failed!', 'There was an error in updating a room. Please try again.');
    });
}

/**
 * ===============================================================================
 * REMOVE ROOMS AJAX
 * ===============================================================================
 */

// Remove Room
removeRoom = (roomID) => {
    setFormValues('#removeRoomForm',[
        {
            name: 'roomID',
            value: roomID
        }
    ]);

    $('#removeRoomModal').modal('show')
}

// Validate Remove Room Form
$('#removeRoomForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_roomAJAX()
}))

// Delete Room AJAX
delete_roomAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeRoomForm')[0]);

    const roomID = rawData.get('roomID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/rooms/${roomID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#roomsDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeRoomModal').modal('hide');

                // Reload rooms count
                rooms_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeRoomModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}


/**
 * ===============================================================================
 * ROOMS COUNT
 * ===============================================================================
 */

// Rooms count AJAX
rooms_countAJAX = () => {
    if($('#roomsCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/rooms/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const roomsCount = result.count;
                    $('#roomsTotalCount').html(roomsCount.total);
                    $('#roomsActiveCount').html(roomsCount.active);
                    $('#roomsInactiveCount').html(roomsCount.inactive);
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