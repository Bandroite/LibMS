<!-- Materials -->
<div class="container py-5">

    <!-- Header -->
    <div class="mb-3">
        <h3>View all available materials here</h3>
        <h6 class="text-secondary" id="noOfAvailableMaterials"></h6>
    </div>


    <!-- Search Bar -->
    <div class="container mb-4 px-5">
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

    <!-- Materials -->
    <div class="row" id="allMaterials"></div>

    <!-- Pagination -->
    <nav class="mt-4">
        <ul class="pagination justify-content-center" id="allMaterialsPagination"></ul>
    </nav>
</div>