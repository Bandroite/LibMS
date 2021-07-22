/**
 * ===============================================================================
 * * ACCOUNT AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing authors
 * ===============================================================================
 */

/**
 * ===============================================================================
 * GET LIBRARIAN INFORMATION AJAX
 * ===============================================================================
 */

$(() => {
    get_librarian_infoAJAX();
})

get_librarian_infoAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/info`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                
                console.log(data);

                $('#librarianFirstName').html(data.firstName);
                $('#librarianName').html(data.firstName);
            }
            else{
                console.log('No result');
            }
        } 
    })
}

