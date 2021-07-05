<div class="mb-4">
    <h2 class="mb-0">Edit material</h2>
    <div class="text-secondary">Edit borrower here by filling up the required fields</div>
</div>

<!-- Show Alert -->
<div id="alertContainer"></div>

<form id="editMaterialForm">

    <!-- Material Details -->
    <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-info-circle text-primary mr-1"></i>
            <span>Material Details</span>
        </div>
        <div class="card-body">
            <div class="row">

                <!-- Image Field -->
                <div class="col-md-4">
                    
                    <label for="image">Upload an image</label>

                    <!-- Material image -->
                    <div class="d-flex justify-content-center mb-2">
                        <div class="material-img-preview" id="materialImgContainer">
                            <div class="bg-muted flex-center text-secondary rounded-lg" style="width: 18rem; height: 25rem">
                                <span>Material image will display here</span>
                            </div>
                        </div>
                    </div>

                    <!-- File Input for Image -->
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="uploadMaterialImg">
                            <label class="custom-file-label" for="uploadMaterialImg">Choose file</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    
                    <!-- Title Field -->
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                            type="text" 
                            class="form-control"
                            id="title"
                            name="title"
                            placeholder="Enter title here"
                        >
                    </div>

                    <!-- Authors -->
                    <div class="form-group">
                        <label for="authorsForEditMaterial">Authors</label>
                        <select 
                            name="authors" 
                            id="authorsForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-header="Select one or more authors here"
                            data-size="5"
                            title="Select one or more authors here"
                            multiple
                        ></select>
                    </div>

                    <!-- Type -->
                    <div class="form-group">
                        <label for="materialTypeForEditMaterial">Type</label>
                        <select 
                            name="type" 
                            id="materialTypeForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            title="Select type here"
                        ></select>
                    </div>

                    <!-- Genre -->
                    <div class="form-group">
                        <label for="genresForEditMaterial">Genres</label>
                        <select 
                            name="genre" 
                            id="genresForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            data-header="Select one or more genres here"
                            title="Select one or more genres here"
                            multiple
                        ></select>
                    </div>

                    <!-- Language -->
                    <div class="form-group">
                        <label for="languageForEditMaterial">Language</label>
                        <select 
                            name="language" 
                            id="languageForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            title="Select language here"
                        ></select>
                    </div>
                    
                    <!-- Format -->
                    <div class="form-group">
                        <label for="format">Format</label>
                        <input 
                            type="text" 
                            class="form-control"
                            id="format"
                            name="format"
                            placeholder="Enter format here"
                        >
                    </div>

                </div>
            </div>
            
            <div class="row my-md-3">
                <div class="col-md-6">

                    <!-- Standard Number -->
                    <div class="form-group">
                        <label for="standardNumber">Standard Number</label>
                        <input 
                            type="text" 
                            class="form-control"
                            id="standardNumber"
                            name="standardNumber"
                            placeholder="Enter standard number here"
                        >
                    </div>

                    <!-- Standard Type -->
                    <div class="form-group">
                        <label for="standardType">Standard Type</label>
                        <select 
                            name="genre" 
                            id="genre" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            title="Select standard type here"
                        >
                            <option value="ISBN">ISBN</option>
                            <option value="ISSN">ISSN</option>
                        </select>
                    </div>

                </div>

                <div class="col-md-6">

                    <!-- Edition Field -->
                    <div class="form-group">
                        <label for="edition">Edition</label>
                        <input 
                            type="text" 
                            class="form-control"
                            id="edition"
                            name="edition"
                            placeholder="Enter edition here"
                        >
                    </div>

                    <!-- Edition Year Field -->
                    <div class="form-group">
                        <label for="editionYear">Edition Year</label>
                        <input 
                            type="number"
                            min="1100"
                            max="9999" 
                            class="form-control"
                            id="editionYear"
                            name="editionYear"
                            placeholder="Enter year here"
                        >
                    </div>

                </div>
            </div>

            <div class="form-row my-md-3">

                <!-- Publisher Name Field -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="publisherName">Publisher Name</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="publisherName"
                            name="publisherName"
                            placeholder="Enter publisher name here"
                        >
                    </div>
                </div>

                <!-- Publisher Year Field -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="publisherYear">Publisher Year</label>
                        <input 
                            type="text"
                            class="form-control"
                            id="publisherYear"
                            name="publisherYear"
                            placeholder="Enter publisher year here"
                        >
                    </div>
                </div>

                <!-- Publication Country Field -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="pubCountryForEditMaterial">Publication Country</label>
                        <select 
                            name="publisherName" 
                            id="pubCountryForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            title="Select publisher here"
                        ></select>
                    </div>
                </div>
            </div>
            
            <!-- Series Year Field -->
            <div class="form-group">
                <label for="seriesYear">Series Year</label>
                <input 
                    type="number"
                    min="1100"
                    max="9999" 
                    class="form-control"
                    id="seriesYear"
                    name="seriesYear"
                    placeholder="Enter series year here"
                >
            </div>

            <!-- Description Field -->
            <div class="form-group">
                <label for="description">Description</label>
                <textarea 
                    class="form-control" 
                    name="description" 
                    id="description" 
                    rows="8"
                    placeholder="Enter description here"
                ></textarea>
            </div>
        </div>

    </div>

    <!-- Location -->
    <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-map-marker-alt mr-1 text-primary"></i>
            <span>Location</span>
        </div>
        <div class="card-body">
            <div class="form-row">
                
                <!-- Building -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="buildingForEditMaterial">Building</label>
                        <select 
                            name="building" 
                            id="buildingForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            title="Select building here"
                        ></select>
                    </div>
                </div>

                <!-- Room -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="roomForEditMaterial">Room</label>
                        <select 
                            name="room" 
                            id="roomForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            title="Select room here"
                        ></select>
                    </div>
                </div>

                <!-- Shelf -->
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="shelfForEditMaterial">Shelf</label>
                        <select 
                            name="shelf" 
                            id="shelfForEditMaterial" 
                            class="selectpicker form-control border"
                            data-style="form-control"
                            data-live-search="true"
                            data-size="5"
                            title="Select shelf here"
                        ></select>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- User Action -->
    <div class="form-group text-center mb-4">
        <button type="button" class="btn btn-muted" onclick="history.back()">Cancel</button>
        <button type="submit" class="btn btn-blue">
            <i class="fas fa-plus mr-1"></i>
            <span>Save</span>
        </button>
    </div>
</form>