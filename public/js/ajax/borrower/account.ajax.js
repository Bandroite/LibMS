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
                
                const borrowerFullName = setFullName('F M L', {
                    firstName: data.firstName,
                    middleName: data.middleName,
                    lastName: data.lastName
                });


                $('#borrowerFirstName').html(data.firstName);

                // For Profile
                if(('borrowerProfile').length) {
                    const userType = data.userType;
                    
                    $('#borrowerFullNameForProfile').html(borrowerFullName);
                    $('#borrowerIDNumberForProfile').html(data.idNumber);
                    $('#borrowerTypeForProfile').html(userType);
                    $('#borrowerEmailForProfile').html(data.email);

                    var sexIcon;
                    if(data.gender === 'Male') {
                        $('#avatar').attr('src', `${ BASE_URL_WEB }public/images/app/avatar_male.png`);
                        sexIcon =`<i class="fas fa-mars text-blue mr-1"></i>`
                    } else if(data.gender === 'Female') {
                        $('#avatar').attr('src', `${ BASE_URL_WEB }public/images/app/avatar_female.png`);
                        sexIcon =`<i class="fas fa-venus text-danger mr-1"></i>`
                    } else {
                        $('#avatar').attr('src', `${ BASE_URL_WEB }public/images/app/avatar_genderless.png`);
                        sexIcon =`<i class="fas fa-genderless text-secondary mr-1"></i>`
                    }

                    if(userType === 'Student') {
                        $('#borrowerDetails').html(`
                            <tr>
                                <th>Full Name</th>
                                <td>${ borrowerFullName }</td>
                            </tr>
                            <tr>
                                <th>Student Number</th>
                                <td>${ data.idNumber }</td>
                            </tr>
                            <tr>
                                <th>Course, Year and Section</th>
                                <td>${ data.course }, ${ data.year } - ${ data.section }</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>
                                    ${ sexIcon }
                                    <span>${ data.gender }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <i class="fas fa-at text-secondary mr-1"></i>
                                    <span>${ data.email }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>
                                    <i class="fas fa-phone text-secondary mr-1"></i>
                                    <span>${ data.contactNumber }</span>
                                </td>
                            </tr>
                        `)
                    } else if(userType === 'Staff') {
                        $('#borrowerDetails').html(`
                            <tr>
                                <th>Full Name</th>
                                <td>${ borrowerFullName }</td>
                            </tr>
                            <tr>
                                <th>Staff Number</th>
                                <td>${ data.idNumber }</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td> 
                                    ${ sexIcon }
                                    <span>${ data.gender }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <i class="fas fa-at text-secondary mr-1"></i>
                                    <span>${ data.email }</span>
                                </td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td>
                                    <i class="fas fa-phone text-secondary mr-1"></i>
                                    <span>${ data.contactNumber }</span>
                                </td>
                            </tr>
                        `);
                    }
                }
            }
            else{
                console.log('No result');
            }
        } 
    })
}
