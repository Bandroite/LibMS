<!-- Remove Material Modal -->
<div 
    class         = "modal" 
    id            = "removeMaterialModal" 
    data-backdrop = "static" 
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removeMaterialForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove material</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this material? All record of copies will be deleted too.</p>
        </div>

        <!-- Hide Form -->
        <div class="form-group d-none">
            <input 
                type="text" 
                class="form-control"
                name="materialID"
            >
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-danger" id="removeMaterialModal" >Remove</button>
        </div>
        </form>
    </div>
</div>