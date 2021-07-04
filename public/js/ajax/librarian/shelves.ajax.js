/**
 * ===============================================================================
 * * SHELVES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing shelves
 * ===============================================================================
 */


$(() => {
    shelves_countAJAX();
})


/**
 * ===============================================================================
 * SHELVES COUNT
 * ===============================================================================
 */

// Shelves count AJAX
shelves_countAJAX = () => {
    if($('#shelvesCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/shelves/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const shelvesCount = result.count;
                    $('#shelvesTotalCount').html(shelvesCount.total);
                    $('#shelvesActiveCount').html(shelvesCount.active);
                    $('#shelvesInactiveCount').html(shelvesCount.inactive);
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