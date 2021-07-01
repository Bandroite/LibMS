<!-- Materials -->
<div class="container py-5">
    <div class="container mb-5 px-5">
        <!-- Search Bar -->
        <div class="form-row pt-5">
            <div class="col-12 col-md-6 col-lg-3 mt-2 mt-md-0 px-1 order-2 order-md-1">
                <div class="form-group">
                    <select class="selectpicker w-100" data-style="btn btn-primary btn-block" title="Search by...">
                        <option value="Author">General</option>
                        <option value="Author">Author</option>
                        <option value="Title">Title</option>
                        <option value="Genre">Genre</option>
                        <option value="Genre">Publisher</option>
                        <option value="Genre">Country</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-9 px-1 order-1 order-md-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search here...">
                    <div class="input-group-append">
                        <button class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        
        <?php for($i=0;$i<16;$i++): ?>
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
                        <span class="d-inline-block text-truncate" style="max-width: 10rem">
                            <span>F. Scott Fitzgerald, F. Scott Fitzgerald, F. Scott Fitzgerald, F. Scott Fitzgerald</span>
                        </span>
                    </div>
                </div>
                <div class="material-card-footer text-right">
                    <a href ="<?= base_url() ?>materials/1" class="btn btn-sm btn-primary">View More Details</a>
                </div>
            </div>
        </div>
        <?php endfor ?>

    </div>
    </div>