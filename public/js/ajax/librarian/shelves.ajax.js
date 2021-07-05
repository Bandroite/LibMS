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
                                        onclick = "editAuthor('${data.shelfID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeAuthor('${data.shelfID}')"
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