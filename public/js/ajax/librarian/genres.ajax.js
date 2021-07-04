/**
 * ===============================================================================
 * * GENRES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material genres
 * ===============================================================================
 */

$(() => {
    genres_countAJAX();
})


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