<!-- Materials -->
<div class="container py-5">

    <!-- Header -->
    <div class="mb-3">
        <h3 id="searchResultTitle"></h3>
        <h6 class="text-secondary" id="searchResultSubtitle"></h6>
    </div>

    <!-- Search Bar -->
    <div class="container mb-4 px-5">
        <form class="form-row pt-5" action="<?= base_url() ?>search">
            <div class="col-12 col-md-6 col-lg-3 mt-2 mt-md-0 px-1 order-2 order-md-1">
                <div class="form-group">
                    <select 
                        class="selectpicker w-100" 
                        id="searchBy"
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
                        id="searchQuery" 
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

    <!-- Materials -->
    <div class="row" id="searchResults"></div>

    <!-- Pagination -->
    <nav class="mt-4">
        <ul class="pagination justify-content-center" id="searchResultsPagination"></ul>
    </nav>
</div>