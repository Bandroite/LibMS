<!-- Add Language Modal -->
<div class="modal" id="addLanguageModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form id="addLanguageForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add language</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- Language Field -->
                <div class="form-group">
                    <label for="language">Language</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="language"
                        name="language"
                        placeholder="Enter language here"
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

<!-- Edit Language Modal -->
<div class="modal" id="editLanguageModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form id="editLanguageForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit language</span>
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
                        <input type="text" name="languageID">
                </div>

                <!-- Language Field -->
                <div class="form-group">
                    <label for="language">Language</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="language"
                        name="language"
                        placeholder="Enter language here"
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

<!-- Remove Language Modal -->
<div class="modal" id="removeLanguageModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="removeLanguageForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-trash-alt mr-1 text-danger"></i>
                <span>Remove language</span>
            </h5>
            <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this language?</p>
        </div>

        <!-- Hide id in form -->
        <div class ="form-group d-none">
                <input type="text" name="languageID">
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
                id="removeLanguageModal"
            >
                <i class="fas fa-trash-alt mr-1"></i>
                <span>Remove</span>
            </button>
        </div>
        </form>
    </div>
</div>

<!-- View Language Modal -->
<div class="modal fade" id="viewLanguageModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-eye mr-1 text-info"></i>
                    <span>View Language Details</span>
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
                            <th>Language</th>
                            <td id="languageName">
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
                >Close</button>
            </div>
        </div>
    </div>
</div>