<!-- Add Publication country Modal -->
<div 
    class         = "modal" 
    id            = "addPublicationCountryModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="addPublicationCountryForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add publication country</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Publication Country Field -->
                <div class="form-group">
                    <label for="country">Publlication Country</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="country"
                        name="country"
                        placeholder="Enter publication country name here"
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

<!-- Edit Publication Country Modal -->
<div 
    class         = "modal" 
    id            = "editPublicationCountryModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form id="editPublicationCountryForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit publication country</span>
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
                    <input type="text" name="pubCountryID">
                </div>

                <!-- Publication Country -->
                <div class="form-group">
                    <label for="country">Publication Country</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="editCountry"
                        name="country"
                        placeholder="Enter publication Country here"
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

<!-- Remove Publication Country Modal -->
<div 
    class         = "modal" 
    id            = "removePublicationCountryModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removePublicationCountryForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove publication country</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this publication country?</p>
        </div>

        <!-- Hide id in form -->
        <div class ="form-group d-none">
                <input type="text" name="pubCountryID">
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-muted" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-danger" id="removePublicationCountryModal">
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </form>
    </div>
</div>

<!-- View Publication Country Modal -->
<div 
    class         = "modal" 
    id            = "viewPublicationCountryModal" 
    data-backdrop = "static" 
    data-keyboard = "false"
    tabindex      = "-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="viewPublicationCountryForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-eye mr-1 text-info"></i>
                <span>View Publication Country Details</span>
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
                        <th>Publication Country</th>
                        <td id="publicationCountry">
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