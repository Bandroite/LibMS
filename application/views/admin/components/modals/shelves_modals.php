<!-- Add Shelf Modal -->
<div 
    class         = "modal" 
    id            = "addShelfModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="addShelfForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add shelf</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Shelf Name Field -->
                <div class="form-group">
                    <label for="shelf">Shelf Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="shelf"
                        name="shelf"
                        placeholder="Enter shelf here"
                    >
                </div>

                <!-- Building Field -->
                <div class="form-group">
                    <label for="building">Building</label>
                    <select 
                        name="building" 
                        id="buildingsForAddShelf" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select building here"
                    ></select>
                </div>

                <!-- Room Field -->
                <div class="form-group">
                    <label for="room">Room</label>
                    <select 
                        name="room" 
                        id="roomsForAddShelf" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select room here"
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

<!-- Edit Shelf Modal -->
<div 
    class         = "modal" 
    id            = "editShelfModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="editShelfForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit Shelf</span>
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
                    <input type="text" name="shelfID">
                </div>

                <!-- Shelf Field -->
                <div class="form-group">
                    <label for="shelfName">Shelf name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="shelfName"
                        name="shelfName"
                        placeholder="Enter room here"
                        value="Roth Bldg."
                    >
                </div>

                <!-- Room Field -->
                <div class="form-group">
                    <label for="room">Room</label>
                    <select 
                        name="room" 
                        id="room" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select room here"
                    >
                        <option value="Room1" selected>Room1</option>
                        <option value="Room1">Room1</option>
                        <option value="Room1">Room1</option>
                        <option value="Room1">Room1</option>
                        <option value="Room1">Room1</option>
                        <option value="Room1">Room1</option>
                        <option value="Room1">Room1</option>
                    </select>
                </div>

                <!-- Building Field -->
                <div class="form-group">
                    <label for="building">Building</label>
                    <select 
                        name="building" 
                        id="building" 
                        class="selectpicker form-control border"
                        data-style="form-control"
                        data-live-search="true"
                        data-size="5"
                        title="Select building here"
                    >
                        <option value="Building1" selected>Building1</option>
                        <option value="Building1">Building1</option>
                        <option value="Building1">Building1</option>
                        <option value="Building1">Building1</option>
                        <option value="Building1">Building1</option>
                        <option value="Building1">Building1</option>
                        <option value="Building1">Building1</option>
                    </select>
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

<!-- Remove Shelf Modal -->
<div 
    class         = "modal" 
    id            = "removeShelfModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removeShelfForm"
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
                <input type="text" name="shelfID">
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-danger" id="removeShelfModal">
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </form>
    </div>
</div>