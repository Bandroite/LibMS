<!-- Register Success Modal -->
<div class="modal" id="registerSuccessModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-check mr-1 text-primary"></i>
                    <span>Registration Success!</span>
                </h5>
            </div>
            <div class="modal-body">
                <div class="flex-center py-3">
                    <img src="<?= base_url() ?>public/images/app/success.svg" alt="Success" style="height:10rem">
                </div>
                <p class="h6 text-center">Success! You may now log in to your account</p>
            </div>

            <div class="modal-footer">
                <div class="form-row flex-grow-1">
                    <div class="col-6">
                        <a href="<?= base_url() ?>" class="btn btn-block btn-muted">Go to home page</a>
                    </div>
                    <div class="col-6">
                        <a href="<?= base_url() ?>login" class="btn btn-block btn-primary">Go to Login page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
