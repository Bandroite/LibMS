<!-- 
| =======================================================================================
| AJAX SCRIPTS
| =======================================================================================
-->
<?php if(isset($dir_path) && isset($AJAX_Files)) foreach($AJAX_Files as $AJAX_File) { ?>
    <script src="<?= base_url() . 'public/js/ajax/' . $dir_path . '/' . $AJAX_File . '.ajax.js'?>"></script>
<?php } ?>