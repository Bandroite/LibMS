/**
 * ===============================================================================
 * * LOGIN AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for user login
 * ===============================================================================
 */

/**
 * ===============================================================================
 * LOGIN
 * ===============================================================================
 */

// Login AJAX
loginAJAX = () => {
    rawData = new FormData($('#loginForm')[0]);
    
    data = {
        email: rawData.get('email'),
        password: rawData.get('password')
    }

    $.ajax({
        url: `${ BASE_URL_API }home/login`,
        type: 'POST',
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result){
                if(result.error){
                    console.log(result.message);
                    const errorLoginAlert = `
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <div>${result.message}</div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        `
                    $('#errorLoginContainer').html(errorLoginAlert)
                }
                else{

                    // Get User Data
                    const userData = result.data;
                    
                    // Get Token from result
                    const token = result.token;

                    // Set parameter values
                    const userID    = userData.userID;
                    const userType  = userData.userType;

                    // Store userData and token to localStorage
                    localStorage.setItem('userID', userID);
                    localStorage.setItem('userType', userType);
                    localStorage.setItem('token', token);

                    // Set the url with parameters
                    const oAuthParams = `?userID=${ userID }&userType=${ userType }`;

                    // Redirect to oAuth for authorization
                    location.replace(`${ BASE_URL_WEB }oAuth${ oAuthParams }`);
                }
            }
            else{
                console.log('No result');
            }
        }
    })
    .fail(() => {
        console.log('Error occured');
    });
}

// Login Form
$('#loginForm').validate(validateOptions({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Email is required',
            email: 'This field must have a valid email value'
        },
        password: {
            required: 'Password is required'
        }
    },
    submitHandler: () => loginAJAX()
}));