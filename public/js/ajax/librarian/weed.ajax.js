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
                    data: 'description'
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

weedings_countAJAX = () => {
    if($('#numberOfWeededCopies').length){
        $.ajax({
            url: `${ BASE_URL_API }librarian/weedings/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    $('#numberOfWeededCopies').html(result.data)

                } else {
                    console.log('No result was found');
                }
            }
        })

    }

}