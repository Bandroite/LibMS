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
        $.ajax({
            url: `${ BASE_URL_API }borrower/favorites`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                const data = result.data;

                console.log(data);

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
            }
        })
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

                $('#userFavBtnContainer').html(`
                    <button type="button" class="btn btn-lg border-danger text-danger" onclick="removeAsFavorite()">
                        <span>Added</span>
                        <i class="fas fa-heart ml-1"></i>
                    </button>
                `)
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
            if(('#allMaterials').length) {
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
                $('#favoritesCountContainer').html(countBlade)
            }
        }
    })
    .fail(() => console.error('There was an error in getting the favorites count'))
} 