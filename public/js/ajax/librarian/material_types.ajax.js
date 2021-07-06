/**
 * ===============================================================================
 * * MATERIAL TYPES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material types
 * ===============================================================================
 */

$(() => {
    material_types_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL MATERIAL TYPES AJAX
 * ===============================================================================
 */

// Load material types DataTable
loadmaterialTypesDT = () => {
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
                                        class="dropdown-item"
                                        onclick = "editmaterialType('${data.typeID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removematerialType('${data.typeID}')"
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

// Add Material Types From Validation
$('#addmaterialTypeForm').validate(validateOptions({
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
    submitHandler: () => add_materialTypeAJAX()
}))

// Add Material Type AJAX
add_materialTypeAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addmaterialTypeForm')[0]);

    // Get data from rawData
    data = {
        typeName: rawData.get('typeName'),
        status: rawData.get('status'),
    }

    // Add Material type via AJAX
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
                    $('#addmaterialTypeModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addmaterialTypeModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

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
            $('#addmaterialTypeModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}

/**
 * ===============================================================================
 * SHELVES COUNT
 * ===============================================================================
 */

// Shelves count AJAX
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