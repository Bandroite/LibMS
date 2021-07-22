/**
 * ===============================================================================
 * * PUBLICATION COUNTRIES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing publication countries
 * ===============================================================================
 */

$(() => {
	loadPublicationCountriesDT();
    publication_countries_countAJAX();
});

/**
 * ===============================================================================
 * GET ALL PUBLICATION COUNTRIES AJAX
 * ===============================================================================
 */

// Load publication countries DataTable
loadPublicationCountriesDT = () => {
	const dt = $("#publicationCountriesDT");
	if (dt.length) {
		dt.DataTable({
			ajax: {
				url: `${BASE_URL_API}librarian/publication_countries`,
				headers: AJAX_HEADERS,
			},
			columns: [

				// Country
				{ data: "country" },

				// Status
				{
					data: null,
					render: (data) => {
						if (data.status == "Active") {
							return `
                                <div class="badge alert-success text-success p-2 w-100">Active</div>
                            `;
						} else {
							return `
                                <div class="badge alert-danger text-danger p-2 w-100">Inactive</div>
                            `;
						}
					},
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
					class: "text-center",
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
                                        class       = "dropdown-item"
                                        onclick     = "viewPublicationCountry('${data.pubCountryID}')"
                                    >
                                        <i class="fas fa-eye dropdown-icon-item text-info"></i>
                                        <span>View details</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "editPublicationCountry('${data.pubCountryID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removePublicationCountry('${data.pubCountryID}')"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        `;
					},
				},
			],
			columnDefs: [
				{
					targets: [2],
					orderable: false,
				},
			],
		});
	}
};

/**
 * ===============================================================================
 * ADD PUBLICATION COUNTRY AJAX
 * ===============================================================================
 */

// Add Publication Country From Validation
$("#addPublicationCountryForm").validate(
	validateOptions({
		rules: {
			country: {
				required: true,
			},
			status: {
				required: true,
			},
		},
		messages: {
			country: {
				required: "Country name is required",
			},
			status: {
				required: "Status is required",
			},
		},
		submitHandler: () => add_publication_countryAJAX(),
	})
);

// Add Publication Country AJAX
add_publication_countryAJAX = () => {
	// Get values from form to rawData
	const rawData = new FormData($("#addPublicationCountryForm")[0]);

	// Get data from rawData
	data = {
		country: rawData.get("country"),
		status: rawData.get("status"),
	};

	// Add Publication Country via AJAX
	$.ajax({
		url: `${BASE_URL_API}librarian/publication_countries`,
		type: "POST",
		headers: AJAX_HEADERS,
		data: data,
		dataType: "json",
		success: (result) => {
			if (result) {
				if (result.error) {
					console.log(result.message);
					$("#addPublicationCountryModal").modal("hide");

					showAlert("danger", "Failed!", result.message);
				} else {
					console.log(result);
					$("#addPublicationCountryModal").modal("hide");

					showAlert("success", "Success!", result.message);

                    // Reload countries count
                    publication_countries_countAJAX();

					// Refresh data table after add
					const dt = $("#publicationCountriesDT").DataTable();
					dt.ajax.reload();
				}
			} else {
				console.log("No result");
			}
		},
		error: (err) => {
			const response = err.responseJSON;
			$("#addPublicationCountryModal").modal("hide");
			showAlert("danger", "Failed!", response.message);
		},
	});
};

/**
 * ===============================================================================
 * EDIT PUBLICATION COUNTRIES AJAX
 * ===============================================================================
 */

// Edit Publication Country
editPublicationCountry = (pubCountryID) => {
	$.ajax({
		url: `${BASE_URL_API}librarian/publication_countries/${pubCountryID}`,
		type: "GET",
		headers: AJAX_HEADERS,
		success: (result) => {
			if (result) {
				const data = result.data;
				console.log(data);

				setFormValues("#editPublicationCountryForm", [
					{
						name: "pubCountryID",
						value: data.pubCountryID,
					},
					{
						name: "country",
						value: data.country,
					},
					{
						name: "status",
						value: data.status,
					},
				]);

				$("#editPublicationCountryModal").modal("show");
			} else {
				console.log("No result");
			}
		},
	});
};

// Edit Publication Country From Validation
$("#editPublicationCountryForm").validate(
	validateOptions({
		rules: {
			country: {
				required: true,
			},
			status: {
				required: true,
			},
		},
		messages: {
			country: {
				required: "Country Name is required",
			},
			status: {
				required: "Status is required",
			},
		},
		submitHandler: () => update_publication_countryAJAX(),
	})
);

// Update Publication Country AJAX
update_publication_countryAJAX = () => {
    // Get values from form to rawData
    const rawData = new FormData($('#editPublicationCountryForm')[0]);

    // Get data from rawData
    data = {
        country: rawData.get("country"),
		status: rawData.get("status"),
    }

    const pubCountryID = rawData.get('pubCountryID')

    // Edit Publication Country via AJAX
    $.ajax({
        url: `${ BASE_URL_API }librarian/publication_countries/${pubCountryID}`,
        type: 'PUT',
        headers: AJAX_HEADERS,
        data: data,
        dataType: 'json',
        success: (result) => {
            if(result) {
                if(result.error) {
                    console.log(result.message)
                    $('#editPublicationCountryModal').modal('hide');

                    showAlert('danger','Failed!',result.message);

                } else {
                    console.log(result);
                    $('#editPublicationCountryModal').modal('hide');
                    
                    showAlert('success','Success!','Record has been updated');

                    // Reload countries count
                    publication_countries_countAJAX();

                    // Refresh data table after add
                    const dt = $('#publicationCountriesDT').DataTable();
                    dt.ajax.reload();
                }
            } else {
                console.log('No result');
            }
        },
        error: (err) => {
            const response = err.responseJSON
            $('#editPublicationCountryModal').modal('hide');
            showAlert('danger','Failed!',response.message);
        }
    })
}

/**
 * ===============================================================================
 * REMOVE PUBLICATION COUNTRY AJAX
 * ===============================================================================
 */

// Remove Publication Country
removePublicationCountry = (pubCountryID) => {
    setFormValues('#removePublicationCountryForm',[
        {
            name: 'pubCountryID',
            value: pubCountryID
        }
    ]);

    $('#removePublicationCountryModal').modal('show')
}

// Validate Remove Publication Country Form
$('#removePublicationCountryForm').validate(validateOptions({
    rules: {},
    messages: {},
    submitHandler: () => delete_publication_countryAJAX()
}))

// Delete Publication Country AJAX
delete_publication_countryAJAX = () => {

    // Get values from form to rawData
    const rawData = new FormData($('#removePublicationCountryForm')[0]);

    const pubCountryID = rawData.get('pubCountryID')


    $.ajax({
        url: `${ BASE_URL_API }librarian/publication_countries/${pubCountryID}`,
        type: 'DELETE',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result) {
                // Refresh data table after delete
                const dt = $('#publicationCountriesDT').DataTable();
                dt.ajax.reload();
                
                // Show success alert
                showAlert('success','Success!','Record has been deleted');

                // Hide model after delete
                $('#removePublicationCountryModal').modal('hide');

                // Reload countries count
                publication_countries_countAJAX();
            } else {
                console.log('No result');
            }
        }
    })
    .fail(() => {
        // Hide model after delete
        $('#removePublicationCountryModal').modal('hide');
        showAlert('danger','Failed','Cannot delete this record!');
    })
}

/**
 * ===============================================================================
 * VIEW GENRE
 * ===============================================================================
 */

// View Publication Country
viewPublicationCountry = (pubCountryID) => {
    $.ajax({
        url: `${ BASE_URL_API }librarian/publication_countries/${pubCountryID}`,
        type: 'GET',
        headers: AJAX_HEADERS,
        success: (result) => {
            if(result){
                const data = result.data;
                const addedBy = data.added_by_librarian
                const updatedBy = data.updated_by_librarian
                
                const addedByFullName =
                setFullName('F Mi L',{
                    firstName: addedBy.firstName,
                    middleName: addedBy.middleName,
                    lastName: addedBy.lastName
                })

                const updatedByFullName =
                setFullName('F Mi L',{
                    firstName: updatedBy.firstName,
                    middleName: updatedBy.middleName,
                    lastName: updatedBy.lastName,
                })

                var statusBlade;
                    if(data.status == 'Active'){
                        statusBlade = `
                            <div class="badge alert-success text-success p-2">Active</div>
                        `
                    }
                    else{
                        statusBlade = `
                            <div class="badge alert-danger text-danger p-2">Inactive</div>
                        `
                    }

                const addedAt = moment(data.addedAt).format("dddd, MMMM D, YYYY hh:mm A")
                const updatedAt = moment(data.updated).format("dddd, MMMM D, YYYY hh:mm A")

                console.log(data);

                $('#publicationCountry').html(data.country);
                $('#status').html(statusBlade);
                $('#addedBy').html(addedByFullName);
                $('#updatedBy').html(updatedByFullName);
                $('#addedAt').html(addedAt);
                $('#updatedAt').html(updatedAt);
                
                $('#viewPublicationCountryModal').modal('show')
            }
            else{
                console.log('No result');
            }
        } 
    })
}

/**
 * ===============================================================================
 * PUBLICATION COUNTRIES COUNT
 * ===============================================================================
 */

// Publication countries count AJAX
publication_countries_countAJAX = () => {
    if($('#pubCountriesCountContainer').length) {
        $.ajax({
            url: `${ BASE_URL_API }librarian/publication_countries/count`,
            type: 'GET',
            headers: AJAX_HEADERS,
            success: result => {
                if(result) {
                    const pubCountriesCount = result.count;
                    $('#pubCountriesTotalCount').html(pubCountriesCount.total);
                    $('#pubCountriesActiveCount').html(pubCountriesCount.active);
                    $('#pubCountriesInactiveCount').html(pubCountriesCount.inactive);
                } else {
                    console.log('No result was found');
                }
            }
        })
        .fail(() => showAlert('danger', 'Error:', 'There was an error in getting room count'));
    }
}
