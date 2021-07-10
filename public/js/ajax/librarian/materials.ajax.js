/**
 * ===============================================================================
 * * MATERIALS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing materials
 * ===============================================================================
 */

$(() => {
    loadMaterialsDT();
    materials_countAJAX();
});

/**
 * ===============================================================================
 * FOR IMAGE PREVIEW
 * ===============================================================================
 */

// When upload material image input is changed
$('#uploadMaterialImg').on('change', (e) => {

    // Reset the input and the preview if not
    const resetImagePreview = () => {
        $('#uploadMaterialImg').val('');
        $('#materialImgContainer').html(`
            <div class="bg-muted flex-center text-secondary rounded-lg user-select-none" style="width: 18rem; height: 25rem">
                <span>Material image will display here</span>
            </div>
        `);
    }

    // Check if file input has value
    if($('#uploadMaterialImg').val()) {

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
            resetImagePreview();
            showAlert('danger', 'Oops!', 'The file must be an image type');
        }
    } else {
        resetImagePreview();
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

                // Date Created (hidden for default sort)
                { data: 'addedAt', visible: false },

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

                // Authors
                {
                    data: null,
                    render: data => {
                        const authors = data.authors;

                        var authorsBlade = `
                            <div class="d-flex align-items-baseline">
                                <div class="icon-container">
                                    <i class="fas fa-users text-primary"></i>
                                </div>
                                <div>
                        `;

                        authors.forEach((author, i) => {
                            authorsFullName = author.authorFirstName + ' ' + author.authorLastName;
                            authorsBlade += authorsFullName;
                            if(i != authors.length-1) authorsBlade += ', ';
                        });

                        authorsBlade += '</div></div>';

                        return authorsBlade;
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
                                    <div
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#addCopyModal"
                                    >
                                        <i class="fas fa-plus mr-1 text-primary"></i>
                                        <span>Add copy of this material</span>
                                    </div>
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
            }],
            order: [[0, 'desc']]
        });
    }
}


/**
 * ===============================================================================
 * FOR ADD/EDIT MATERIAL
 * ===============================================================================
 */

fetchMaterialDetails_AJAXes = () => {

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

// If add/edit material form is rendered, send AJAX request for inputs
if($('#addMaterialForm').length || $('#editMaterialForm').length) fetchMaterialDetails_AJAXes();

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
        image: {
            required: true,
        },
        title: {
            required: true,
        },
        authors: {
            required: true,
        },
        typeID: {
            required: true,
        },
        genres: {
            required: true,
        },
        languageID: {
            required: true,
        },
        format: {
            required: true,
        },
        standardNumber: {
            required: true,
        },
        standardType: {
            required: true,
        },
        edition: {
            required: false,
        },
        editionYear: {
            required: false,
            min: 1100,
            max: 9999,
        },
        volumeNo: {
            required: false,
        },
        pageNo: {
            required: true,
        },
        publisherID: {
            required: true,
        },
        dateOfPublication: {
            required: true,
        },
        pubCountryID: {
            required: true
        },
        seriesYear: {
            required: false,
            min: 1100,
            max: 9999,
        },
        description: {
            required: true,
        },
        building: {
            required: true,
        },
        room: {
            required: true,
        },
        shelfID: {
            required: true,
        }
    },
    messages: {
        image: {
            required: 'Please select a cover image'
        },
        title: {
            required: 'Title is required',
        },
        authors: {
            required: 'Please select atleast one author',
        },
        typeID: {
            required: 'Please select the type of material',
        },
        genres: {
            required: 'Please select atleast one genre',
        },
        languageID: {
            required: 'Please select a language',
        },
        format: {
            required: 'Material format is required',
        },
        standardNumber: {
            required: 'Standard number is required',
        },
        standardType: {
            required: 'Please select the standard type',
        },
        edition: {
            required: 'Edition is required',
        },
        editionYear: {
            required: 'Edition year is required',
            min: 'It must be a valid year', 
            max: 'It must be a valid year', 
        },
        volumeNo: {
            required: 'Volume number is required',
        },
        pageNo: {
            required: 'Page number is required',
        },
        publisherID: {
            required: 'Please select a publisher',
        },
        dateOfPublication: {
            required: 'Please select the date of publication',
        },
        pubCountryID: {
            required: 'Please select the publication country'
        },
        seriesYear: {
            required: 'Series year is required',
            min: 'It must be a valid year', 
            max: 'It must be a valid year', 
        },
        description: {
            required: 'Description is required',
        },
        building: {
            required: 'Please select a building where the material is located',
        },
        room: {
            required: 'Please select the room where the material is located',
        },
        shelfID: {
            required: 'Please select the shelf where the material is located',
        }
    },
    submitHandler: () => add_materialAJAX()
}));

// Add Material AJAX
add_materialAJAX = () => {

    // Make the button disabled
    $('#addMaterialBtn').html(`
        <div class="px-4">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    `);
    $('#addMaterialBtn').attr('disabled', true);

    // Get the data from the form
    const data = new FormData($('#addMaterialForm')[0]);

    // Add material
    $.ajax({
        url: `${ BASE_URL_API }librarian/materials`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        success: result => {
            if(result) {

                // Request a temporary sessioned alert
                // (for next page alerts)
                $.ajax({
                    url: `${ BASE_URL_WEB }alert`,
                    type: 'POST',
                    data: {
                        theme: 'success',
                        title: 'Success!',
                        message: 'A new material is added'
                    },
                    success: () => location.replace(`${ BASE_URL_WEB }admin/materials`)
                });
            }
        }
    })
    .fail(() => showAlert('danger', 'Error', 'There was an error in reading file'));
}

// When edit material button is clicked
$('#editMaterialBtn').on('click', () => {
    const params = window.location.pathname.split('/');
    const materialID = params[params.length-1];
    location.assign(`${ BASE_URL_WEB }admin/edit-material/${ materialID }`)
});

// Get material details when material form is loaded
if($('#editMaterialForm').length) {
    const params = window.location.pathname.split('/');
    const materialID = params[params.length-1];

    $.ajax({
        url: `${BASE_URL_API}librarian/materials/${materialID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                console.log(data);

                $('#title').val(data.title);
                
                const authors = data.authors;
                let selectedAuthors = []
                authors.forEach(a => selectedAuthors.push(a.authorID));
                $('#authorsForEditMaterial').selectpicker('val', selectedAuthors);

                const genres = data.genres;
                let selectedGenres = []
                genres.forEach(g => selectedGenres.push(g.genreID));
                $('#genresForEditMaterial').selectpicker('val', selectedGenres);

                $('#languageForEditMaterial').selectpicker('val', data.language.languageID);
                $('#materialTypeForEditMaterial').selectpicker('val', data.material_type.typeID);
                
                $('#format').val(data.format);
                $('#standardNumber').val(data.standardNumber);
                $('#standardTypeForEditMaterial').selectpicker('val', data.standardType);

                $('#edition').val(data.edition);
                $('#editionYear').val(moment(data.editionYear).format('YYYY'));

                $('#volumeNo').val(data.volumeNo);
                $('#pageNo').val(data.pageNo);

                $('#publisherForEditMaterial').selectpicker('val', data.publisher.publisherID);
                $('#dateOfPublication').val(data.dateOfPublication);
                $('#pubCountryForEditMaterial').selectpicker('val', data.publication_country.pubCountryID);

                $('#seriesYear').val(moment(data.seriesYear).format('YYYY'));

                $('#description').val(data.description);
            }
        }
    })
    .fail(() => console.error('There was an error in getting material details'));
}

// Vadlidate edit material form
$('#editMaterialForm').validate(validateOptions({
    rules: {
        title: {
            required: true,
        },
        authors: {
            required: true,
        },
        typeID: {
            required: true,
        },
        genres: {
            required: true,
        },
        languageID: {
            required: true,
        },
        format: {
            required: true,
        },
        standardNumber: {
            required: true,
        },
        standardType: {
            required: true,
        },
        edition: {
            required: true,
        },
        editionYear: {
            required: true,
        },
        volumeNo: {
            required: true,
        },
        pageNo: {
            required: true,
        },
        publisherID: {
            required: true,
        },
        dateOfPublication: {
            required: true,
        },
        pubCountryID: {
            required: true
        },
        seriesYear: {
            required: true,
        },
        description: {
            required: true,
        },
        building: {
            required: true,
        },
        room: {
            required: true,
        },
        shelf: {
            required: true,
        }
    },
    messages: {
        title: {
            required: 'Title is required',
        },
        authors: {
            required: 'Please select atleast one author',
        },
        typeID: {
            required: 'Please select the type of material',
        },
        genres: {
            required: 'Please select atleast one genre',
        },
        languageID: {
            required: 'Please select a language',
        },
        format: {
            required: 'Material format is required',
        },
        standardNumber: {
            required: 'Standard number is required',
        },
        standardType: {
            required: 'Please select the standard type',
        },
        edition: {
            required: 'Edition is required',
        },
        editionYear: {
            required: 'Edition year is required',
        },
        volumeNo: {
            required: 'Volume number is required',
        },
        pageNo: {
            required: 'Page number is required',
        },
        publisherID: {
            required: 'Please select a publisher',
        },
        dateOfPublication: {
            required: 'Please select the date of publication',
        },
        pubCountryID: {
            required: 'Please select the publication country'
        },
        seriesYear: {
            required: 'Series year is required',
        },
        description: {
            required: 'Description is required',
        },
        building: {
            required: 'Please select a building where the material is located',
        },
        room: {
            required: 'Please select the room where the material is located',
        },
        shelf: {
            required: 'Please select the shelf where the material is located',
        }
    },
    submitHandler: () => edit_materialAJAX()
}));

// Edit Material AJAX
edit_materialAJAX = () => {
    const rawData = new FormData($('#editMaterialForm')[0]);

    data = {
        title:            rawData.get('title'),
        authors:          $('#authorsForEditMaterial').val(),
        typeID:           rawData.get('type'),
        genres:           $('#genresForEditMaterial').val(),
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
}

/**
 * ===============================================================================
 * GET MATERIAl DETAILS
 * ===============================================================================
 */

// Get details when material details is loaded
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

                // Check if file is existing
                $.ajax({
                    url: `${ BASE_URL_API }materials/${ data.image }`,
                    type: 'HEAD',
                    success: () => {
                        // Render image if exist
                        $('#materialImgContainer').html(`
                            <img 
                                class="w-100 border rounded-lg" 
                                id="image"
                                src="${ BASE_URL_API }materials/${ data.image }"
                                draggable="false"
                            ></img>
                        `);
                    },
                    error: () => {
                        // Render blank image if not
                        $('#materialImgContainer').html(`
                            <div class="bg-muted flex-center text-secondary rounded-lg" style="width: 18rem; height: 25rem">
                                <span>No image</span>
                            </div>
                        `);
                    }
                })

                // Get title
                $('#title').html(data.title);
                
                // Get genres
                genres = data.genres;
                var genresBlade = '';
                var detailedGenresBlade = '';
                genres.forEach((g, i) => {
                    genresBlade += g.genre;
                    if(i !== genres.length-1) genresBlade += ', ';
                    detailedGenresBlade += `<div>${ g.genre }</div>`
                });
                $('#genres').html(genresBlade);
                $('#detailedGenres').html(detailedGenresBlade);

                // Get authors
                authors = data.authors;
                var authorsBlade = '';
                var detailedAuthorsBlade = '';
                authors.forEach((a, i) => {
                    authorsFullName = a.authorFirstName + ' ' + a.authorLastName;
                    authorsBlade += authorsFullName;
                    if(i !== authors.length-1) authorsBlade += ', ';
                    detailedAuthorsBlade += `<div>${ authorsFullName }</div>`
                });
                $('#authors').html(authorsBlade);
                $('#detailedAuthors').html(detailedAuthorsBlade);

                // Get Description
                $('#descriptionDetails').html(data.description);

                // Get Material Details
                $('#standardNumber').html(data.standardType + ' ' + data.standardNumber);
                $('#format').html(data.format);
                $('#language').html(data.language.language);
                $('#volume').html(data.volumeNo);
                $('#numOfPages').html(data.pageNo);
                $('#pubName').html(data.publisher.publisherName);
                $('#pubDate').html(moment(data.dateOfPublication).format('MMMM d, YYYY'));
                $('#pubCountry').html(data.publication_country.country);

                const edition = data.edition;
                if(edition) $('#edition').html(edition);

                const editionYear = data.editionYear;
                if(editionYear) $('#editionYear').html(moment(editionYear).format("YYYY"));

                const seriesYear = data.seriesYear;
                if(seriesYear) $('#seriesYear').html(moment(seriesYear).format("YYYY"));
                
                // Get Material Location
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



/**
 * ===============================================================================
 * MATERIALS COUNT
 * ===============================================================================
 */

// Materials count AJAX
materials_countAJAX = () => {
    if($('#materialsCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/materials/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => $('#materialsCount').html(result.count)
        })
        .fail(() => console.error('There was an error in getting room count'));
    }
}
