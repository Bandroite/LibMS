<div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="text-center">
        <img
            class     = "w-50 mb-3" 
            src       = "<?= base_url() ?>public/images/app/403.svg" 
            alt       = "Not found"
            draggable = "false"
        >

        <h1 class="display-4"><span class="text-danger">403</span> Forbidden</h1>
        <h6>You are not authorized to view any content of your request<h6>

        <div class="my-5"></div>

        <button class="btn btn-primary" onclick="history.back()">
            <i class="fas fa-arrow-left mr-1"></i>
            <span>Go back</span>
        </button>
    </div>
</div>