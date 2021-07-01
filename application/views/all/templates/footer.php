<!-- 
| =======================================================================================
| SCRIPTS
| =======================================================================================
-->

<!-- jQuery JS -->
<script src="<?= base_url() ?>node_modules/jquery/dist/jquery.min.js"></script>

<!-- Bootstrap Bundle JS -->
<script src="<?= base_url() ?>node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

<!-- DataTables JS -->
<script src="<?= base_url() ?>node_modules/datatables/media/js/jquery.dataTables.min.js"></script>

<!-- DataTables Bootstrap JS -->
<script src="<?= base_url() ?>node_modules/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>

<!-- Parallax JS -->
<script src="<?= base_url() ?>node_modules/jquery-parallax.js/parallax.min.js"></script>

<!-- Bootstrap-select JS -->
<script src="<?= base_url() ?>node_modules/bootstrap-select/js/bootstrap-select.js"></script>

<!-- jQuery Validation -->
<script src="<?= base_url() ?>node_modules/jquery-validation/dist/jquery.validate.min.js"></script>

<!-- 
| =======================================================================================
| CUSTOM SCRIPTS
| =======================================================================================
-->

<!-- Main JS -->
<script src="<?= base_url() ?>public/js/main.js"></script>

</body>
</html>

<!-- 
| =======================================================================================
| CUSTOM SCRIPTS
| =======================================================================================
-->

<?php if(isset($dir_path) && isset($AJAX_Files)) foreach($AJAX_Files as $AJAX_File) { ?>
    <script src="<?= base_url() . 'public/js/ajax/' . $dir_path . '/' . $AJAX_File . '.ajax.js'?>"></script>
<?php } ?>