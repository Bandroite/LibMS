/**
 * ===============================================================================
 * * COPIES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing copies
 * ===============================================================================
 */

$(() => {
    loadMaterialCopiesDT();
})

/**
 * ===============================================================================
 * GET ALL COPIES AJAX
 * ===============================================================================
 */

loadMaterialCopiesDT = () => {
    const dt = $('#copiesDT');
    if(dt.length){
        const URLParams = location.pathname.split('/');
        materialID = URLParams[URLParams.length-1];

        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/materials/${materialID}/copies`,
                type: 'GET',
                headers: AJAX_HEADERS,
                // success: (result) => {
                //     if(result){
                //         const data = result.data;
                //         console.log(data);
                //     }
                //     else{
                //         console.log('No result');
                //     }
                // }
            },
            columns: [

                // Added At (hidden for default sort)
                { data: 'addedAt', visible: false },
                
                // Copy Number
                { data: 'copyNumber' },

                // Status
                {
                    data: null,
                    render: (data) =>{
                        if(data.status == 'Available'){
                            return `
                                <div class="badge alert-success text-success p-2 w-100">Available</div>
                            `
                        }
                        else if(data.status == 'Weeded'){
                            return `
                                <div class="badge alert-secondary text-secondary p-2 w-100">Weeded</div>
                            `
                        }
                        else{
                            return `
                                <div class="badge alert-danger text-danger p-2 w-100">Unavailable</div>
                            `
                        }
                    }
                },
                
                // Added At
                {
                    data: null,
                    render: data => {
                        const addedAt = data.addedAt;
                        return `
                            <div>${moment(addedAt).format('MMMM d, YYYY; hh:mm A')}</div>
                            <div class="small font-italic text-secondary">${moment(addedAt).fromNow()}</div>
                        `
                    }
                },

                // Updated At
                {
                    data: null,
                    render: data => {
                        const updatedAt = data.updatedAt;
                        return `
                            <div>${moment(updatedAt).format('MMMM d, YYYY; hh:mm A')}</div>
                            <div class="small font-italic text-secondary">${moment(updatedAt).fromNow()}</div>
                        `
                    }
                },

                // Actions
                {
                    data: null,
                    class: 'text-center',
                    render: (data) => {
                        if(data.status == 'Unavailable'){
                            return `
                                <div class="text-center font-italic text-muted">No action</div>
                            `
                        }
                        else{
                            return `
                                <div class="dropdown d-inline-block">
                                    <div data-toggle="dropdown">
                                        <div 
                                            class       = "btn btn-sm btn-muted"
                                            data-toggle = "tooltip"
                                            title       = "More"
                                        >
                                            <i class="fas fa-ellipsis-v"></i>
                                        </div>
                                    </div>
    
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div 
                                            class="dropdown-item"
                                            onclick = "editCopy('${data.copyID}')"
                                        >
                                            <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                            <span>Edit</span>
                                        </div>
                                        <div 
                                            class="dropdown-item"
                                            onclick = "removeCopy('${data.copyID}')"
                                        >
                                            <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                            <span>Remove</span>
                                        </div>
                                    </div>
                                </div>
                            `
                        }
                    }
                },
            ],
            columnDefs: [{
                targets: [5],
                orderable: false,
            }],
            order: [[0, 'desc']]
        })
    }
}