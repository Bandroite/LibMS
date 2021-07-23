<!-- Hero Section -->
<div style="background: #fd7e1433">
    <div class="container py-5">
        <div class="row my-0 my-lg-5">
            <div class="col-12 col-lg-6 order-1 order-lg-0">
                <div class="d-flex align-items-center h-100">
                    <div class="animate">
                        <h1 class="display-4 font-weight-bold">
                            <div class="d-flex">
                                <div class="mr-2">Welcome to</div>
                                <img src="<?= base_url() ?>public/images/app/libms.png" width="210" height="70">
                            </div>
                        </h1>
                        <p>Browse all available materials here in our website! Add it to your favorites too!.</p>
                        
                        <!-- Search Bar -->
                        <form class="form-row pt-5" action="<?= base_url() ?>search">
                            <div class="col-12 col-md-6 col-lg-3 mt-2 mt-md-0 px-1 order-2 order-md-1">
                                <div class="form-group">
                                    <select 
                                        class="selectpicker w-100" 
                                        name="searchBy"
                                        data-style="btn btn-primary btn-block" 
                                        title="Search by..."
                                    >
                                        <option value="Author">Author</option>
                                        <option value="Title">Title</option>
                                        <option value="Genre">Genre</option>
                                        <option value="Publisher">Publisher</option>
                                        <option value="Country">Country</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-9 px-1 order-1 order-md-2">
                                <div class="input-group">
                                    <input 
                                        type="text"
                                        name="query" 
                                        class="form-control" 
                                        placeholder="Search here..."
                                    >
                                    <div class="input-group-append">
                                        <button class="btn btn-primary">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 order-0 order-lg-1">
                <div class="flex-center">
                    <img 
                        class     = "w-75 user-select-none" 
                        src       = "<?= base_url() ?>public/images/app/bibliophile.svg" 
                        alt       = "Bibliophile"
                        draggable = "false"
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Trending Books Section -->
<div class="container-fluid py-5">
    
    <!-- Heading -->
    <div class="heading-container">
        <h1 class="heading-title">Top Interesting</h1>
        <h5 class="heading-subtitle">New Added</h5>
    </div>

    <!-- Materials -->
    <div class="container">
        <div class="row" id="latestMaterials"></div>
    </div>
</div>

<hr>

<!-- Most Popular Section -->
<div class="container-fluid py-5">
    
    <!-- Heading -->
    <div class="heading-container">
        <h1 class="heading-title">Most Popular</h1>
        <h5 class="heading-subtitle">New Added</h5>
    </div>

    <!-- Materials -->
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
                        <!-- <div class="h-100 w-100 bg-muted rounded-lg flex-center">
                            <div class="small text-secondary">He's Into Her</div>
                        </div> -->
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