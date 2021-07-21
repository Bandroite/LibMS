/**
 * ===============================================================================
 * * FAVORITES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing favorite materials
 * ===============================================================================
 */


$(() => {
    view_all_favoritesAJAX();
    favorites_countAJAX();
})


/**
 * ===============================================================================
 * VIEW ALL FAVORITES
 * ===============================================================================
 */

// View all favorites AJAX
view_all_favoritesAJAX = () => {
    if($('#favoriteMaterials').length) {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');
        if(urlParams.has('page') && page > 0) {
            $.ajax({
                url: `${ BASE_URL_API }borrower/favorites/pages/${ page }`,
                type: 'GET',
                headers: AJAX_HEADERS,
                success: result => {
                    const data = result.data;

                    if(data.length) {
                        var favMaterialCards = '';
                        data.forEach(f => {
                            const favoriteMaterial = f.favorite_material;
                            const materialLink = `${ BASE_URL_WEB }materials/${ favoriteMaterial.materialID }`;
    
                            const authors = favoriteMaterial.authors;
                            var authorsBlade = '';
                            authors.forEach((a, i) => {
                                authorsBlade += setFullName('F L', {
                                    firstName: a.authorFirstName,
                                    lastName: a.authorLastName,
                                });
                                if(i < authors.length-1) authorsBlade += ', ';
                            })
    
                            favMaterialCards += `
                                <div class="col-md-6 col-lg-3 mb-3 flex-center">
                                    <div class="material-card w-100">
                                        <div class="material-img-container">
                                            <img 
                                                class="border"
                                                src="${ BASE_URL_API }materials/${ favoriteMaterial.image }" 
                                                alt="${ favoriteMaterial.title }"
                                            >
                                        </div>
                                        <div class="material-details-container">
                                            <a href="${ materialLink }" class="material-title">${ favoriteMaterial.title }</a>
                                            <div class="material-details">
                                                <strong class="mr-1">Author:</strong>
                                                <span class="d-inline-block text-truncate" style="max-width: 10rem">
                                                    <span>${ authorsBlade }</span>
                                                </span>
                                            </div>
                                            <div class="small mt-1 text-secondary">Added ${ moment(f.addedAt).fromNow() }</div>
                                        </div>
                                        <div class="material-card-footer flex-h-separated">
                                            <button class="btn btn-sm" data-toggle="tooltip" title="Remove as favorite" onclick="removeAsFavorite('${ f.materialID }')">
                                                <i class="fas fa-heart text-danger"></i>
                                            </button>
                                            <a href ="${ materialLink }" class="btn btn-sm btn-primary">View More Details</a>
                                        </div>
                                    </div>
                                </div>
                            `
                        });

                        $('#favoriteMaterials').html(favMaterialCards);
                    } else {
                        $('#favoriteMaterials').html(`
                            <div class="col-12">
                                <div class="py-5 my-5 flex-center">You don't have favorite materials yet</div>
                            </div>
                        `)
                    }
                }
            })
        } else {
            location.assign(`${ BASE_URL_WEB }page-not-found`)
        }
    }
}

/**
 * ===============================================================================
 * ADD TO FAVORITES
 * ===============================================================================
 */

// Add to favorites
addToFavorites = (materialID) => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/favorites`,
        headers: AJAX_HEADERS,
        type: 'POST',
        data: { materialID: materialID },
        dataType: 'json',
        success: result => {
            if(result) {

                // If material added as favorite in all materials list
                if(('#allMaterials').length) {
                    $(`#FAV-${ materialID }`).html(`
                        <button 
                            class="btn btn-sm" data-toggle="tooltip" 
                            title="Remove as favorite" 
                            onclick="removeAsFavorite('${ materialID }')"
                        >
                            <i class="fas fa-heart text-danger"></i>
                        </button>
                    `)
                }

                // If material added as favorite in material details list
                if($('#materialDetails').length) {
                    $('#userFavBtnContainer').html(`
                        <button type="button" class="btn btn-lg border-danger text-danger" onclick="removeAsFavorite('${ materialID }')">
                            <span>Added</span>
                            <i class="fas fa-heart ml-1"></i>
                        </button>
                    `);
                }
            }
            $('#notifContainer').show();
            favorites_countAJAX();
        }
    })
    .fail(() => console.error('There was an error in adding a material as favorite'));
}

/**
 * ===============================================================================
 * REMOVE FAVORITE
 * ===============================================================================
 */

// Remove as favorite
removeAsFavorite = (materialID) => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/favorites`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        data: { materialID: materialID },
        dataType: 'json',
        success: result => {
            if(result) { view_all_favoritesAJAX() }
            
            // If material removed as favorite in all materials list
            if($('#allMaterials').length) {
                $(`#FAV-${ materialID }`).html(`
                    <button 
                        class="btn btn-sm" data-toggle="tooltip" 
                        title="Add to favorites" 
                        onclick="addToFavorites('${ materialID }')"
                    >
                        <i class="far fa-heart text-danger"></i>
                    </button>
                `);
            }

            // If material removed as favorite in material details list
            if($('#materialDetails').length) {
                $('#userFavBtnContainer').html(`
                    <button type="button" class="btn btn-lg border-danger text-danger" onclick="addToFavorites('${ materialID }')">
                        <span>Add to favorites</span>
                        <i class="far fa-heart ml-1"></i>
                    </button>
                `);
            }
            
            $('#notifContainer').show();
            favorites_countAJAX();
        }
    });
}

/**
 * ===============================================================================
 * FAVORITES COUNT
 * ===============================================================================
 */

// Favorites count AJAX
favorites_countAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/favorites/count`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const count = result.data;
                countBlade = count > 0 ? `<div class="badge badge-primary p-1">${count}</div>` : '';
                $('#favoritesCountContainer').html(countBlade);

                const urlParams = new URLSearchParams(window.location.search);
                const currentPage = parseInt(urlParams.get('page'));

                const baseURL = `${ BASE_URL_WEB }me/favorites/?page=`;
                
                if($('#favoriteMaterials').length) {
                    createPagination($('#favoritesPagination'), {
                        currentPage: currentPage,
                        totalRows: count,
                        baseURL: baseURL
                    });
                }
            }
        }
    })
    .fail(() => console.error('There was an error in getting the favorites count'))
} 