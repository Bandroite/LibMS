<!-- Add Building Modal -->
<div 
    class         = "modal" 
    id            = "addBuildingModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            id="addBuildingForm" 
            class="modal-content"
        >
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add building</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Building Name Field -->
                <div class="form-group">
                    <label for="buildingName">Building Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="buildingName"
                        name="buildingName"
                        placeholder="Enter building here"
                    >
                </div>

                <!-- Location Field -->
                <div class="form-group">
                    <label for="location">Location</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="location"
                        name="location"
                        placeholder="Enter building here"
                    >
                </div>

                <!-- Status Field -->
                <div class="form-group">
                    <label for="buildingStatusForAdd">Status</label>
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

<!-- Edit Building Modal -->
<div 
    class         = "modal" 
    id            = "editBuildingModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            id="editBuildingForm" 
            class="modal-content"
        >
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit building</span>
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
                        name="buildingID"
                        placeholder="Enter building here"
                    >
                </div>
                <!-- Building Field -->
                <div class="form-group">
                    <label for="buildingNameForEdit">Building name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="buildingNameForEdit"
                        name="buildingName"
                        placeholder="Enter building here"
                    >
                </div>

                <!-- Location Field -->
                <div class="form-group">
                    <label for="locationForEdit">Location</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="locationForEdit"
                        name="location"
                        placeholder="Enter building here"
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

<!-- Remove Building Modal -->
<div 
    class         = "modal" 
    id            = "removeBuildingModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content" 
            id="removeBuildingForm"
        >
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-trash-alt mr-1 text-danger"></i>
                    <span>Remove building</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to remove this building?</p>
            </div>

            <!-- Hide id in form -->
            <div class ="form-group d-none">
                <input type="text" name="buildingID">
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
                    type="submit" 
                    class="btn btn-danger"
                    id="removeBuildingModal"
                >
                    <i class="fas fa-trash-alt mr-1"></i>
                    <span>Remove</span>
                </button>
            </div>
        </form>
    </div>
</div>