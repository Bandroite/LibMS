/**
 * ===============================================================================
 * * CONSTANTS FILE
 * -------------------------------------------------------------------------------
 * This file contains the constants used for this web app
 * 
 * @author BanDroite
 * ===============================================================================
 */


/**
 * ===============================================================================
 * * CONSTANT VARIABLES
 * ===============================================================================
 */

// Base URLs
const BASE_URL_WEB = 'http://localhost/LibMS/';
const BASE_URL_API = 'http://localhost:3600/api/v1/';


// AJAX Headers
const AJAX_HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${ localStorage.getItem('token') }`
}

/**
 * ===============================================================================
 * * CONSTANT OBJECTS
 * ===============================================================================
 */

/**
 * Options for jquery validation plugin
 * 
 * @params { rules, messages, submitHandler}
 */
const validateOptions = (validateOptions) => {
    return {
        debug: false, // set this to true to prevent submitting form
        rules: validateOptions.rules,
        messages: validateOptions.messages,
        errorElement: "div",
        errorPlacement: (err, el) => {
            err.addClass("invalid-feedback");
            el.closest(".form-group").append(err);
        },
        highlight:   (el) => $(el).addClass('is-invalid').removeClass('is-valid'),
        unhighlight: (el) => $(el).addClass('is-valid').removeClass('is-invalid'),
        submitHandler: validateOptions.submitHandler
    }
}

// Show alert box
const showAlert = (theme,alertTitle,message) => {
    $('#alertContainer').html(`
        <div class="alert alert-${theme} alert-dismissible fade show mb-4" role="alert" id="alert">
            <div><strong>${alertTitle}</strong> ${message}</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `)

    setTimeout(() => $('#alert').alert('close'), 3000);

}

// Set Form Values
const setFormValues = (formElement = '', formFieldNamesAndValues = []) => {

    // Get the form
    const form = $(formElement);
    
    // Check if form exists
    if(form.length) {

        // Set the values for each fields by name
        formFieldNamesAndValues.forEach(el => {
                        
            // Get the name value for name attribute
            const name = `[name="${ el.name }"]`;
    
            // Get the value for input fields
            const value  = el.value;
            
            // If element is an input[type="radio"]
            if($(`input[type="radio"]${ name }`).length) {
                $(`input[type="radio"]${ name }[value="${value}"]`).prop('checked',true);
            }
            else

            // If element is an input
            if($(`input${ name }`).length) {
                $(`input${ name }`).val(value);
            }
    
            // If element is an textarea
            if($(`textarea${ name }`).length) {
                $(`textarea${ name }`).html(value)
            }
        });
    }
}
















