<div class="container py-5">
    <!-- Header -->
    <div class="mb-4">
        <h3>This is your personal information</h3>
        <h6 class="text-secondary">View your information here</h6>
    </div>

    <div class="row" id="borrowerProfile">
        <div class="col-lg-4 mb-4 mb-sm-0">
            <div class="card">
                <div class="card-body p-3">
                    <div class="flex-center mb-4">
                        <img 
                            class="rounded-circle" 
                            id="avatar"
                            style="height: 15rem; width: 15rem"
                        >
                    </div>
                    <div class="text-center">
                        <h4 class="mb-1" id="borrowerFullNameForProfile"></h4>
                        <h6 class="text-secondary mb-1" id="borrowerIDNumberForProfile"></h6>
                        <div class="badge alert-primary text-primary px-2" id="borrowerTypeForProfile"></div>
                        <div class="mt-3" id="borrowerEmailForProfile"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <h4>
                        <i class="fas fa-info-circle mr-1 text-primary"></i>
                        <span>Personal Information</span>
                    </h4>
                    <table class="table mt-3" id="borrowerDetails"></table>
                    <div class="form-group text-center">
                        <button class="btn btn-blue">
                            <i class="fas fa-edit mr-1"></i>
                            <span>Edit your information</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>