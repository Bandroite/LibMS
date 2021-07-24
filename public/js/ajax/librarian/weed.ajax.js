/**
 * ===============================================================================
 * * WEED AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing material weed
 * ===============================================================================
 */

$(() => {
    loadWeededCopiesDT();
    weedings_countAJAX();
})

/**
 * ===============================================================================
 * GET ALL WEED AJAX
 * ===============================================================================
 */

// Load genres DataTable
loadWeededCopiesDT = () => {
    const dt = $('#weededCopiesDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/weedings`,
                headers: AJAX_HEADERS,
                // success: (result) => {
                //     console.log(result.data);
                // }
            },
            columns: [
                {
                    data: 'copy.copyNumber'
                },
                {
                    data: 'copy.material.title'
                },
                {
                    data: null,
                    render: data => {
                        return `
                            <span class="d-inline-block text-truncate" style="max-width: 15rem;">${ data.description }</span>
                        `
                    }
                },
                {
                    data: null,
                    render: (data) => {
                        return `
                            <div>
                                ${moment(data.createdAt).format('MMMM D, YYYY')}
                            </div>
                        
                        `
                    }
                },
            ],
            columnDefs: [{
                targets: [2],
                orderable: false,
            }]
        })
    }
}

// Weedings count
weedings_countAJAX = () => {
    if($('#numberOfWeededCopies, #weedingsCount').length){
        $.ajax({
            url: `${ BASE_URL_API }librarian/weedings/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    $('#numberOfWeededCopies').html(result.data)
                    $('#weedingsCount').html(result.data);
                } else {
                    console.log('No result was found');
                }
            }
        })

    }

}