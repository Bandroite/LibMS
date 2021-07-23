/**
 * ===============================================================================
 * * MATERIALS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing materials
 * ===============================================================================
 */

$(() => {
    view_all_available_materialsAJAX();
    get_one_available_materialAJAX();
    available_materials_countAJAX();
    latest_available_materialsAJAX();
});


/**
 * ===============================================================================
 * GET ALL AVAILABLE MATERIALS AJAX
 * ===============================================================================
 */

// View all available materials
view_all_available_materialsAJAX = () => {
    const allMaterials = $('#allMaterials');

    if(allMaterials.length) {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');
        if(urlParams.has('page') && page > 0) {
            $.ajax({
                url: `${ BASE_URL_API }borrower/materials/pages/${page}`,
                type: 'GET',
                headers: AJAX_HEADERS,
                success: result => {
                    const data = result.data;
    
                    if(data.length) {
                        var materialCards = '';
                        data.forEach(m => {
                            const authors = m.authors;
    
                            var authorBlade = '';
                            authors.forEach((a, i) => {
                                authorBlade += setFullName('F L', {
                                    firstName: a.authorFirstName,
                                    lastName: a.authorLastName,
                                });
                                if(i < authors.length-1) authorBlade += ', ';
                            });
    
                            const favoriteByBorrowers = m.favorite_by_borrowers;
                            favBlade = `
                                <div id="FAV-${m.materialID}">
                                    <button 
                                        class="btn btn-sm" data-toggle="tooltip" 
                                        title="Add to favorites" 
                                        onclick="addToFavorites('${ m.materialID }')"
                                    >
                                        <i class="far fa-heart text-danger"></i>
                                    </button>
                                </div>
                            `;
                            favoriteByBorrowers.forEach(f => {
                                if(f.userID == localStorage.getItem('userID')) {
                                    favBlade = `
                                        <div id="FAV-${ m.materialID }">
                                            <button 
                                                class="btn btn-sm" data-toggle="tooltip" 
                                                title="Remove as favorite" 
                                                onclick="removeAsFavorite('${ m.materialID }')"
                                            >
                                                <i class="fas fa-heart text-danger"></i>
                                            </button>
                                        </div>
                                    `;
                                }
                            })
    
                            materialDetailsLink = `${ BASE_URL_WEB }materials/${ m.materialID }`;
                            
                            imageLink = `${ BASE_URL_API }materials/${ m.image }`;

                            const appendMaterialCardWithImage = () => {
                                materialCards += `
                                    <div class="col-md-6 col-lg-3 mb-3 flex-center">
                                        <div class="material-card w-100">
                                            <div class="material-img-container">
                                                <img 
                                                    class="border"
                                                    src="${ imageLink }" 
                                                    alt="Book 3"
                                                >
                                            </div>
                                            <div class="material-details-container">
                                                <a href="${ materialDetailsLink }" class="material-title">${ m.title }</a>
                                                <div class="material-details">
                                                    <strong class="mr-1">Author:</strong>
                                                    <span class="d-inline-block text-truncate" style="max-width: 10rem">
                                                        <span>${ authorBlade }</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="material-card-footer flex-h-separated">
                                                ${ favBlade }
                                                <a href="${ materialDetailsLink }" class="btn btn-sm btn-primary">View More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                `
                            }

                            const appendMaterialCardWithoutImage = () => {
                                materialCards += `
                                    <div class="col-md-6 col-lg-3 mb-3 flex-center">
                                        <div class="material-card w-100">
                                            <div class="material-img-container">
                                                <div class="w-100 h-100 rounded flex-center p-3 border">
                                                    <div class="text-center">
                                                        <div>${ m.title }</div>
                                                        <div class="small text-secondary">No image</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="material-details-container">
                                                <a href="${ materialDetailsLink }" class="material-title">${ m.title }</a>
                                                <div class="material-details">
                                                    <strong class="mr-1">Author:</strong>
                                                    <span class="d-inline-block text-truncate" style="max-width: 10rem">
                                                        <span>${ authorBlade }</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="material-card-footer flex-h-separated">
                                                ${ favBlade }
                                                <a href="${ materialDetailsLink }" class="btn btn-sm btn-primary">View More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                `
                            }

                            // Check if has image
                            $.ajax({
                                async: false,
                                url: imageLink,
                                type: 'HEAD',
                                success: () => appendMaterialCardWithImage(),
                                error: () => appendMaterialCardWithoutImage() 
                            })
                        });
                        allMaterials.html(materialCards);
                    } else {
                        allMaterials.html(`
                            <div class="container flex-center">
                                <div class="py-5">No materials yet</div>
                            </div>
                        `);
                    }
                }
            });
        } else {
            location.assign(`${ BASE_URL_WEB }page-not-found`)
        }
    }
}


/**
 * ===============================================================================
 * GET ONE AVAILABLE MATERIAL AJAX
 * ===============================================================================
 */

// Get one available materials
get_one_available_materialAJAX = () => {
    if($('#materialDetails').length) {
        const params = window.location.pathname.split('/');
        const materialID = params[params.length-1];

        $.ajax({
            url: `${ BASE_URL_API }borrower/materials/${materialID}`,
            headers: AJAX_HEADERS,
            type: 'GET',
            success: result => {
                if(result) {
                    const data = result.data;
                    console.log(data);

                    // Set material ID for favorites
                    $('#materialIDForFavorites').val(data.materialID);

                    // Set material image
                    $('#materialImage').attr('src', `${ BASE_URL_API }materials/${ data.image }`);

                    // Material Title
                    $('#materialTitle').html(data.title);

                    // Material Genres
                    const genres = data.genres;
                    var genresBlade = '';
                    var genresDetailedBlade = '';
                    genres.forEach((g, i) => {
                        genresBlade += g.genre;
                        genresDetailedBlade += `<div>${ g.genre }</div>`
                        if(i < genres.length-1) genresBlade += ', ';
                    });
                    $('#materialGenres').html(genresBlade);

                    // Material Titles
                    const authors = data.authors;
                    var authorsBlade = '';
                    var authorsDetailedBlade = '';
                    authors.forEach((a, i) => {
                        const authorFullName = setFullName('F Mi L', {
                            firstName: a.authorFirstName,
                            middleName: a.authorMiddleName,
                            lastName: a.authorLastName
                        });
                        authorsBlade += authorFullName;
                        authorsDetailedBlade += `<div>${authorFullName}</div>`;
                        if(i < authors.length-1) authorsBlade += ', ';
                    });
                    $('#materialAuthors').html(authorsBlade);

                    // Other Material Details
                    $('#descriptionDetails').html(data.description);
                    $('#detailedAuthors').html(authorsDetailedBlade);
                    $('#standardNumber').html(data.standardType + ' ' + data.standardNumber)
                    $('#format').html(data.format);
                    $('#detailedGenres').html(genresDetailedBlade);
                    $('#language').html(data.language.language);
                    $('#volume').html(data.volumeNo);
                    $('#numOfPages').html(data.pageNo);
                    $('#pubName').html(data.publisher.publisherName);
                    $('#pubDate').html(moment(data.dateOfPublication).format('dddd, MMMM D, YYYY'));
                    $('#pubCountry').html(data.publication_country.country);
                    $('#edition').html(data.edition);
                    $('#editionYear').html(moment(data.editionYear).format('YYYY'));
                    $('#seriesYear').html(moment(data.seriesYear).format('YYYY'));
                    
                    // Location
                    $('#shelf').html(data.shelf.shelfName);
                    $('#room').html(data.shelf.room.roomName);
                    $('#building').html(data.shelf.room.building.buildingName);

                    // For favorite button
                    const favoriteByBorrowers = data.favorite_by_borrowers;
                    $('#userFavBtnContainer').html(`
                        <button type="button" class="btn btn-lg border-danger text-danger" onclick="addToFavorites('${ materialID }')">
                            <span>Add to favorites</span>
                            <i class="far fa-heart ml-1"></i>
                        </button>
                    `)
                    favoriteByBorrowers.forEach(f => {
                        if(f.userID === localStorage.getItem('userID')) {
                            $('#userFavBtnContainer').html(`
                                <button type="button" class="btn btn-lg border-danger text-danger" onclick="removeAsFavorite('${ data.materialID }')">
                                    <span>Added</span>
                                    <i class="fas fa-heart ml-1"></i>
                                </button>
                            `);
                        }
                    })
                }
            }
        })
        .fail(() => location.assign(`${ BASE_URL_WEB }page-not-found`));
    }
}


/**
 * ===============================================================================
 * AVAILABLE MATERIALS COUNT AJAX
 * ===============================================================================
 */

// Available Materials Count
available_materials_countAJAX = () => {
    if($('#allMaterials').length) {
        $.ajax({
            url: `${ BASE_URL_API }home/materials/count`,
            type: 'GET',
            success: result => {
                const count = result.data;
                if('#allMaterials') {

                    // For pagination
                    if('#allMaterials') {
                        const urlParams = new URLSearchParams(window.location.search);
                        const currentPage = parseInt(urlParams.get('page'));
                        const baseURL = `${ BASE_URL_WEB }browse/?page=`;
                        createPagination($('#allMaterialsPagination'), {
                            currentPage: currentPage,
                            totalRows: count,
                            baseURL: baseURL
                        });
                    }

                    // For materials page
                    const noOfAvailableMaterials = $('#noOfAvailableMaterials');
                    if(noOfAvailableMaterials.length) {
                        var noOfAvailableMaterialsBlade;
                        if(count == 0) {
                            noOfAvailableMaterialsBlade = `No available materials yet.`;
                        } else {
                            withOrWithoutS = count > 1 ? 's' : '';
                            noOfAvailableMaterialsBlade = `Overall, we have ${count} available material` + withOrWithoutS + `.`;
                        }
                        noOfAvailableMaterials.html(noOfAvailableMaterialsBlade);
                    }
                }
            }
        })
        .fail(() => console.log('There was a problem in getting available materials count'));
    }
}


/**
 * ===============================================================================
 * LATEST AVAILABLE MATERIALS AJAX
 * ===============================================================================
 */

// Latest available materials
latest_available_materialsAJAX = () => {
    const latestMaterials = $('#latestMaterials');
    if(latestMaterials.length) {
        $.ajax({
            url: `${ BASE_URL_API }borrower/materials/latest`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const data = result.data;

                    if(data.length) {
                        var materialCards = '';
                        data.forEach(m => {
                            const authors = m.authors;
    
                            var authorBlade = '';
                            authors.forEach((a, i) => {
                                authorBlade += setFullName('F L', {
                                    firstName: a.authorFirstName,
                                    lastName: a.authorLastName,
                                });
                                if(i < authors.length-1) authorBlade += ', ';
                            });
    
                            const favoriteByBorrowers = m.favorite_by_borrowers;
                            favBlade = `
                                <div id="FAV-${m.materialID}">
                                    <button 
                                        class="btn btn-sm" data-toggle="tooltip" 
                                        title="Add to favorites" 
                                        onclick="addToFavorites('${ m.materialID }')"
                                    >
                                        <i class="far fa-heart text-danger"></i>
                                    </button>
                                </div>
                            `;
                            favoriteByBorrowers.forEach(f => {
                                if(f.userID == localStorage.getItem('userID'));
                                favBlade = `
                                    <div id="FAV-${ m.materialID }">
                                        <button 
                                            class="btn btn-sm" data-toggle="tooltip" 
                                            title="Remove as favorite" 
                                            onclick="removeAsFavorite('${ m.materialID }')"
                                        >
                                            <i class="fas fa-heart text-danger"></i>
                                        </button>
                                    </div>
                                `;
                            })
    
                            materialDetailsLink = `${ BASE_URL_WEB }materials/${ m.materialID }`;
                            
                            imageLink = `${ BASE_URL_API }materials/${ m.image }`;

                            const appendMaterialCardWithImage = () => {
                                materialCards += `
                                    <div class="col-md-6 col-lg-3 mb-3 flex-center">
                                        <div class="material-card w-100">
                                            <div class="material-img-container">
                                                <img 
                                                    class="border"
                                                    src="${ imageLink }" 
                                                    alt="Book 3"
                                                >
                                            </div>
                                            <div class="material-details-container">
                                                <a href="${ materialDetailsLink }" class="material-title">${ m.title }</a>
                                                <div class="material-details">
                                                    <strong class="mr-1">Author:</strong>
                                                    <span class="d-inline-block text-truncate" style="max-width: 10rem">
                                                        <span>${ authorBlade }</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="material-card-footer flex-h-separated">
                                                ${ favBlade }
                                                <a href="${ materialDetailsLink }" class="btn btn-sm btn-primary">View More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                `
                            }

                            const appendMaterialCardWithoutImage = () => {
                                materialCards += `
                                    <div class="col-md-6 col-lg-3 mb-3 flex-center">
                                        <div class="material-card w-100">
                                            <div class="material-img-container">
                                                <div class="w-100 h-100 rounded flex-center p-3 border">
                                                    <div class="text-center">
                                                        <div>${ m.title }</div>
                                                        <div class="small text-secondary">No image</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="material-details-container">
                                                <a href="${ materialDetailsLink }" class="material-title">${ m.title }</a>
                                                <div class="material-details">
                                                    <strong class="mr-1">Author:</strong>
                                                    <span class="d-inline-block text-truncate" style="max-width: 10rem">
                                                        <span>${ authorBlade }</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="material-card-footer flex-h-separated">
                                                ${ favBlade }
                                                <a href="${ materialDetailsLink }" class="btn btn-sm btn-primary">View More Details</a>
                                            </div>
                                        </div>
                                    </div>
                                `
                            }

                            // Check if has image
                            $.ajax({
                                async: false,
                                url: imageLink,
                                type: 'HEAD',
                                success: () => appendMaterialCardWithImage(),
                                error: () => appendMaterialCardWithoutImage() 
                            })
                        });
                        latestMaterials.html(materialCards);
                    } else {
                        latestMaterials.html(`
                            <div class="container flex-center">
                                <div class="py-5">No materials yet</div>
                            </div>
                        `);
                    }
                }
            }
        })
    }
}
