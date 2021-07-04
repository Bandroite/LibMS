/**
 * ===============================================================================
 * * MAIN JAVASCRIPT FILE
 * -------------------------------------------------------------------------------
 * This is the main javascript file for this web app
 * ===============================================================================
 */


$(() => {

    // Remove the preloader whe page has been loaded
    $('body').removeClass('modal-open');
    $('#preloader').removeClass('d-flex').addClass('d-none');
    
    bsCustomFileInput.init();
});


// Margin Top Navbar to adjust element after it
$("#navbarTop").next().css("margin-top", $("#navbarTop").outerHeight());


// Toggle all tooltips
$('[data-toggle="tooltip"]').tooltip();


// Toggle the side navigation
$('#sidebarToggle').on('click', (e) => {
    e.preventDefault();
    $('.sb-nav-fixed').toggleClass('sb-sidenav-toggled');
});

// Prevent images to right click
$('img').bind('contextmenu', (e) => {
    return false;
});