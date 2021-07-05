/**
 * ===============================================================================
 * * MATERIALS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing materials
 * ===============================================================================
 */

$(() => {
    loadMaterialsDT();
});

/**
 * ===============================================================================
 * FOR IMAGE PREVIEW
 * ===============================================================================
 */

// When upload material image input is changed (or has input)
$('#uploadMaterialImg').on('change', (e) => {
    
    // Get the file
    var file = e.target.files[0];

    // Check if file is an image type
    validImageType = 
        file.type === 'image/png'  ||
        file.type === 'image/PNG'  ||
        file.type === 'image/gif'  ||
        file.type === 'image/GIF'  ||
        file.type === 'image/jpg'  ||
        file.type === 'image/JPG'  ||
        file.type === 'image/jpeg' ||
        file.type === 'image/JPEG';

    if(validImageType) {

        // Render the image to an image container if valid image type
        var x = URL.createObjectURL(file);
        $('#materialImgContainer').html(`<img id="materialImgPreview">`);
        $('#materialImgPreview').attr('src', x);
    } else {

        // Reset the input and the preview if not
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
 * GET ALL MATERIALS
 * ===============================================================================
 */

// Load Materials DataTable
loadMaterialsDT = () => {
    const dt = $('#materialsDT');
    if(dt.length) {
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/materials`,
                type: 'GET',
                headers: AJAX_HEADERS,
                // success: result => {
                //     console.log(result.data);
                // }
            },
            columns: [

                // Standard Number
                {
                    data: null,
                    class: 'text-nowrap',
                    render: data => {
                        return data.standardType +  ' ' + data.standardNumber;
                    }
                },

                // Material
                {
                    data: null,
                    render: data => {
                        return `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container text-primary">
                                    <i class="fas fa-book"></i>
                                </div>
                                <div>
                                    <div>${ data.title }</div>
                                    <div class="small text-secondary font-italic">${ data.material_type.typeName }</div>
                                </div>
                            </div>
                        `
                    }
                },

                // Genres
                {
                    data: null,
                    render: data => {
                        const genres = data.genres;

                        var genresBlade = '';

                        genres.forEach((genre, i) => {
                            genresBlade += genre.genre;
                            if(i != genres.length-1) genresBlade += ', ';
                        });

                        return genresBlade;
                    }
                },

                // language
                {
                    data: 'language.language'
                },

                // Publisher
                {
                    data: 'publisher.publisherName'
                },

                // Copies
                {
                    data: null,
                    class: 'text-right',
                    render: data => {
                        return data.copies.length
                    }
                },

                // Actions
                {
                    data: null,
                    render: data => {
                        const id = data.materialID;
                        return `
                            <div class="dropdown d-inline-block">

                                <!-- Dropdown Toggler -->
                                <div data-toggle="dropdown">
                                    <div 
                                        class       = "btn btn-sm btn-muted"
                                        data-toggle = "tooltip"
                                        title       = "More"
                                    >
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>

                                <!-- User Dropdown Menu -->
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a
                                        class="dropdown-item"
                                        href="${ BASE_URL_WEB }admin/materials/${ id }"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View Details</span>
                                    </a>
                                    <a 
                                        class="dropdown-item"
                                        href="${ BASE_URL_WEB }admin/edit-material/${ id }"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </a>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeMaterialModal"
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
                targets: [6],
                orderable: false
            }]
        });
    }
}


/**
 * ===============================================================================
 * FOR ADD/EDIT MATERIAL
 * ===============================================================================
 */

// If add/edit material form is rendered, send AJAX request for inputs
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

                // For edit select in edit material
                $('#buildingForEditMaterial').html(options).selectpicker('refresh');
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
                $('#languageForEditMaterial').html(options).selectpicker('refresh');
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
                $('#materialTypeForEditMaterial').html(options).selectpicker('refresh');
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
                $('#publisherForEditMaterial').html(options).selectpicker('refresh');
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
                $('#genresForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#genresForEditMaterial').html(options).selectpicker('refresh');
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
                $('#authorsForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#authorsForEditMaterial').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });

    // Fetch all publication countries for add and editing material
    $.ajax({
        url: `${ BASE_URL_API }librarian/publication_countries`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
    
                // Get data from result
                const data = result.data
    
                // Populate select options
                var options = '';
                data.forEach(pubCountry => options +=`
                    <option value="${pubCountry.pubCountryID}">${pubCountry.country}</option>
                `);
    
                // For add select in add material
                $('#pubCountryForAddMaterial').html(options).selectpicker('refresh');
    
                // For edit select
                $('#pubCountryForEditMaterial').html(options).selectpicker('refresh');
            } else {
                console.log('No result');
            }
        },
    });
}

// When a building is selected
$('#buildingForAddMaterial, #buildingForEditMaterial').on('changed.bs.select', () => {

    // Get builidingID from selected building
    const buildingID = $('#buildingForAddMaterial').val() || $('#buildingForEditMaterial').val();

    // Get room of the building that has shelves
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

                // For edit select in add building
                $('#roomForEditMaterial').html(options).selectpicker('refresh');
                $('#shelfForEditMaterial').html('').selectpicker('refresh');
            }
        }
    })
    .fail(() => showAlert('danger', 'Error:', 'Failed to fetch rooms of that building'));
});

// When a room is selected
$('#roomForAddMaterial, #roomForEditMaterial').on('changed.bs.select', () => {

    // Get the roomID from selected room
    const roomID = $('#roomForAddMaterial').val() || $('#roomForEditMaterial').val();

    // Request shelves of the room for input
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

                // For add select in add building
                $('#shelfForEditMaterial').html(options).selectpicker('refresh');
            }
        }
    })
    .fail(() => showAlert('danger', 'Error:', 'Failed to fetch shelves of that room'));
});

// Vadlidate add material form
$('#addMaterialForm').validate(validateOptions({
    rules: {
        // title: {
        //     required: true,
        // },
        // authors: {
        //     required: true,
        // },
        // type: {
        //     required: true,
        // },
        // genre: {
        //     required: true,
        // },
        // language: {
        //     required: true,
        // },
        // format: {
        //     required: true,
        // },
        // standardNumber: {
        //     required: true,
        // },
        // standardType: {
        //     required: true,
        // },
        // edition: {
        //     required: true,
        // },
        // editionYear: {
        //     required: true,
        // },
        // publisherName: {
        //     required: true,
        // },
        // publisherYear: {
        //     required: true,
        // },
        // publishingCountry: {
        //     required: true
        // },
        // seriesYear: {
        //     required: true,
        // },
        // description: {
        //     required: true,
        // },
        // building: {
        //     required: true,
        // },
        // room: {
        //     required: true,
        // },
        // shelf: {
        //     required: true,
        // }
    },
    messages: {
        // title: {
        //     required: 'Title is required',
        // },
        // authors: {
        //     required: 'Please select atleast one author',
        // },
        // type: {
        //     required: 'Please select a type of material',
        // },
        // genre: {
        //     required: 'Please select atleast one genre',
        // },
        // language: {
        //     required: 'Please select a language',
        // },
        // format: {
        //     required: 'Material format is required',
        // },
        // standardNumber: {
        //     required: 'Standard Number is required',
        // },
        // standardType: {
        //     required: 'Please select a standard type',
        // },
        // edition: {
        //     required: 'Edition is required',
        // },
        // editionYear: {
        //     required: 'Edition year is required',
        // },
        // publisherName: {
        //     required: 'Publisher Name is required',
        // },
        // publisherYear: {
        //     required: 'Publisher Year is required',
        // },
        // publishingCountry: {
        //     required: 'Publishing Country is required'
        // },
        // seriesYear: {
        //     required: 'Series year is required',
        // },
        // description: {
        //     required: 'Description is required',
        // },
        // building: {
        //     required: 'Please select a builidng',
        // },
        // room: {
        //     required: 'Please select a room',
        // },
        // shelf: {
        //     required: 'Please select a shelf',
        // }
    },
    submitHandler: () => add_materialAJAX()
}));

// Add Material AJAX
add_materialAJAX = () => {
    const rawData = new FormData($('#addMaterialForm')[0]);

    data = {
        image:            rawData.get('materialImg'),
        title:            rawData.get('title'),
        authors:          $('#authorsForAddMaterial').val(),
        typeID:           rawData.get('type'),
        genres:           $('#genresForAddMaterial').val(),
        languageID:       rawData.get('language'),
        format:           rawData.get('format'),
        standardNumber:   rawData.get('standardNumber'),
        standardType:     rawData.get('standardType'),
        edition:          rawData.get('edition'),
        editionYear:      rawData.get('editionYear'),
        publisherID:      rawData.get('publisher'),
        publisherYear:    rawData.get('publisherYear'),
        publisherCountry: rawData.get('publisherCountry'),
        seriesYear:       rawData.get('seriesYear'),
        description:      rawData.get('description'),
        shelfID:          rawData.get('shelf')
    }

    console.log(data);

    $.ajax({
        url: `${ BASE_URL_API }librarian/materials`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: rawData,
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        success: result => {
            if(result) {
                console.log('success!')
            }
        }
    })
    .fail(() => showAlert('danger', 'Error', 'There was an error in reading file'));
}

// Vadlidate edit material form
$('#editMaterialForm').validate(validateOptions({
    rules: {
        // title: {
        //     required: true,
        // },
        // authors: {
        //     required: true,
        // },
        // type: {
        //     required: true,
        // },
        // genre: {
        //     required: true,
        // },
        // language: {
        //     required: true,
        // },
        // format: {
        //     required: true,
        // },
        // standardNumber: {
        //     required: true,
        // },
        // standardType: {
        //     required: true,
        // },
        // edition: {
        //     required: true,
        // },
        // editionYear: {
        //     required: true,
        // },
        // publisherName: {
        //     required: true,
        // },
        // publisherYear: {
        //     required: true,
        // },
        // publishingCountry: {
        //     required: true
        // },
        // seriesYear: {
        //     required: true,
        // },
        // description: {
        //     required: true,
        // },
        // building: {
        //     required: true,
        // },
        // room: {
        //     required: true,
        // },
        // shelf: {
        //     required: true,
        // }
    },
    messages: {
        // title: {
        //     required: 'Title is required',
        // },
        // authors: {
        //     required: 'Please select atleast one author',
        // },
        // type: {
        //     required: 'Please select a type of material',
        // },
        // genre: {
        //     required: 'Please select atleast one genre',
        // },
        // language: {
        //     required: 'Please select a language',
        // },
        // format: {
        //     required: 'Material format is required',
        // },
        // standardNumber: {
        //     required: 'Standard Number is required',
        // },
        // standardType: {
        //     required: 'Please select a standard type',
        // },
        // edition: {
        //     required: 'Edition is required',
        // },
        // editionYear: {
        //     required: 'Edition year is required',
        // },
        // publisherName: {
        //     required: 'Publisher Name is required',
        // },
        // publisherYear: {
        //     required: 'Publisher Year is required',
        // },
        // publishingCountry: {
        //     required: 'Publishing Country is required'
        // },
        // seriesYear: {
        //     required: 'Series year is required',
        // },
        // description: {
        //     required: 'Description is required',
        // },
        // building: {
        //     required: 'Please select a builidng',
        // },
        // room: {
        //     required: 'Please select a room',
        // },
        // shelf: {
        //     required: 'Please select a shelf',
        // }
    },
    submitHandler: () => edit_materialAJAX()
}));

// Edit Material AJAX
edit_materialAJAX = () => {
    const rawData = new FormData($('#addMaterialForm')[0]);

    data = {
        title:              rawData.get('title'),
        authors:            $('#authorsForAddMaterial').val(),
        typeID:             rawData.get('type'),
        genres:             $('#genresForAddMaterial').val(),
        languageID:         rawData.get('language'),
        format:             rawData.get('format'),
        standardNumber:     rawData.get('standardNumber'),
        standardType:       rawData.get('standardType'),
        edition:            rawData.get('edition'),
        editionYear:        rawData.get('editionYear'),
        publisherID:        rawData.get('publisher'),
        publisherYear:      rawData.get('publisherYear'),
        publisherCountry:   rawData.get('publisherCountry'),
        seriesYear:         rawData.get('seriesYear'),
        description:        rawData.get('description'),
        shelfID:            rawData.get('shelf')
    }

    console.log(data);
}


/**
 * ===============================================================================
 * FOR MATERIAL DETAILS
 * ===============================================================================
 */

if($('#materialDetails').length) {
    const params = window.location.pathname.split('/');
    const materialID = params[params.length-1];

    $.ajax({
        url: `${ BASE_URL_API }librarian/materials/${ materialID }`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                const data = result.data
                
                console.log(data);

                $('#title').html(data.title);
                $('#description').html(data.description);

                $('#standardNumber').html(data.standardType + ' ' + data.standardNumber);
                $('#format').html(data.format);
                $('#language').html(data.language.language);

                $('#pubName').html(data.publisher.publisherName);
                $('#pubCountry').html(data.publication_country.country);

                $('#edition').html(data.edition);
                $('#editionYear').html(moment(data.editionYear).format("YYYY"));
                $('#seriesYear').html(moment(data.seriesYear).format("YYYY"));

                $('#shelf').html(data.shelf.shelfName);
                $('#room').html(data.shelf.room.roomName);
                $('#building').html(data.shelf.room.building.buildingName);

            } else {
                location.replace(`${ BASE_URL_WEB }page-not-found`);
            }
        }
    })
    .fail(() => location.replace(`${ BASE_URL_WEB }page-not-found`));
}

$('#editMaterialBtn').on('click', () => {
    const params = window.location.pathname.split('/');
    const materialID = params[params.length-1];
    location.assign(`${ BASE_URL_WEB }admin/edit-material/${ materialID }`)
});