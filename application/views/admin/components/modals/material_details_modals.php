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
                            <input type="radio" id="availableStatus" name="userStatus" class="custom-control-input">
                            <div class="custom-control-label">Available</div>
                        </label>
                        <label class="custom-control custom-radio custom-control-inline" for="weededStatus">
                            <input type="radio" id="weededStatus" name="userStatus" class="custom-control-input">
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

<!-- Change Copy Status Modal -->
<div 
    class         = "modal" 
    id            = "changeCopyStatusModal" 
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="changeCopyStatusForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Change Status</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="custom-control custom-radio py-1" for="available">
                        <input type="radio" id="available" name="customRadio" class="custom-control-input">
                        <div class="custom-control-label">Available</div>
                    </label>
                    <label class="custom-control custom-radio py-1" for="weeded">
                        <input type="radio" id="weeded" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label">Weeded</label>
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-blue">
                    <i class="fas-fa-check mr-1"></i>
                    <span>Save</span>
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Remove Copy Modal -->
<div 
    class         = "modal" 
    id            = "removeCopyModal" 
    data-backdrop = "static" 
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
        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger">
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </div>
    </div>
</div>