/**
 * ===============================================================================
 * * GENRES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material genres
 * ===============================================================================
 */

$(() => {
    loadGenresDT();
    genres_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL GENRES AJAX
 * ===============================================================================
 */

// Load genres DataTable
loadGenresDT = () => {
    const dt = $('#genresDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/genres`,
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
                    data: 'genre'
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
                                        onclick     = "viewGenre('${data.genreID}')"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "editGenre('${data.genreID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeGenre('${data.genreID}')"
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
 * ADD GENRES AJAX
 * ===============================================================================
 */

// Add Genre From Validation
$('#addGenreForm').validate(validateOptions({
    rules: {
        genre: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        genre: {
            required: 'Genre is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_genreAJAX()
}));

// Add Genre AJAX
add_genreAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addGenreForm')[0]);

    // Get data from rawData
    data = {
        genre: rawData.get('genre'),
        status: rawData.get('status'),
    }

    // Add Genre via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/genres`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#addGenreModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addGenreModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Reload genres count
                    genres_countAJAX();

                    // Refresh data table after add
                    const dt = $('#genresDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addGenreModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}


/**
 * ===============================================================================
 * EDIT GENRES AJAX
 * ===============================================================================
 */

// Edit genre
editGenre = (genreID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/genres/${genreID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                console.log(data);

                setFormValues('#editGenreForm',[
                    {
                        name: 'genreID',
                        value: data.genreID
                    },
                    {
                        name: 'genre',
                        value: data.genre
                    },
                    {
                        name: 'status',
                        value: data.status
                    }
                ])
                
                $('#editGenreModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

// Edit Genre From Validation
$('#editGenreForm').validate(validateOptions({
    rules: {
        genre: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        genre: {
            required: 'Genre is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => update_genreAJAX()
}));

// Update Genre AJAX
update_genreAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editGenreForm')[0]);

    // Get data from rawData
    data = {
        genre: rawData.get('genre'),
        status: rawData.get('status')
    }

    const genreID = rawData.get('genreID')

    // Edit Genre via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/genres/${genreID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editGenreModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editGenreModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');

                    // Reload genres count
                    genres_countAJAX();

                    // Refresh data table after add
                    const dt = $('#genresDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editGenreModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}


/**
 * ===============================================================================
 * REMOVE GENRES AJAX
 * ===============================================================================
 */

// Remove Genre
removeGenre = (genreID) => {
    setFormValues('#removeGenreForm',[
        {
            name: 'genreID',
            value: genreID
        }
    ]);

    $('#removeGenreModal').modal('show')
}

// Validate Remove Genre Form
$('#removeGenreForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_genreAJAX()
}))

// Delete Genre AJAX
delete_genreAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeGenreForm')[0]);

    const genreID = rawData.get('genreID')

    $.ajax({
        url: `${ BASE_URL_API }librarian/genres/${genreID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#genresDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeGenreModal').modal('hide');

                // Reload genres count
                genres_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeGenreModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}

/**
 * ===============================================================================
 * VIEW GENRE
 * ===============================================================================
 */

// View Genre
viewGenre = (genreID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/genres/${genreID}`,
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

                $('#genreName').html(data.genre);
                $('#status').html(statusBlade);
                $('#addedBy').html(addedByFullName);
                $('#updatedBy').html(updatedByFullName);
                $('#addedAt').html(addedAt);
                $('#updatedAt').html(updatedAt);
                
                $('#viewGenreModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

/**
 * ===============================================================================
 * GENRES COUNT
 * ===============================================================================
 */

// Genres count AJAX
genres_countAJAX = () => {
    if($('#genresCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/genres/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const genresCount = result.count;
                    $('#genresTotalCount').html(genresCount.total);
                    $('#genresActiveCount').html(genresCount.active);
                    $('#genresInactiveCount').html(genresCount.inactive);
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