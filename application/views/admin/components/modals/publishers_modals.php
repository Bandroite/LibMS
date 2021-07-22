<!-- Add Publisher Modal -->
<div 
    class         = "modal" 
    id            = "addPublisherModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="addPublisherForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add publisher</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Publisher Field -->
                <div class="form-group">
                    <label for="publisherName">Publisher</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="publisherName"
                        name="publisherName"
                        placeholder="Enter publisher name here"
                    >
                </div>

                <!-- Status Field -->
                <div class="form-group">
                    <label for="availableStatus">Status</label>
                    <div class="form-control">
                        <label 
                            class="custom-control custom-radio custom-control-inline" 
                            for="activeForAdd"
                        >
                            <input 
                                type="radio" 
                                id="activeForAdd" 
                                name="status" 
                                class="custom-control-input"
                                value="Active"
                            >
                            <div class="custom-control-label">Active</div>
                        </label>
                        <label 
                            class="custom-control custom-radio custom-control-inline" 
                            for="inactiveForAdd"
                        >
                            <input 
                                type="radio" 
                                id="inactiveForAdd" 
                                name="status" 
                                class="custom-control-input"
                                value="Inactive"
                            >
                            <div class="custom-control-label">Inactive</div>
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

<!-- Edit Publisher Modal -->
<div 
    class         = "modal" 
    id            = "editPublisherModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="editPublisherForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit publisher</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Hide id in form -->
                <div class ="form-group d-none">
                    <input type="text" name="publisherID">
                </div>

                <!-- Publisher -->
                <div class="form-group">
                    <label for="publisherName">Publisher</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="publisherName"
                        name="publisherName"
                        placeholder="Enter publisher here"
                    >
                </div>

                <!-- Status Field -->
                <div class="form-group">
                    <label for="availableStatus">Status</label>
                    <div class="form-control">
                        <label 
                            class="custom-control custom-radio custom-control-inline" 
                            for="activeForEdit"
                        >
                            <input 
                                type="radio" 
                                id="activeForEdit" 
                                name="status" 
                                class="custom-control-input"
                                value="Active"
                            >
                            <div class="custom-control-label">Active</div>
                        </label>
                        <label 
                            class="custom-control custom-radio custom-control-inline" 
                            for="inactiveForEdit"
                        >
                            <input 
                                type="radio" 
                                id="inactiveForEdit" 
                                name="status" 
                                class="custom-control-input"
                                value="Inactive"
                            >
                            <div class="custom-control-label">Inactive</div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-blue">
                    <i class="fas fa-check mr-1"></i>
                    <span>Save</span>
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Remove Publisher Modal -->
<div 
    class         = "modal" 
    id            = "removePublisherModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removePublisherForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove publisher</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this publisher?</p>
        </div>

        <!-- Hide id in form -->
        <div class ="form-group d-none">
                <input type="text" name="publisherID">
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-danger" id="removePublisherModal">
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </form>
    </div>
</div>

<!-- View Publisher Modal -->
<div 
    class         = "modal" 
    id            = "viewPublisherModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="viewPublisherForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-eye mr-1 text-info"></i>
                <span>View Publisher Details</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>

        <div class="modal-body">
            <div>
                <table class="table">
                    <tr>
                        <th>Genre</th>
                        <td id="publisher">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>

                    <tr>
                        <th>Status</th>
                        <td id="status">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>

                    <tr>
                        <th>Added By</th>
                        <td id="addedBy">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Updated By</th>
                        <td id="updatedBy">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>

                    <tr>
                        <th>Added At</th>
                        <td id="addedAt">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Updated At</th>
                        <td id="updatedAt">
                            <span class="text-secondary font-italic">No data</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="modal-footer">
            <button 
                type="button" 
                class="btn btn-muted" 
                data-dismiss="modal"
            >
                OK
            </button>
        </div>
        </form>
    </div>
</div>