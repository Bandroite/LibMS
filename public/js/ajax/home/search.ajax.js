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

    data = {
        searchBy: urlParams.get('searchBy'),
        query: urlParams.get('query')
    }

    $.ajax({
        url: `${ BASE_URL_API }home/search`,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: result => {
            if(result) {
                const data = result.data;
                console.log(data);
            }
        }
    })
    .fail(() => console.error('There was an error in searching'));
}