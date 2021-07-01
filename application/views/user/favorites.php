<!-- Materials -->
<div class="container py-5">
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
                    <div class="material-card-footer flex-h-separated">
                        <button class="btn btn-sm" data-toggle="tooltip" title="Remove as favorite">
                            <i class="far fa-trash-alt text-danger"></i>
                        </button>
                        <a href ="<?= base_url() ?>materials/1" class="btn btn-sm btn-primary">View More Details</a>
                    </div>
                </div>
            </div>
            <?php endfor ?>
    
        </div>
    </div>