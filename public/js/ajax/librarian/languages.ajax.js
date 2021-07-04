/**
 * ===============================================================================
 * * LANGUAGES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing languages
 * ===============================================================================
 */

$(() => {
    languages_countAJAX();
});


/**
 * ===============================================================================
 * LANGUAGES COUNT
 * ===============================================================================
 */

// Rooms count AJAX
languages_countAJAX = () => {
    if($('#languagesCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/languages/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const languagesCount = result.count;
                    $('#languagesTotalCount').html(languagesCount.total);
                    $('#languagesActiveCount').html(languagesCount.active);
                    $('#languagesInactiveCount').html(languagesCount.inactive);
                } else {
                    console.log('No result was found');
                }
            }
        })
        .fail(() => showAlert('danger', 'Error:' ,'There was an error in getting languages count'));
    }
}