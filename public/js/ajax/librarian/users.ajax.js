/**
 * ===============================================================================
 * * USER AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for user information
 * ===============================================================================
 */

$(() => {
    find_userAJAX();
    // console.log(localStorage.getItem('token'));
    // console.log(localStorage.getItem('userType'));
});

/**
 * ===============================================================================
 * GET INFORMATION
 * ===============================================================================
 */

find_userAJAX = () => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/users`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message);
                } else {
                    
                    // console.log(result.data);

                    // // Get the name of user
                    // const firstName = data.firstName;
                    // const middleName = (data.middleName == null || data.middleName == '') ? ` ${ data.middleName } ` : ' ';
                    // const lastName = data.lastName
                    
                    // // Get the full name of user
                    // const librarianFullName = firstName + middleName + lastName;
                    
                    // $('#librarianFullName').html(librarianFullName);
                }
            } else {
                console.log('No Result');
            }
        }
    })
}