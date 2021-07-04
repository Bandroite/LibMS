<!-- Invalid Image Modal -->
<div class="modal" id="invalidFileModal" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content" id="removeBuildingForm">
            <div class="modal-header">
                <h5 class="modal-title">
                    <i class="fas fa-exlamation-triangle mr-1 text-danger"></i>
                    <span>Oops!</span>
                </h5>
                <button type="button" class="btn btn-sm btn-muted" data-dismiss="modal">
                    <span aria-hidden="true">
                        <i class="fas fa-times"></i>
                    </span>
                </button>
            </div>

            <div class="modal-body">
                <p>The file must be an image type</p>
            </div>

            <div class="modal-footer">
                <button 
                    type="button" 
                    class="btn btn-primary" 
                    data-dismiss="modal"
                >Okay, I got it!</button>
            </div>
        </form>
    </div>
</div>