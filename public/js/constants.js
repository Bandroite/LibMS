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
        highlight:   (el) => {
            console.log(el);
            if($(el).hasClass('selectpicker')) {
                $(el).selectpicker('setStyle', 'border-success', 'remove');
                $(el).selectpicker('setStyle', 'border-danger', 'add');
            } else {
                $(el).addClass('is-invalid').removeClass('is-valid');
            }
        },
        unhighlight: (el) => {
            if($(el).hasClass('selectpicker')) {
                $(el).selectpicker('setStyle', 'border-danger', 'remove');
                $(el).selectpicker('setStyle', 'border-success', 'add');
            } else {
                $(el).addClass('is-valid').removeClass('is-invalid');
            }
        },
        submitHandler: validateOptions.submitHandler
    }
}

// Show alert box
const showAlert = (theme, alertTitle, message) => {    
    
    // Show the alert
    $('#alertContainer').html(`
        <div class="alert alert-${theme} alert-dismissible fade show mb-4" role="alert" id="alert">
            <div><strong>${alertTitle}</strong> ${message}</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `);

    // Close the alert after 5 seconds
    setTimeout(() => $('#alert').alert('close'), 5000);

    // Scroll to top
    $("html, body").animate({ scrollTop: 0 }, 500);
}

// Hide Alert with Delay (Use for Sessioned Alert)
const hideAlertWithDelay = () => {
    if($('#alert').length) {

        // Close the alert after 5 seconds
        setTimeout(() => $('#alert').alert('close'), 5000);
    
        // Scroll to top
        $("html, body").animate({ scrollTop: 0 }, 500);
    }
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

// Set Full Name
const setFullName = (format, userName = {
    firstName: '',
    middleName: '',
    lastName: ''
}) => {
    
    var firstName  = $.trim(userName.firstName);
    var middleName = $.trim(userName.middleName);
    var lastName   = $.trim(userName.lastName);
    
    // {last name}, {first name} {middle name}
    if(format === 'L, F M') {
        middleName = (middleName == null || middleName === '') ? '' : ' ' + middleName;
        return lastName + ', ' + firstName + middleName;
    } 
    
    // {first name} {middle name} {last name}
    if(format === 'F M L') {
        middleName = (middleName == null || middleName === '') ? ' ' : ' ' + middleName + ' ';
        return firstName + middleName + lastName;
    }

    // {last name}, {first name} {middle initial}
    if(format === 'L, F Mi') {
        middleName = (middleName == null || middleName === '') ? '' : ' ' + middleName.charAt(0) + '.';
        return lastName + ', ' + firstName + middleName;
    }

    // {first name} {middle initial} {last name}
    if(format === 'F Mi L') {
        middleName = (middleName == null || middleName === '') ? ' ' : w.charAt(0) + '. ';
        return firstName + middleName + lastName;
    }

    // {last name}, {first name}
    if(format === 'L, F') { return lastName + ', ' + firstName; }

    // {first name}, {last name}
    if(format === 'F L') { return firstName + ' ' + lastName; }
}