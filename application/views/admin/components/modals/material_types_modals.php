<!-- Add Material Type Modal -->
<div 
    class         = "modal" 
    id            = "addMaterialTypeModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="addMaterialTypeForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add material type</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Material Type Field -->
                <div class="form-group">
                    <label for="typeName">Material Type</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="typeName"
                        name="typeName"
                        placeholder="Enter material type here"
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

<!-- Edit Material Type Modal -->
<div 
    class         = "modal" 
    id            = "editMaterialTypeModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="editMaterialTypeForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit material type</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Hide Form -->
                <div class="form-group d-none">
                    <input 
                        type="text" 
                        class="form-control"
                        name="typeID"
                    >
                </div>

                <!-- Material Type Field -->
                <div class="form-group">
                    <label for="typeName">Material Type</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="typeName"
                        name="typeName"
                        placeholder="Enter material type here"
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


<!-- Remove Genre Modal -->
<div 
    class         = "modal" 
    id            = "removeMaterialTypeModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removeMaterialTypeForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove material type</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this material type?</p>
        </div>

        <!-- Hide Form -->
        <div class="form-group d-none">
            <input 
                type="text" 
                class="form-control"
                name="typeID"
            >
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-danger" id="removeMaterialTypeModal">
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </form>
    </div>
</div>


<!-- View Material Type Modal -->
<div 
    class         = "modal" 
    id            = "viewMaterialTypeModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="viewMaterialTypeForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-eye mr-1 text-info"></i>
                <span>View Material Type Details</span>
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
                        <th>Material Type</th>
                        <td id="type">
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