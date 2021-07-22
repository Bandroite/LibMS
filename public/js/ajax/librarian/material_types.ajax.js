/**
 * ===============================================================================
 * * MATERIAL TYPES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material types
 * ===============================================================================
 */

$(() => {
    loadMaterialTypesDT();
    material_types_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL MATERIAL TYPES AJAX
 * ===============================================================================
 */

// Load Material Types DataTable
loadMaterialTypesDT = () => {
    const dt = $('#materialTypesDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/material_types`,
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
                    data: 'typeName'
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
                                    class       = "dropdown-item"
                                    onclick     = "viewMaterialType('${data.typeID}')"
                                >
                                    <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                    <span>View details</span>
                                </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "editMaterialType('${data.typeID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeMaterialType('${data.typeID}')"
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
 * ADD MATERIAL TYPES AJAX
 * ===============================================================================
 */

// Add Material Type From Validation
$('#addMaterialTypeForm').validate(validateOptions({
    rules: {
        typeName: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        typeName: {
            required: 'Type Name is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_material_typeAJAX()
}))

// Add Material Type AJAX
add_material_typeAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addMaterialTypeForm')[0]);

    // Get data from rawData
    data = {
        typeName: rawData.get('typeName'),
        status: rawData.get('status'),
    }

    // Add Material Type via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_types`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#addMaterialTypeModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addMaterialTypeModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    //Reset form values
                    $('#addMaterialTypeForm').trigger("reset");

                    // Reload material types count
                    material_types_countAJAX();

                    // Refresh data table after add
                    const dt = $('#materialTypesDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addMaterialTypeModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}

/**
 * ===============================================================================
 * EDIT MATERIAL TYPES AJAX
 * ===============================================================================
 */

// Edit material type
editMaterialType = (typeID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_types/${typeID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                console.log(data);

                setFormValues('#editMaterialTypeForm',[
                    {
                        name: 'typeID',
                        value: data.typeID
                    },
                    {
                        name: 'typeName',
                        value: data.typeName
                    },
                    {
                        name: 'status',
                        value: data.status
                    }
                ])
                
                $('#editMaterialTypeModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

// Edit Material Type From Validation
$('#editMaterialTypeForm').validate(validateOptions({
    rules: {
        typeName: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        typeName: {
            required: 'Type Name is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => update_material_typeAJAX()
}))

// Update Material Type AJAX
update_material_typeAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editMaterialTypeForm')[0]);

    // Get data from rawData
    data = {
        typeName: rawData.get('typeName'),
        status: rawData.get('status')
    }

    const typeID = rawData.get('typeID')

    // Edit Material type via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_types/${typeID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editMaterialTypeModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editMaterialTypeModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');

                    // Reload material types count
                    material_types_countAJAX();

                    // Refresh data table after add
                    const dt = $('#materialTypesDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editMaterialTypeModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}

/**
 * ===============================================================================
 * REMOVE MATERIAL TYPES AJAX
 * ===============================================================================
 */

// Remove Material Type
removeMaterialType = (typeID) => {
    setFormValues('#removeMaterialTypeForm',[
        {
            name: 'typeID',
            value: typeID
        }
    ]);

    $('#removeMaterialTypeModal').modal('show')
}

// Validate Remove Material Type Form
$('#removeMaterialTypeForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_material_typeAJAX()
}))

// Delete Material Type AJAX
delete_material_typeAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeMaterialTypeForm')[0]);

    const typeID = rawData.get('typeID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/material_types/${typeID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#materialTypesDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeMaterialTypeModal').modal('hide');

                // Reload material types count
                material_types_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeMaterialTypeModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}

/**
 * ===============================================================================
 * MATERIAL TYPES COUNT
 * ===============================================================================
 */

// Material Types count AJAX
material_types_countAJAX = () => {
    if($('#materialTypesCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/material_types/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const materialTypesCount = result.count;
                    $('#materialTypesTotalCount').html(materialTypesCount.total);
                    $('#materialTypesActiveCount').html(materialTypesCount.active);
                    $('#materialTypesInactiveCount').html(materialTypesCount.inactive);
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

/**
 * ===============================================================================
 * VIEW MATERIAL TYPE
 * ===============================================================================
 */

// View Material Type
viewMaterialType = (typeID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_types/${typeID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                const addedBy = data.added_by_librarian
                const updatedBy = data.updated_by_librarian

                const addedByFullName =
                setFullName('F Mi L',{
                    firstName: addedBy.firstName,
                    middleName: addedBy.middleName,
                    lastName: addedBy.lastName
                })

                const updatedByFullName =
                setFullName('F Mi L',{
                    firstName: updatedBy.firstName,
                    middleName: updatedBy.middleName,
                    lastName: updatedBy.lastName,
                })

                var statusBlade;
                    if(data.status == 'Active'){
                        statusBlade = `
                            <div class="badge alert-success text-success p-2">Active</div>
                        `
                    }
                    else{
                        statusBlade = `
                            <div class="badge alert-danger text-danger p-2">Inactive</div>
                        `
                    }

                const addedAt = moment(data.addedAt).format("dddd, MMMM D, YYYY hh:mm A")
                const updatedAt = moment(data.updated).format("dddd, MMMM D, YYYY hh:mm A")

                console.log(data);

                $('#type').html(data.typeName);
                $('#status').html(statusBlade);
                $('#addedBy').html(addedByFullName);
                $('#updatedBy').html(updatedByFullName);
                $('#addedAt').html(addedAt);
                $('#updatedAt').html(updatedAt);
                
                $('#viewMaterialTypeModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}