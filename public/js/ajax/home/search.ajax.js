/**
 * ===============================================================================
 * * SEARCH AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for searching functionality
 * ===============================================================================
 */

/**
 * ===============================================================================
 * SEARCH
 * ===============================================================================
 */

const searchResults = $('#searchResults');

if(searchResults.length) {
    const urlParams = new URLSearchParams(window.location.search);
    var searchBy = urlParams.get('searchBy');
    const query = urlParams.get('query');
    const currentPage = urlParams.get('page');

    if(query == '' || query == null) {
        $('#searchResultTitle').html('Search any material here');
        $('#searchResultSubtitle').html('Select a filter and type matching query in search bar below');
    } else {
        if(searchBy == '' || searchBy == null) searchBy = 'Title';
        
        $('#searchBy').selectpicker('val', searchBy);
        $('#searchQuery').val(query);

        data = {
            searchBy: searchBy,
            query: query
        }
    
        $.ajax({
            url: `${ BASE_URL_API }home/search/${currentPage}`,
            type: 'POST',
            data: data,
            dataType: 'json',
            success: result => {
                if(result) {
                    const data = result.data;
                    const count = data.count;
                    const rows = data.rows;
                    $('#searchResultSubtitle').html(`There are ${ count } result${ count > 1  ? 's' : '' } found.`);
                    
                    createPagination($('#searchResultsPagination'), {
                        currentPage: currentPage,
                        totalRows: count,
                        baseURL: `${ BASE_URL_WEB }search?searchBy=${ searchBy }&query=${ query }&page=`
                    });

                    const searchResults = $('#searchResults');

                    if(rows.length) {
                        var materialCards = '';
                        rows.forEach(m => {
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
                        searchResults.html(materialCards);
                    } else {
                        searchResults.html(`
                            <div class="container flex-center">
                                <div class="py-5">No result was found</div>
                            </div>
                        `);
                    }
                } else {
                    $('#searchResultSubtitle').html('Select a filter and type matching query in search bar below');
                }
                $('#searchResultTitle').html('Your search results');
            }
        })
        .fail(() => console.error('There was an error in searching'));
    }
}