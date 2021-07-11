<!-- Remove Copy Modal -->
<div 
    class         = "modal" 
    id            = "removeCopyModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-trash-alt mr-1 text-danger"></i>
                    <span>Remove copy</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to remove this copy?</p>
            </div>

            <!-- Hide id in form -->
            <div class ="form-group d-none">
                <input type="text" id="copyIDForRemove">
            </div>

            <div class="modal-footer">
                <button 
                    type="button" 
                    class="btn btn-muted" 
                    data-dismiss="modal"
                >
                    Cancel
                </button>
                <button 
                    type="button" 
                    class="btn btn-danger"
                    id="removeCopyBtn"
                >
                    <i class="fas fa-trash-alt mr-1"></i>
                    <span>Remove</span>
                </button>
            </div>
        </div>
    </div>
</div>