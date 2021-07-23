/**
 * ===============================================================================
 * * PUBLISHERS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing publishers
 * ===============================================================================
 */

$(() => {
    loadPublishersDT();
    publishers_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL PUBLISHERS AJAX
 * ===============================================================================
 */

// Load Publishers DataTable
loadPublishersDT = () => {
    const dt = $('#publishersDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/publishers`,
                headers: AJAX_HEADERS,
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
                                        class       = "dropdown-item"
                                        onclick     = "viewPublisher('${data.publisherID}')"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
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

const addPublisherForm = $('#addPublisherForm');
const addPublisherModal = $('#addPublisherModal');

// Add Publisher From Validation
addPublisherForm.validate(validateOptions({
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
    const rawData = new FormData(addPublisherForm[0]);

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
                    addPublisherModal.modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    addPublisherModal.modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Reload publishers count
                    publishers_countAJAX();

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
            addPublisherModal.modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}

// Reset Add Publisher Form when its modal has been hidden
addPublisherModal.on('hide.bs.modal', () => addPublisherForm.trigger('reset'));


/**
 * ===============================================================================
 * EDIT PUBLISHERS AJAX
 * ===============================================================================
 */

// Edit publisher
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

// Validate Edit Publisher Form
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
}));

// Update Publisher
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

                    // Reload publishers count
                    publishers_countAJAX();

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
 * REMOVE PUBLISHER AJAX
 * ===============================================================================
 */

// Remove publisher
removePublisher = (publisherID) => {
    setFormValues('#removePublisherForm',[
        {
            name: 'publisherID',
            value: publisherID
        }
    ]);

    $('#removePublisherModal').modal('show')
}

// Validate Remove Publisher Form
$('#removePublisherForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_publisherAJAX()
}));

// Delete publisher AJAX
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
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removePublisherModal').modal('hide');

                // Reload publishers count
                publishers_countAJAX();
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

/**
 * ===============================================================================
 * VIEW PUBLISHER
 * ===============================================================================
 */

// View Publisher
viewPublisher = (publisherID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/publishers/${publisherID}`,
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

                const addedAt = `
                    <div>${ moment(data.addedAt).format("dddd, MMMM D, YYYY") }</div>
                    <div>${ moment(data.addedAt).format("hh:mm A") }</div>
                    <div class="small text-secondary">${ moment(data.addedAt).fromNow() }</div>
                `
                const updatedAt = `
                    <div>${ moment(data.updatedAt).format("dddd, MMMM D, YYYY") }</div>
                    <div>${ moment(data.updatedAt).format("hh:mm A") }</div>
                    <div class="small text-secondary">${ moment(data.updatedAt).fromNow() }</div>
                `

                console.log(data);

                $('#publisher').html(data.publisherName);
                $('#status').html(statusBlade);
                $('#addedBy').html(addedByFullName);
                $('#updatedBy').html(updatedByFullName);
                $('#addedAt').html(addedAt);
                $('#updatedAt').html(updatedAt);
                
                $('#viewPublisherModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

/**
 * ===============================================================================
 * PUBLISHERS COUNT
 * ===============================================================================
 */

// publishers count AJAX
publishers_countAJAX = () => {
    if($('#publishersCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/publishers/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const publishersCount = result.count;
                    $('#publishersTotalCount').html(publishersCount.total);
                    $('#publishersActiveCount').html(publishersCount.active);
                    $('#publishersInactiveCount').html(publishersCount.inactive);
                } else {
                    console.log('No result was found');
                }
            }
        })
        .fail(() => console.error('There was an error in getting publishers count'));
    }
}