<!-- Mark As Returned Modal -->
<div class="modal" id="markAsReturnedModal" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content" id="markAsReturnedForm">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-check mr-1 text-primary"></i>
                    <span>Mark as Returned</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="borrowIDForReturn" name="borrowID">
                <p>Mark this record as returned?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Mark as Returned</button>
            </div>
        </form>
    </div>
</div>

<!-- Mark As Weeded Modal -->
<div class="modal" id="markAsWeededModal" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content" id="markAsWeededForm">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-check mr-1 text-dark"></i>
                    <span>Mark as Weeded</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="borrowIDForWeed" name="borrowID">
                
                <!-- Description for Weeded -->
                <div class="form-group">
                    <label for="weedingsDescription">Please describe the condition of the copy</label>
                    <textarea 
                        class="form-control"
                        name="description" 
                        id="weedingsDescription" 
                        rows="5"
                        placeholder="Type description here"
                    ></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-dark">Mark as Weeded</button>
            </div>
        </form>
    </div>
</div>

<!-- Remove Borrowed Record Modal -->
<div class="modal" id="removeMaterialsBorrowRecordsModal" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removeMaterialsBorrowRecordsForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove record</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this record?</p>
        </div>

        <!-- Hide id in form -->
        <div class ="form-group d-none">
                <input type="text" name="borrowID">
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
                id="removeMaterialsBorrowRecordsModal" 
            >
                Remove
            </button>
        </div>
        </form>
    </div>
</div>