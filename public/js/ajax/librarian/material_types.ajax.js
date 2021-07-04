/**
 * ===============================================================================
 * * MATERIAL TYPES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material types
 * ===============================================================================
 */

$(() => {
    material_types_countAJAX();
})


/**
 * ===============================================================================
 * SHELVES COUNT
 * ===============================================================================
 */

// Shelves count AJAX
material_types_countAJAX = () => {
    if($('#materialTypesCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/material_types/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const materialTypesCount = result.count;
                    $('#materialTypesTotalCount').html(materialTypesCount.total);
                    $('#materialTypesActiveCount').html(materialTypesCount.active);
                    $('#materialTypesInactiveCount').html(materialTypesCount.inactive);
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