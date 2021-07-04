<!-- Add Room Modal -->
<div class="modal" id="addRoomModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form id="addRoomForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add room</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Room Name Field -->
                <div class="form-group">
                    <label for="roomName">Room Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="roomName"
                        name="roomName"
                        placeholder="Enter room here"
                    >
                </div>

                <!-- Building Field -->
                <div class="form-group">
                    <label for="buildingsForAdd">Building</label>
                    <select 
                        name="building" 
                        id="buildingsForAdd" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select building here"
                    ></select>
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

<!-- Edit Room Modal -->
<div class="modal" id="editRoomModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form id="editRoomForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit Room</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Hide id in form -->
                <input type="hidden" name="roomID" id="roomIDForEdit">

                <!-- Room Field -->
                <div class="form-group">
                    <label for="roomName">Room name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="roomNameForEdit"
                        name="roomName"
                        placeholder="Enter room here"
                        value="Roth Bldg."
                    >
                </div>

                <!-- Building Field -->
                <div class="form-group">
                    <label for="buildingForEdit">Building</label>
                    <select 
                        name="building" 
                        id="buildingForEdit" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select building here"
                    ></select>
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
                                name="statusForEdit" 
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
                                name="statusForEdit" 
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

<!-- Remove Room Modal -->
<div class="modal" id="removeRoomModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form  
            class="modal-content"
            id="removeRoomForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove room</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this room?</p>
        </div>

        <!-- Hide id in form -->
        <div class ="form-group d-none">
            <input type="hidden" name="roomID">
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-danger" id="removeRoomModal">
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </form>
    </div>
</div>