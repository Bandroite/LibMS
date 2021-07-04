<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Page Title -->
    <title><?= $title ?> | Library Management System</title>

    <!-- 
    | =======================================================================================
    | REQUIRED META TAGS
    | =======================================================================================
    -->

    <meta charset="utf-8">
    <meta name="viewport"       content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author"         content="PrensDev">
    <meta name="description"    content="COVID-19 Contact Tracing App and Vaccine Monitoring System">

    <!-- Website Icon -->
    <link rel="icon" href="<?= base_url() ?>public/images/app/icon.png">

    <!-- 
    | =======================================================================================
    | CSS LINKS
    | =======================================================================================
    -->

    <!-- Bootstrap-icons
    <link rel="stylesheet" href="<?= base_url() ?>node_modules/bootstrap-icons/font/bootstrap-icons.css"> -->
    
    <!-- Font-awesome icons -->
    <link rel="stylesheet" href="<?= base_url() ?>node_modules/@fortawesome/fontawesome-free/css/all.min.css">

    <!-- DataTables Bootstrap -->
    <link rel="stylesheet" href="<?= base_url() ?>node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css">

    <!-- Bootstrap-select -->
    <link rel="stylesheet" href="<?= base_url() ?>node_modules/bootstrap-select/dist/css/bootstrap-select.min.css">

    <!-- Custom CSS (includes Bootstrap) -->
    <link rel="stylesheet" href="<?= base_url() ?>public/css/styles.css">

    <!-- 
    | =======================================================================================
    | SCRIPTS
    | =======================================================================================
    -->

    <!-- JQuery -->
    <script src="<?= base_url() ?>node_modules/jquery/dist/jquery.js"></script>

    <!-- jQuery Validation -->
    <script src="<?= base_url() ?>node_modules/jquery-validation/dist/jquery.validate.min.js"></script>

    <!-- Moment JS -->
    <script src="<?= base_url() ?>node_modules/moment/min/moment.min.js"></script>

    <!-- Bootstrap Custom File Input -->
    <script src="<?= base_url() ?>node_modules/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>

    <!-- 
    | =======================================================================================
    | CUSTOM SCRIPTS
    | =======================================================================================
    -->

    <!-- Constants -->
    <script src="<?= base_url() ?>public/js/constants.js"></script>

</head>

<body class="modal-open">

<?php $this->load->view('all/templates/components/preloader') ?>