<div class="mb-4">
    <h2 class="mb-0">Material Details</h2>
    <div class="text-secondary">Lorem ipsum dolor sit amet.</div>
</div>

<!-- Show Alert -->
<div id="alertContainer"></div>

<!-- Book Details Section -->
<div class="row mb-4">

    <!-- Image Subsection -->
    <div class="col-md-4 mb-3 mb-md-0">
        <img 
            class="w-100 shadow-lg border" 
            src="<?= base_url() ?>public/images/materials/book_1.jpg"
            draggable="false"
        ></img>
    </div>

    <!-- Material Details Subsection -->
    <div class="col-md-8">
        <div class="mb-3">
            <h1>Multimedia Computing</h1>
            <h5 class="text-secondary mb-1">Educational</h5>
            <div>Authors: Gerald Friedland, Ramesh Jain</div>
        </div>
        
        <!-- Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">

            <!-- Description Tab -->
            <li class="nav-item" role="presentation">
                <a 
                    class           = "nav-link active" 
                    data-toggle     = "tab" 
                    href            = "#description" 
                    role            = "tab"  
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
                >
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    <span>Location</span>
                </a>
            </li>
        </ul>

        <!-- Panes -->
        <div class="tab-content py-3" id="myTabContent">

            <!-- Description Pane -->
            <div 
                class = "tab-pane fade show active" 
                id    = "description" 
                role  = "tabpanel"
            >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ullam libero similique mollitia iure, quod sunt velit rerum voluptatum. Consequatur recusandae iste dolorum aliquam natus, omnis, fuga molestias voluptates nesciunt officia itaque, praesentium rerum ducimus quae excepturi? Quasi, autem excepturi tenetur ex dicta nihil! Earum numquam aut, quas eligendi hic et minima sit temporibus velit, eius cumque voluptatem id corporis. Delectus, inventore fuga. Quisquam sunt deleniti placeat quibusdam, hic recusandae velit corporis nobis necessitatibus aspernatur consectetur harum, alias in architecto sapiente nemo voluptate eveniet quasi ullam laudantium soluta excepturi earum illo fugit. Animi tenetur quasi pariatur dolorum doloribus. Laborum autem fugiat doloribus eaque recusandae et est repellat, officia fuga eligendi alias dolor assumenda ipsa incidunt iste quos iusto aspernatur non tempora maxime eos eveniet voluptates.</p>
            </div>

            <!-- Material Details Pane -->
            <div 
                class   = "tab-pane fade" 
                id      = "details" 
                role    = "tabpanel" 
            >
                <table class="table">
                    <tr>
                        <th>ISBN/ISSN</th>
                        <td>1234-ANBDJS-3435</td>
                    </tr>
                    <tr>
                        <th>Authors</th>
                        <td>
                            <div>Gerald Friedland</div>
                            <div>Ramesh Jain</div>
                        </td>
                    </tr>
                    <tr>
                        <th>Format</th>
                        <td>Lorem Format</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>Educational</td>
                    </tr>
                    <tr>
                        <th>Language</th>
                        <td>English</td>
                    </tr>
                    <tr>
                        <th>Publication</th>
                        <td>
                            <div>Publication Name</div>
                            <div>Publication Date</div>
                            <div>Publication Country</div>
                        </td>
                    </tr>
                    <tr>
                        <th>Edition</th>
                        <td>
                            <div>Second Edition</div>
                            <div>1995</div>
                        </td>
                    </tr>
                    <tr>
                        <th>Series Year</th>
                        <td>1995</td>
                    </tr>
                </table>
            </div>

            <!-- Location Pane -->
            <div 
                class           = "tab-pane fade" 
                id              = "location" 
                role            = "tabpanel"
            >
                <table class="table">
                    <tr>
                        <th>Shelf</th>
                        <td>ROTH-1A-S01</td>
                    </tr>
                    <tr>
                        <th>Room</th>
                        <td>ROTH-A1</td>
                    </tr>
                    <tr>
                        <th>Building</th>
                        <td>Roth Bldg.</td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- User Actions -->
        <div class="form-group">
            <a href="<?= base_url() ?>admin/materials" class="btn btn-muted">Close</a>
            <button class="btn btn-blue">
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
        <table class="table" id="copiesDT">
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