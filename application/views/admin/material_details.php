<div class="mb-4">
    <h2 class="mb-0">Material Details</h2>
    <div class="text-secondary">View details of the material here.</div>
</div>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Book Details Section -->
<div class="row mb-4" id="materialDetails">

    <!-- Image Subsection -->
    <div class="col-md-4 mb-3 mb-md-0">
        <div class="flex-center">
            <div class="material-img-preview user-select-none" id="materialImgContainer">
                <div class="bg-muted flex-center text-secondary rounded-lg" style="width: 18rem; height: 25rem">
                    <span>Material image will display here</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Material Details Subsection -->
    <div class="col-md-8">
        <div class="mb-3">
            <h1 id="title">
                <span class="text-secondary font-italic">No data</span>
            </h1>
            <h5 id="genres" class="text-secondary mb-1">
                <span class="text-secondary font-italic">No data</span>
            </h5>
            <div id="authors">
                <span class="text-secondary font-italic">No data</span>
            </div>
        </div>
        
        <!-- Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">

            <!-- Description Tab -->
            <li class="nav-item" role="presentation">
                <a 
                    class       = "nav-link active" 
                    data-toggle = "tab" 
                    href        = "#description" 
                    role        = "tab"
                    draggable   = "false"
                >
                    <i class="fas fa-info-circle mr-1"></i>
                    <span>Description</span>
                </a>
            </li>

            <!-- Details Tab -->
            <li class="nav-item" role="presentation">
                <a
                    class           = "nav-link" 
                    data-toggle     = "tab" 
                    href            = "#details" 
                    role            = "tab"
                    draggable       = "false"
                >
                    <i class="fas fa-list mr-1"></i>
                    <span>Details</span>
                </a>
            </li>

            <!-- Location Tab -->
            <li class="nav-item" role="presentation">
                <a
                    class           = "nav-link" 
                    data-toggle     = "tab" 
                    href            = "#location" 
                    role            = "tab"
                    draggable       = "false"
                >
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    <span>Location</span>
                </a>
            </li>
        </ul>

        <!-- Panes -->
        <div class="tab-content" id="myTabContent">

            <!-- Description Pane -->
            <div class="tab-pane py-3 fade show active" role="tabpanel" id="description">
                <p id="descriptionDetails" style="text-indent: 5rem">
                    <span class="text-secondary font-italic">No data</span>
                </p>
            </div>

            <!-- Material Details Pane -->
            <div 
                class   = "tab-pane fade" 
                id      = "details" 
                role    = "tabpanel" 
            >
                <table class="table">
                    <tr>
                        <th class="border-top-0">Standard Number</th>
                        <td class="border-top-0" id="standardNumber">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Authors</th>
                        <td id="detailedAuthors">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Format</th>
                        <td id="format">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td id="detailedGenres">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Language</th>
                        <td id="language">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Volume</th>
                        <td id="volume">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Number of Pages</th>
                        <td id="numOfPages">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Publication Details</th>
                        <td>
                            <div>
                                <div 
                                    class="d-inline-flex align-items-baseline"
                                    data-toggle="tooltip"
                                    title="Publisher"
                                >
                                    <div class="icon-container small">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div id="pubName">
                                        <span class="text-secondary font-italic">No data</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div 
                                    class="d-inline-flex align-items-baseline"
                                    data-toggle="tooltip"
                                    title="Date of Publication"
                                >
                                    <div class="icon-container small">
                                        <i class="fas fa-calendar-alt"></i>
                                    </div>
                                    <div id="pubDate">
                                        <span class="text-secondary font-italic">No data</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div 
                                    class="d-inline-flex align-items-baseline"
                                    data-toggle="tooltip"
                                    title="Publication Country"
                                >
                                    <div class="icon-container small">
                                        <i class="fas fa-flag"></i>
                                    </div>
                                    <div id="pubCountry">
                                        <span class="text-secondary font-italic">No data</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Edition</th>
                        <td>
                            <div id="edition">
                                <span class="text-secondary font-italic">No data</span>
                            </div>
                            <div id="editionYear">
                                <span class="text-secondary font-italic">No data</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Series Year</th>
                        <td id="seriesYear">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Location Pane -->
            <div class="tab-pane fade" id="location" role="tabpanel">
                <table class="table">
                    <tr>
                        <th class="border-top-0">Shelf</th>
                        <td class="border-top-0" id="shelf">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Room</th>
                        <td id="room">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Building</th>
                        <td id="building">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- User Actions -->
        <div class="form-group">
            <button type="button" class="btn btn-muted" onclick="history.back()">Close</button>
            <button class="btn btn-blue" id="editMaterialBtn">
                <i class="fas fa-edit mr-1"></i>
                <span>Edit</span>
            </button>
        </div>

    </div>

</div>


<!-- Copies Table -->
<div class="card mb-4">
    <div class="card-header flex-h-separated">
        <div>
            <i class="fas fa-copy mr-1 text-primary"></i>
            <span>Copies</span>
        </div>
        <div>
            <button 
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addCopyModal"
            >
                <i class="fas fa-plus mr-1"></i>
                <span>Add copy of this material</span>
            </button>
        </div>
    </div>
    <div class="card-body">

        <!-- Copies Table -->
        <div class="table-responsive">
            <table class="table w-100" id="copiesDT">
                <thead>
                    <th>Copy Number</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Action</th>
                </thead>
                <tbody>
                    
                    <!-- Available -->
                    <tr>
                        <td>COPYID-0001</td>
                        <td class="text-center">
                            <div class="badge alert-success text-success p-2">Available</div>
                        </td>
                        <td class="text-center">
                            <div class="dropdown">
                                <div data-toggle="dropdown">
                                    <div class="btn btn-sm btn-muted">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>
    
                                <div class="dropdown-menu dropdown-menu-right">
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#changeCopyStatusModal"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Change status</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeCopyModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove this copy</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
    
                    <!-- Unavailable -->
                    <tr>
                        <td>COPYID-0002</td>
                        <td class="text-center">
                            <div class="badge alert-danger text-danger p-2">Unavailable</div>
                        </td>
                        <td class="text-center font-italic">No action</td>
                    </tr>
    
                    <!-- Weeded -->
                    <tr>
                        <td>COPYID-0003</td>
                        <td class="text-center">
                            <div class="badge alert-dark text-dark p-2">Weeded</div>
                        </td>
                        <td class="text-center">
                            <div class="dropdown">
                                <div data-toggle="dropdown">
                                    <div class="btn btn-sm btn-muted">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </div>
                                </div>
    
                                <div class="dropdown-menu dropdown-menu-right">
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#changeCopyStatusModal"
                                    >
                                        <i class="fas fa-edit dropdown-icon-item text-blue"></i>
                                        <span>Change status</span>
                                    </div>
                                    <div 
                                        class="dropdown-item"
                                        data-toggle="modal"
                                        data-target="#removeCopyModal"
                                    >
                                        <i class="fas fa-trash-alt dropdown-icon-item text-danger"></i>
                                        <span>Remove this copy</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>