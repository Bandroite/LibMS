/**
 * ===============================================================================
 * * ACCOUNT AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing authors
 * ===============================================================================
 */

/**
 * ===============================================================================
 * GET BORROWER INFORMATION AJAX
 * ===============================================================================
 */

$(() => {
    get_borrower_infoAJAX();
})

get_borrower_infoAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/info`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                
                console.log(data);

                $('#borrowerFirstName').html(data.firstName);
            }
            else{
                console.log('No result');
            }
        } 
    })
}
