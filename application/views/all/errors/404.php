<div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="text-center">
        <img
            class     = "w-50 mb-3" 
            src       = "<?= base_url() ?>public/images/app/404.svg" 
            alt       = "Not found"
            draggable = "false"
        >

        <h1 class="display-4"><span class="text-warning">404</span> Page not found</h1>
        <h6>Sorry, but the page you are looking can't be find.</h6>

        <div class="my-5"></div>

        <button class="btn btn-primary" onclick="history.back()">
            <i class="fas fa-arrow-left mr-1"></i>
            <span>Go back</span>
        </button>
    </div>
</div>