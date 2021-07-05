/**
 * ===============================================================================
 * * PUBLICATION COUNTRIES AJAX FILE
 * -------------------------------------------------------------------------------
 * This is for managing publication countries
 * ===============================================================================
 */

$(() => {
	loadPublication_countriesDT();
});

/**
 * ===============================================================================
 * GET ALL PUBLICATION COUNTRIES AJAX
 * ===============================================================================
 */

// Load publication countries DataTable
loadPublication_countriesDT = () => {
	const dt = $("#publicationCountriesDT");
	if (dt.length) {
		dt.DataTable({
			ajax: {
				url: `${BASE_URL_API}librarian/publication_countries`,
				type: "GET",
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
					data: "country",
				},
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
                                        class="dropdown-item"
                                        onclick = "editPublication_country('${data.pubCountryID}')"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Edit</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        onclick = "removePublication_country('${data.pubCountryID}')"
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

// Add Author AJAX
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

					// Refresh data table after add
					const dt = $("#publicationCountryDT").DataTable();
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
editPublicationCountry = (authorID) => {
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
						name: "pubcountryID",
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
		submitHandler: () => update_publication_country(),
	})
);

