/**
 * ===============================================================================
 * * MATERIALS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing materials
 * ===============================================================================
 */


/**
 * ===============================================================================
 * FOR IMAGE PREVIEW
 * ===============================================================================
 */

$('#uploadMaterialImg').on('change', (e) => {
    
    var file = e.target.files[0];

    validImageType = 
        file.type === 'image/png' ||
        file.type === 'image/gif' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/jpg';

    if(validImageType) {
        var x = URL.createObjectURL(file);
        console.log();
        $('#materialImgContainer').html(`
            <img id="materialImgPreview">
        `);
    
        $('#materialImgPreview').attr('src', x);
    } else {
        $('#uploadMaterialImg').val('');

        $('#materialImgContainer').html(`
            <div class="bg-muted flex-center text-secondary rounded-lg" style="width: 18rem; height: 25rem">
                <span>Material image will display here</span>
            </div>
        `);

        showAlert('danger', 'Oops!', 'The file must be an image type');
    }
});

/**
 * ===============================================================================
 * FOR ADD MATERIAL
 * ===============================================================================
 */

if($('#addMaterialForm').length || $('#editMaterialForm').length) {
    
    // Fetch buildings for add and editing rooms and material
    $.ajax({
        url: `${ BASE_URL_API }librarian/buildings-with-rooms-and-shelves`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
    
                // Get data from result
                const data = result.data
    
                // Populate select options
                var options = '';
                data.forEach(building => options +=`
                    <option value="${building.buildingID}">${building.buildingName}</option>
                `);
    
                // For add select in add building
                $('#buildingForAdd').html(options).selectpicker('refresh');
    
                // For add select in add material
                $('#buildingForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#buildingForEdit').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });

    // Fetch all languages for add and editing material
    $.ajax({
        url: `${ BASE_URL_API }librarian/languages`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(language => options +=`
                    <option value="${language.languageID}">${language.language}</option>
                `);

                // For add select in add material
                $('#languageForAddMaterial').html(options).selectpicker('refresh');

                // For edit select
                $('#languageForEdit').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });

    // Fetch all material types for add and editing material
    $.ajax({
        url: `${ BASE_URL_API }librarian/material_types`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
    
                // Get data from result
                const data = result.data
    
                // Populate select options
                var options = '';
                data.forEach(mType => options +=`
                    <option value="${mType.typeID}">${mType.typeName}</option>
                `);
    
                // For add select in add material
                $('#materialTypeForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#materialTypeForEdit').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });

    // Fetch all publishers for add and editing material
    $.ajax({
        url: `${ BASE_URL_API }librarian/publishers`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
    
                // Get data from result
                const data = result.data
    
                // Populate select options
                var options = '';
                data.forEach(publishers => options +=`
                    <option value="${publishers.publisherID}">${publishers.publisherName}</option>
                `);
    
                // For add select in add material
                $('#publisherForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#publisherForEdit').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });

    // Fetch all genres for add and editing material
    $.ajax({
        url: `${ BASE_URL_API }librarian/genres`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
    
                // Get data from result
                const data = result.data
    
                // Populate select options
                var options = '';
                data.forEach(genre => options +=`
                    <option value="${genre.genreID}">${genre.genre}</option>
                `);
    
                // For add select in add material
                $('#genreForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#genreForEdit').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });

    // Fetch all authors for add and editing material
    $.ajax({
        url: `${ BASE_URL_API }librarian/authors`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
    
                // Get data from result
                const data = result.data
    
                // Populate select options
                var options = '';
                data.forEach(authors => options +=`
                    <option value="${authors.authorID}">${authors.authorFirstName} ${authors.authorLastName}</option>
                `);
    
                // For add select in add material
                $('#authorForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#authorForEdit').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });
}

// When a building is selected
$('#buildingForAddMaterial').on('changed.bs.select', () => {
    const buildingID = $('#buildingForAddMaterial').val();

    $.ajax({
        url: `${ BASE_URL_API }librarian/rooms-with-shelves/${ buildingID }`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(room => options +=`
                    <option value="${room.roomID}">${room.roomName}</option>
                `);

                // For add select in add building
                $('#roomForAddMaterial').html(options).selectpicker('refresh');
                $('#shelfForAddMaterial').html('').selectpicker('refresh');
            }
        }
    })
    .fail(() => showAlert('danger', 'Error:', 'Failed to fetch rooms of that building'));
});

// When a room is selected
$('#roomForAddMaterial').on('changed.bs.select', () => {
    const roomID = $('#roomForAddMaterial').val();

    $.ajax({
        url: `${ BASE_URL_API }librarian/room-shelves/${ roomID }`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {

                // Get data from result
                const data = result.data

                // Populate select options
                var options = '';
                data.forEach(shelf => options +=`
                    <option value="${shelf.shelfID}">${shelf.shelfName}</option>
                `);

                // For add select in add building
                $('#shelfForAddMaterial').html(options).selectpicker('refresh');
            }
        }
    })
    .fail(() => showAlert('danger', 'Error:', 'Failed to fetch shelves of that room'));
})