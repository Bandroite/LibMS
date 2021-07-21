/**
 * ===============================================================================
 * * TRANSACTIONS AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing favorite materials
 * ===============================================================================
 */


$(() => {
    view_all_transactionsAJAX();
});


/**
 * ===============================================================================
 * VIEW ALL TRANSACTIONS
 * ===============================================================================
 */

view_all_transactionsAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }borrower/transactions`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: result => {
            if(result) {
                const data = result.data;
                console.log(data);
            }
        }
    })
}