<div class="card card-status card-<?= $theme ?> mb-4">
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="card-icon-container alert-<?= $theme ?> text-<?= $theme ?>">
                <i class="fas fa-<?= $icon ?> text-<?= $theme ?>"></i>
            </div>
            <div class="text-right">
                <h6 class="m-0"><?= $title ?></h6>
                <h2 
                    class = "text-<?= $theme ?>"
                    id    = "<?= $id ?>"
                ><?= $value ?></h2>
            </div>
        </div>
    </div>
</div>