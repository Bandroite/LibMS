<div class="container-fluid py-5">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
</div>

<div class="hero parallax-window" data-parallax="scroll" data-image-src="<?= base_url() ?>public/images/app/hero_image.jpg">
    <div class="hero-container">

        <!-- Hero Text -->
        <div class="mb-5">
            <h1 class="display-4">Welcome to the <span class="text-nowrap font-weight-bold text-primary">Online Library!</span></h1>
            <h5 class="font-weight-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, eligendi.</h5>
        </div>

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
</div>