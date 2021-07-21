/**
 * ===============================================================================
 * * SHELVES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing shelves
 * ===============================================================================
 */


$(() => {
    loadShelvesDT();
    shelves_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL SHELVES AJAX
 * ===============================================================================
 */

// Load shelves DataTable
loadShelvesDT = () => {
    const dt = $('#shelvesDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/shelves`,
                headers: AJAX_HEADERS,
            },
            columns: [
                {
                    data: 'shelfName'
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
                                        onclick = "editShelf('${data.shelfID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeShelf('${data.shelfID}')"
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
                targets: [2],
                orderable: false,
            }]
        })
    }
}


/**
 * ===============================================================================
 * ADD SHELF
 * ===============================================================================
 */

// When add shelf modal is showned
$('#addShelfModal').on('show.bs.modal', () => {
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
                $('#buildingsForAddShelf').html(options).selectpicker('refresh');

                // Reset rooms for add select
                $('#roomsForAddShelf').html('').selectpicker('refresh');
            } else {
                console.log('No result');
            }
        }
    });
});

// When a building is selected
$('#buildingsForAddShelf').on('change.bs.select', () => {
    const buildingID = $('#buildingsForAddShelf').val();
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings/${ buildingID }/rooms`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(room => options +=`
                    <option value="${room.roomID}">${room.roomName}</option>
                `);

                // For add select in add material
                $('#roomsForAddShelf').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        }
    });
})

// Validate add shelf form
$('#addShelfForm').validate(validateOptions({
    rules: {
        shelf: {
            required: true
        },
        building: {
            required: true
        },
        room: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        shelf: {
            required: 'Shelf name is required'
        },
        building: {
            required: 'Please select what building the shelf is located'
        },
        room: {
            required: 'Please select what room the shelf is located'
        },
        status: {
            required: 'Please select the status of the shelf'
        }
    },
    submitHandler: () => add_shelfAJAX()
}));

// Add shelf AJAX
add_shelfAJAX = () => {
    const rawData = new FormData($('#addShelfForm')[0]);

    data = {
        shelfName: rawData.get('shelf'),
        roomID:    rawData.get('room'),
        status:    rawData.get('status')
    }

    $.ajax({
        url: `${ BASE_URL_API }librarian/shelves`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: result => {
            if(result) {
                if(result.error) {
                    console.log(result.message)

                    // Hide modal
                    $('#addShelfModal').modal('hide');
                    showAlert('danger','Failed!',result.message);
                } else {

                    // Hide modal
                    $('#addShelfModal').modal('hide');

                    // Show success alert
                    showAlert('success', 'Success!', 'A new shelf has been added');

                    // Reload shelves count
                    shelves_countAJAX();
                    
                    // Reload shelves DataTable
                    const dt = $('#shelvesDT').DataTable();
                    dt.ajax.reload();
                }
            }else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addShelfModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}

// When add shelf modal is hidden
$('#addShelfModal').on('show.bs.modal', () => $('#addShelfForm').trigger('reset'));


/**
 * ===============================================================================
 * EDIT SHELVES AJAX
 * ===============================================================================
 */

// Edit Shlef
editShelf = (id) => {
    
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
                $('#buildingForEditShelf').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        $('#editShelfModal').modal('hide');
        showAlert('danger', 'Failed!', 'There was an error in getting buildings');
    });

    // Get all rooms for select
    $.ajax({
        url: `${ BASE_URL_API }librarian/rooms`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(room => options +=`
                    <option value="${room.roomID}">${room.roomName}</option>
                `);

                // For edit select in edit material
                $('#roomForEditShelf').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        $('#editShelfModal').modal('hide');
        showAlert('danger', 'Failed!', 'There was an error in getting buildings');
    });

    // Get the details of shelf for editing
    $.ajax({
        url: `${ BASE_URL_API }librarian/shelves/${ id }`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                console.log(data)
                
                // Set the ID of the room
                $('#shelfIDForEdit').val(data.shelfID);

                // Set the name of the room
                $('#shelfNameForEdit').val(data.shelfName);

                // Set the selected building
                $('#buildingForEditShelf').selectpicker('val', `${ data.building.buildingID }`);

                // Set the selected rom
                $('#roomForEditShelf').selectpicker('val', `${ data.room.roomID }`);
                
                // Set the status of shelf
                const radios = $(`input:radio[name="statusForEdit"]`);
                if(data.status === 'Active') {
                    radios.filter(`[value="Active"]`).prop('checked', true);
                } else if(data.status === 'Inactive') {
                    radios.filter(`[value="Inactive"]`).prop('checked', true);
                }

                // Show Edit Room Modal
                $('#editShelfModal').modal('show');
            } else {
                showAlert('danger', 'Failed!', 'No result was found');
            }
        }
    })
    .fail(() => showAlert('danger', 'Failed!', 'There was an error in getting a room'));
}

// Validate Edit Shelf Form
$('#editShelfForm').validate(validateOptions({
    rules: {
        shelfName: {
            required: true,
        },
        building: {
            required: true,
        },
        room: {
            required: true
        },
        statusForEdit: {
            required: true
        }
    },
    messages: {
        shelfName: {
            required: 'Shelf name is required',
        },
        building: {
            required: 'Please select the building where the room belongs to',
        },
        room: {
            required: 'Please select the room where the shelf belongs to',
        },
        statusForEdit: {
            required: 'Please select the status of the shelf'
        }
    },
    submitHandler: () => update_shelfAJAX()
}));


// Update Shelf AJAX
update_shelfAJAX = () => {
    const rawData = new FormData($('#editShelfForm')[0]);

    data = {
        shelfName:   rawData.get('shelfName'),
        buildingID: rawData.get('building'),
        roomID: rawData.get('room'),
        status:     rawData.get('statusForEdit'),
        updatedAt:  moment().format()
    }

    const id = rawData.get('shelfID');

    $.ajax({
        url: `${ BASE_URL_API }librarian/shelves/${ id }`,
        type: 'PUT',
        data: data,
        dataType: 'json',
        headers: AJAX_HEADERS,
        success: (result) => {
            
            if(result) {
                // Reload shelves count
                shelves_countAJAX();
                
                // Reload DataTables
                const dt = $('#shelvesDT').DataTable();
                dt.ajax.reload()

                // Show success alert
                showAlert('info', 'Success!', 'A shelf has been updated.');
            } else {
                showAlert('danger', 'Failed!', 'There was an error in updating a shelf. Please try again.');
            }
            
            $('#editShelfModal').modal('hide');
        }
    })
    .fail(() => {
        $('#editShelfModal').modal('hide');
        showAlert('danger', 'Failed!', 'There was an error in updating a shelf. Please try again.');
    });
}


/**
 * ===============================================================================
 * REMOVE SHELVES AJAX
 * ===============================================================================
 */

// Remove Shelf
removeShelf = (shelfID) => {
    setFormValues('#removeShelfForm',[
        {
            name: 'shelfID',
            value: shelfID
        }
    ]);

    $('#removeShelfModal').modal('show')
}

// Validate Remove Shelf Form
$('#removeShelfForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_shelfAJAX()
}))

// Delete Shelf AJAX
delete_shelfAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeShelfForm')[0]);

    const shelfID = rawData.get('shelfID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/shelves/${shelfID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#shelvesDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeShelfModal').modal('hide');

                // Reload shelves count
                shelves_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeShelfModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}


/**
 * ===============================================================================
 * SHELVES COUNT
 * ===============================================================================
 */

// Shelves count AJAX
shelves_countAJAX = () => {
    if($('#shelvesCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/shelves/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const shelvesCount = result.count;
                    $('#shelvesTotalCount').html(shelvesCount.total);
                    $('#shelvesActiveCount').html(shelvesCount.active);
                    $('#shelvesInactiveCount').html(shelvesCount.inactive);
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