<div class="container py-5">

    <!-- Book Details Section -->
    <div class="row">

        <!-- Image Subsection -->
        <div class="col-md-4 mb-md-0 mb-4">
            <img class="w-100 shadow-lg border rounded-lg" src="<?= base_url() ?>public/images/materials/book_1.jpg"></img>
        </div>

        <!-- Material Details Subsection -->
        <div class="col-md-8">
            <h1>Multimedia Computing</h1>
            <h5 class="text-secondary">Educational</h5>
            <p>Authors: Gerald Friedland, Ramesh Jain</p>
            
            <!-- Tabs -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a 
                        class           = "nav-link active" 
                        id              = "home-tab" 
                        data-toggle     = "tab" 
                        href            = "#home" 
                        role            = "tab"  
                        aria-controls   = "home" 
                        aria-selected   = "true"
                    >Description</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a 
                        class           = "nav-link" 
                        id              = "profile-tab" 
                        data-toggle     = "tab" 
                        href            = "#profile" 
                        role            = "tab" 
                        aria-controls   = "profile" 
                        aria-selected   = "false"
                    >Material Details</a>
                </li>
            </ul>

            <!-- Panes -->
            <div class="tab-content py-3" id="myTabContent">

                <!-- Description Pane -->
                <div 
                    class           = "tab-pane fade show active" 
                    id              = "home" 
                    role            = "tabpanel" 
                    aria-labelledby = "home-tab"
                >
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ullam libero similique mollitia iure, quod sunt velit rerum voluptatum. Consequatur recusandae iste dolorum aliquam natus, omnis, fuga molestias voluptates nesciunt officia itaque, praesentium rerum ducimus quae excepturi? Quasi, autem excepturi tenetur ex dicta nihil! Earum numquam aut, quas eligendi hic et minima sit temporibus velit, eius cumque voluptatem id corporis. Delectus, inventore fuga. Quisquam sunt deleniti placeat quibusdam, hic recusandae velit corporis nobis necessitatibus aspernatur consectetur harum, alias in architecto sapiente nemo voluptate eveniet quasi ullam laudantium soluta excepturi earum illo fugit. Animi tenetur quasi pariatur dolorum doloribus. Laborum autem fugiat doloribus eaque recusandae et est repellat, officia fuga eligendi alias dolor assumenda ipsa incidunt iste quos iusto aspernatur non tempora maxime eos eveniet voluptates.</p>
                </div>

                <!-- Material Details Pane -->
                <div 
                    class   = "tab-pane fade" 
                    id      = "profile" 
                    role    = "tabpanel" 
                >
                    <table class="table">
                        <tr>
                            <th>Genre</th>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <td>lorem</td>
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
                            <th>ISBN/ISSN</th>
                            <td>1234-ANBDJS-3435</td>
                        </tr>
                    </table>
                </div>

            </div>

            <div>
                <button class="btn btn-lg border-danger text-danger">
                    <span>Add to favorites</span>
                    <i class="far fa-heart ml-1"></i>
                </button>
            </div>
        </div>
    </div>

    <hr class="my-5">

    <!-- Recommended For You Section -->
    <h2 class="font-weight-light text-center text-primary">Recommended For You</h2>

    <div class="container">
        <div class="row">
            
            <?php for($i=0;$i<4;$i++): ?>
            <div class="col-md-6 col-lg-3 mb-3 flex-center">
                <div class="material-card">
                    <div class="material-img-container">
                        <img 
                            src="<?= base_url() ?>public/images/materials/book_3.jpg" 
                            alt="Book 3"
                        >
                    </div>
                    <div class="material-details-container">
                        <a href="<?= base_url() ?>materials/1" class="material-title">Lorem ipsum dolor sit amet consectetur adipisicing</a>
                        <div class="material-details">
                            <strong class="mr-1">Author:</strong>
                            <span class="d-inline-block text-truncate" style="max-width: 10rem" data-toggle="tooltip" title="F. Scott Fitzgerald, F. Scott Fitzgerald, F. Scott Fitzgerald, F. Scott Fitzgerald">
                                <span>F. Scott Fitzgerald, F. Scott Fitzgerald, F. Scott Fitzgerald, F. Scott Fitzgerald</span>
                            </span>
                        </div>
                    </div>
                    <div class="material-card-footer flex-h-separated">
                        <button class="btn btn-sm" data-toggle="tooltip" title="Add as favorite">
                            <i class="far fa-heart text-danger"></i>
                        </button>
                        <a href ="<?= base_url() ?>materials/1" class="btn btn-sm btn-primary">View More Details</a>
                    </div>
                </div>
            </div>
            <?php endfor ?>
    
        </div>
    </div>
</div>