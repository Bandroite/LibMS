<div class="container py-5">

    <!-- Book Details Section -->
    <div class="row">

        <!-- Image Subsection -->
        <div class="col-md-4 mb-md-0 mb-4">
            <img class="w-100 shadow-lg border rounded-lg" id="materialImage" src=""></img>
        </div>

        <!-- Material Details Subsection -->
        <div class="col-md-8" id="materialDetails">

            <!-- Header -->
            <h1 id="materialTitle"></h1>
            <h5 id="materialGenres" class="text-secondary"></h5>
            <p>Authors: <span id="materialAuthors"></span></p>
            
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
                <div class="tab-pane fade" id="details" role="tabpanel" >
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

            <!-- Buttons -->
            <div>
                <?php if($this->session->userType === 'Student' || $this->session->userType === 'Staff'): ?>
                    <input type="hidden" id="materialIDForFavorites">
                    <div id="userFavBtnContainer">
                        <button type="button" class="btn btn-lg border-danger text-danger" onclick="addToFavorites()">
                            <span>Add to favorites</span>
                            <i class="far fa-heart ml-1"></i>
                        </button>
                    </div>
                <?php elseif(!$this->session->has_userdata('userType')): ?>
                    <a href="<?= base_url() ?>login" class="btn btn-lg border-danger text-danger">
                        <span>Add to favorites</span>
                        <i class="far fa-heart ml-1"></i>
                    </a>
                <?php endif ?>
            </div>
        </div>
    </div>

    <hr class="my-5">

    
</div>