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
})

/**
 * ===============================================================================
 * GET ALL AUTHORS AJAX
 * ===============================================================================
 */

// View all available materials
view_all_available_materialsAJAX = () => {
    const allMaterials = $('#allMaterials');

    if(allMaterials.length) {
        $.ajax({
            url: `${ BASE_URL_API }home/materials`,
            type: 'GET',
            success: result => {
                const data = result.data;

                console.log(data);

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

                        materialDetailsLink = `${ BASE_URL_WEB }materials/${ m.materialID }`;

                        materialCards += `
                            <div class="col-md-6 col-lg-3 mb-3 flex-center">
                                <div class="material-card w-100">
                                    <div class="material-img-container">
                                        <img 
                                            class="border"
                                            src="${ BASE_URL_API }materials/${ m.image }" 
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
                                    <div class="material-card-footer text-right">
                                        <a href="${ materialDetailsLink }" class="btn btn-sm btn-primary">View More Details</a>
                                    </div>
                                </div>
                            </div>
                        `
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
        })
    }
}

// Get one available materials
get_one_available_materialAJAX = () => {
    if($('#materialDetails').length){
        const params = window.location.pathname.split('/');
        const materialID = params[params.length-1];
        
        $.ajax({
            url: `${ BASE_URL_API }home/materials/${materialID}`,
            type: 'GET',
            success: result => {
                if(result) {
                    const data = result.data;
                    console.log(data);

                    $('#materialIDForFavorites').val(data.materialID);

                    $('#materialImage').attr('src', `${ BASE_URL_API }materials/${ data.image }`);

                    $('#materialTitle').html(data.title);

                    const genres = data.genres;
                    var genresBlade = '';
                    var genresDetailedBlade = '';
                    genres.forEach((g, i) => {
                        genresBlade += g.genre;
                        genresDetailedBlade += `<div>${ g.genre }</div>`
                        if(i < genres.length-1) genresBlade += ', ';
                    });
                    $('#materialGenres').html(genresBlade);

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
                }
            }
        })
    }
}