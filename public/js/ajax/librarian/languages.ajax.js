/**
 * ===============================================================================
 * * LANGUAGES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing languages
 * ===============================================================================
 */

$(() => {
	loadLanguagesDT();
	languages_countAJAX();
});

/**
 * ===============================================================================
 * GET ALL LANGUAGES AJAX
 * ===============================================================================
 */

// Load languages DataTable
loadLanguagesDT = () => {
    const dt = $('#languagesDT');
    if(dt.length){
        dt.DataTable({
            ajax: {
                url: `${ BASE_URL_API }librarian/languages`,
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
                {
                    data: 'language'
                },
                {
                    data: null,
                    render: (data) =>{
                        if(data.status == 'Active'){
                            return `
                                <div class="badge alert-success text-success p-2 w-100">Active</div>
                            `
                        }
                        else{
                            return `
                                <div class="badge alert-danger text-danger p-2 w-100">Inactive</div>
                            `
                        }
                    }
                },
                {
                    data: null,
                    class: 'text-center',
                    render: (data) => {
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
                                        onclick = "editLanguage('${data.languageID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removeLanguage('${data.languageID}')"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
                                </div>
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


/**
 * ===============================================================================
 * ADD LANGUAGES AJAX
 * ===============================================================================
 */

// Add language From Validation
$('#addLanguageForm').validate(validateOptions({
    rules: {
        language: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        language: {
            required: 'Language is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => add_languageAJAX()
}))

// Add Language AJAX
add_languageAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#addLanguageForm')[0]);

    // Get data from rawData
    data = {
        language: rawData.get('language'),
        status: rawData.get('status'),
    }

    // Add Language via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/languages`,
        type: 'POST',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#addLanguageModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#addLanguageModal').modal('hide');
                    
                    showAlert('success','Success!',result.message);

                    // Reload languages count
                    languages_countAJAX();

                    // Refresh data table after add
                    const dt = $('#languagesDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#addLanguageModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
    
}


/**
 * ===============================================================================
 * EDIT LANGUAGES AJAX
 * ===============================================================================
 */

// Edit language
editLanguage = (languageID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/languages/${languageID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                console.log(data);

                setFormValues('#editLanguageForm',[
                    {
                        name: 'languageID',
                        value: data.languageID
                    },
                    {
                        name: 'language',
                        value: data.language
                    },
                    {
                        name: 'status',
                        value: data.status
                    }
                ])
                
                $('#editLanguageModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

// Edit Language From Validation
$('#editLanguageForm').validate(validateOptions({
    rules: {
        language: {
            required: true
        },
        status: {
            required: true
        }
    },
    messages: {
        language: {
            required: 'Language is required'
        },
        status: {
            required: 'Status is required'
        }
    },
    submitHandler: () => update_languageAJAX()
}))

// Update Language AJAX
update_languageAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editLanguageForm')[0]);

    // Get data from rawData
    data = {
        language: rawData.get('language'),
        status: rawData.get('status')
    }

    const languageID = rawData.get('languageID')

    // Edit Language via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/languages/${languageID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editLanguageModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editLanguageModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');
                    
                    // Reload languages count
                    languages_countAJAX();

                    // Refresh data table after add
                    const dt = $('#languagesDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editLanguageModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}


/**
 * ===============================================================================
 * REMOVE LANGUAGES AJAX
 * ===============================================================================
 */

// Remove Language
removeLanguage = (languageID) => {
    setFormValues('#removeLanguageForm',[
        {
            name: 'languageID',
            value: languageID
        }
    ]);

    $('#removeLanguageModal').modal('show')
}

// Validate Remove Language Form
$('#removeLanguageForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_languageAJAX()
}));

// Delete Language AJAX
delete_languageAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removeLanguageForm')[0]);

    const languageID = rawData.get('languageID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/languages/${languageID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#languagesDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removeLanguageModal').modal('hide');

                // Reload languages count
                languages_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removeLanguageModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}


/**
 * ===============================================================================
 * LANGUAGES COUNT
 * ===============================================================================
 */

// Languages count AJAX
languages_countAJAX = () => {
	if ($("#languagesCountContainer").length) {
		$.ajax({
			url: `${BASE_URL_API}librarian/languages/count`,
			type: "GET",
			headers: AJAX_HEADERS,
			success: (result) => {
				if (result) {
					const languagesCount = result.count;
					$("#languagesTotalCount").html(languagesCount.total);
					$("#languagesActiveCount").html(languagesCount.active);
					$("#languagesInactiveCount").html(languagesCount.inactive);
				} else {
					console.log("No result was found");
				}
			},
		}).fail(() =>
			showAlert(
				"danger",
				"Error:",
				"There was an error in getting languages count"
			)
		);
	}
};
