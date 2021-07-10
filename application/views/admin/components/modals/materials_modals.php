<!-- Add Copy Modal -->
<div 
    class         = "modal" 
    id            = "addCopyModal" 
    data-backdrop = "static" 
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="addCopyForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-copy mr-1 text-blue"></i>
                    <span>Add copy</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="copyNumber">Copy Number</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="copyNumber"
                        name="copyNumber"
                        placeholder="Enter copy number here"
                    >
                </div>
                <div class="form-group">
                    <label for="availableStatus">Status</label>
                    <div class="form-control">
                        <label class="custom-control custom-radio custom-control-inline" for="availableStatus">
                            <input type="radio" id="availableStatus" name="status" class="custom-control-input" value="Available">
                            <div class="custom-control-label">Available</div>
                        </label>
                        <label class="custom-control custom-radio custom-control-inline" for="weededStatus">
                            <input type="radio" id="weededStatus" name="status" class="custom-control-input" value="Weeded">
                            <div class="custom-control-label">Weeded</div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-blue">
                    <i class="fas fa-plus mr-1"></i>
                    <span>Add</span>
                </button>
            </div>
        </form>
    </div>
</div>


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