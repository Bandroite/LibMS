/**
 * ===============================================================================
 * * MAIN JAVASCRIPT FILE
 * -------------------------------------------------------------------------------
 * This is the main javascript file for this web app
 * ===============================================================================
 */


$(() => {

    const livecheck = false;

    if(livecheck) checkServerConnection_AJAX();

    // Remove the preloader whe page has been loaded
    $('body').removeClass('modal-open');
    $('#preloader').removeClass('d-flex').addClass('d-none');
    
    // Initialize bootstrap custom file input
    bsCustomFileInput.init();

    // Always hide alert if exists (for sessioned alert)
    hideAlertWithDelay();

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
$('img').bind('contextmenu', (e) => { return false });

checkServerConnection_AJAX = () => {
    const url = location.pathname;
    const redirectTo500Page = () => {
        if(url !== '/LibMS/server-down') location.assign(`${ BASE_URL_WEB }server-down`);
    }
    setInterval(() => {
        $.ajax({
            url: `${ BASE_URL_API }`,
            type: 'GET',
            timeout: 1000,
            success: result => {
                if(!result.status === 'Connected') {
                    redirectTo500Page()
                } else if(result.status === 'Connected' && url === '/LibMS/server-down') {
                    history.back();
                }
            }
        })
        .fail(() => redirectTo500Page());
    }, 1000);
} 