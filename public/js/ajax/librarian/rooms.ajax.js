/**
 * ===============================================================================
 * * ROOMS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing roms
 * ===============================================================================
 */

$(() => {
    loadRoomsDT()
})

/**
 * ===============================================================================
 * GET ALL ROOMS AJAX
 * ===============================================================================
 */

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
                    data: 'roomName'
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
                                        onclick = "editCopy('${data.roomID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeCopy('${data.roomID}')"
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
                targets: [2],
                orderable: false,
            }]
        })
    }
}

/**
 * ===============================================================================
 * ADD ROOMS AJAX
 * ===============================================================================
 */

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

//Fetch Buildings to be selected by Room

$.ajax({
    url: `${ BASE_URL_API }librarian/buildings`,
    type: 'GET',
    headers: AJAX_HEADERS,
    success: (result) => {
        if(result) {
            const data = result.data
            var options = '';
            data.forEach(building => {
                options +=`
                    <option value="${building.buildingID}">${building.buildingName}</option>
                `
            });
            $('#building').html(options).selectpicker('refresh')

            console.log(data);
            
        } else {
            console.log('No result');
        }
    },
})

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
                    console.log(result.message)
                    $('#addRoomModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addRoomModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Refresh data table after add
                    const dt = $('#roomsDT').DataTable();
                    dt.ajax.reload();
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

