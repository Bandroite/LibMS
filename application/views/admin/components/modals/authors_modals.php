<!-- Add Author Modal -->
<div class="modal" id="addAuthorModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form id="addAuthorForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-plus mr-1 text-blue"></i>
                    <span>Add author</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">

                <!-- First Name Field -->
                <div class="form-group">
                    <label for="authorFirstName">First Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="authorFirstNameForAdd"
                        name="authorFirstName"
                        placeholder="Enter first name here"
                    >
                </div>

                <!-- Middle Name Field -->
                <div class="form-group">
                    <label for="authorMiddleName">Middle Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="authorMiddleNameForAdd"
                        name="authorMiddleName"
                        placeholder="Enter middle name here"
                    >
                </div>

                <!-- Last Name Field -->
                <div class="form-group">
                    <label for="authorLastName">Last Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="authorLastNameForAdd"
                        name="authorLastName"
                        placeholder="Enter last name here"
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

<!-- Edit Author Modal -->
<div class="modal" id="editAuthorModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form id="editAuthorForm" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-edit mr-1 text-blue"></i>
                    <span>Edit author</span>
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
                        name="authorID"
                    >
                </div>

                <!-- First Name Field -->
                <div class="form-group">
                    <label for="authorFirstName">First Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="authorFirstNameForEdit"
                        name="authorFirstName"
                        placeholder="Enter first name here"
                    >
                </div>

                <!-- Middle Name Field -->
                <div class="form-group">
                    <label for="authorMiddleName">Middle Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="authorMiddleNameForEdit"
                        name="authorMiddleName"
                        placeholder="Enter middle name here"
                    >
                </div>

                <!-- Last Name Field -->
                <div class="form-group">
                    <label for="authorLastName">Last Name</label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="authorLastNameForEdit"
                        name="authorLastName"
                        placeholder="Enter last name here"
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

<!-- Remove Author Modal -->
<div class="modal" id="removeAuthorModal" data-backdrop="static" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content" id="removeAuthorForm"    >
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-trash-alt mr-1 text-danger"></i>
                    <span>Remove author</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Hide id in form -->
                <input type="hidden" name="authorID">
                <p>Are you sure you want to remove this author?</p>
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
                    id="removeAuthorModal"
                >
                    <i class="fas fa-trash-alt mr-1"></i>
                    <span>Remove</span>
                </button>
            </div>
        </form>
    </div>
</div>

<!-- View Author Modal -->
<div class="modal fade" id="viewAuthorModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form 
            class="modal-content"
            id="viewAuthorForm"
        >
        <div class="modal-header">
            <h5 class="modal-title">
                <i class="fas fa-eye mr-1 text-info"></i>
                <span>View Author Details</span>
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
                        <th>Authors' Name</th>
                        <td id="authorFullName">
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
        </form>
    </div>
</div>