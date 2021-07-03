/**
 * ===============================================================================
 * * PUBLISHERS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing publishers
 * ===============================================================================
 */

$(() => {
    loadPublishersDT()
})

/**
 * ===============================================================================
 * GET ALL PUBLISHERS AJAX
 * ===============================================================================
 */

loadPublishersDT = () => {
    const dt = $('#publishersDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/publishers`,
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
                    data: 'publisherName'
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
                                        onclick = "editPublisher('${data.publisherID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removePublisher('${data.publisherID}')"
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
 * ADD PUBLISHERS AJAX
 * ===============================================================================
 */

// Add Publisher From Validation
$('#addPublisherForm').validate(validateOptions({
    rules: {
        publisherName: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        publisherName: {
            required: 'Publisher Name is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_publisherAJAX()
}))

// Add Publisher AJAX
add_publisherAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addPublisherForm')[0]);

    // Get data from rawData
    data = {
        publisherName: rawData.get('publisherName'),
        status: rawData.get('status'),
    }

    // Add Publisher via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/publishers`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#addPublisherModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addPublisherModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Refresh data table after add
                    const dt = $('#publishersDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addPublisherModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}

/**
 * ===============================================================================
 * EDIT PUBLISHERS AJAX
 * ===============================================================================
 */

editPublisher = (publisherID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/publishers/${publisherID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                console.log(data);

                setFormValues('#editPublisherForm',[
                    {
                        name: 'publisherID',
                        value: data.publisherID
                    },
                    {
                        name: 'publisherName',
                        value: data.publisherName
                    },
                    {
                        name: 'status',
                        value: data.status
                    }
                ])
                
                $('#editPublisherModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

// Edit Publisher From Validation

$('#editPublisherForm').validate(validateOptions({
    rules: {
        publisherName: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        publisherName: {
            required: 'Publisher Name is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => update_publisherAJAX()
}))


update_publisherAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editPublisherForm')[0]);

    // Get data from rawData
    data = {
        publisherName: rawData.get('publisherName'),
        status: rawData.get('status')
    }

    const publisherID = rawData.get('publisherID')

    // Edit Publisher via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/publishers/${publisherID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editPublisherModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editPublisherModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');

                    // Refresh data table after add
                    const dt = $('#publishersDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editPublisherModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}

/**
 * ===============================================================================
 * REMOVE PUBLISHERS AJAX
 * ===============================================================================
 */

 removePublisher = (publisherID) => {
    setFormValues('#removePublisherForm',[
        {
            name: 'publisherID',
            value: publisherID
        }
    ]);

    $('#removePublisherModal').modal('show')
}

$('#removePublisherForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_publisherAJAX()
}))

delete_publisherAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removePublisherForm')[0]);

    const publisherID = rawData.get('publisherID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/publishers/${publisherID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#publishersDT').DataTable();
                dt.ajax.reload();
                
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removePublisherModal').modal('hide');
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