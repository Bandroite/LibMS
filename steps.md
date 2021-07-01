# Steps

1. Add .htaccess
2. Add base url in application > config > config.php 
3. Add to application > config > autoload.php

```
$autoload['helper'] = [
    'form',
    'url',
    'url_helper',
];

```
3. Add folder public > css > styles, sb_admin
4. Download zip folder from [SB-Admin](https://github.com/startbootstrap/startbootstrap-sb-admin)
5. Extract the file then copy the files from src > scss
6. Paste in public > css > sb_admin
7. npm init
8. npm install bootstrap
9. package.json > 

```
"dependencies" : {
    "@fortawesome/fontawesome-free": "^5.15.3",
    "bootstrap": "^4.6.0",
    "datatables-bootstrap": "0.0.1",
    "datatables.net-bs4": "^1.10.24",
    "jquery": "^3.6.0",
    "jquery-parallax.js": "^1.5.0"
}
```
10. npm install
11. Add templates > header.php , footer.php in application > views
12. Add to header

```
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
    <link rel="icon" href="<?= base_url() ?>public/images/brand/icon.jpg">

    <!-- 
    | =======================================================================================
    | CSS LINKS
    | =======================================================================================
    -->

    <!-- Custom CSS (includes Bootstrap) -->
    <link rel="stylesheet" href="<?= base_url() ?>public/css/styles.css">

    <!-- Bootstrap-icons -->
    <link rel="stylesheet" href="<?= base_url() ?>node_modules/bootstrap-icons/font/bootstrap-icons.css">
    
    <!-- Font-awesome icons -->
    <link rel="stylesheet" href="<?= base_url() ?>node_modules/@fortawesome/fontawesome-free/css/all.min.css">

    <!-- 
    | =======================================================================================
    | SCRIPTS
    | =======================================================================================
    -->

    <!-- JQuery -->
    <script src="<?= base_url() ?>node_modules/jquery/dist/jquery.js"></script>

</head>

<body>

```
13. Add to footer

```
<!-- 
| =======================================================================================
| SCRIPTS
| =======================================================================================
-->

<!-- jQuery JS -->
<script src="<?= base_url() ?>node_modules/jquery/dist/jquery.min.js"></script>

<!-- Bootstrap Bundle JS -->
<script src="<?= base_url() ?>node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

<!-- 
| =======================================================================================
| CUSTOM SCRIPTS
| =======================================================================================
-->

<!-- Main JS -->
<script src="<?= base_url() ?>public/js/main.js"></script>

</body>
</html>

```
14. Add public > js > main.js

```
// Toggle all tooltips
$('[data-toggle="tooltip"]').tooltip();

```
15. For every controller, copy paste this

```
// Directory Folder of Views
    private String $dir = "home"; 

    // Load Views Method
    // This load the header and the footer templates automatically when called
    public function load_views(String $pageTitle, Array $views) {
        $this->load->view('templates/header', ['title'=>$pageTitle]);
        foreach($views as $view) {
            $viewPath = $this->dir . '/' . $view[0];
            $viewData = isset($view[1]) ? $view[1] : NULL;
            $this->load->view($viewPath, $viewData);
        }
        $this->load->view('templates/footer');
    }

```

16. create scss file to public > css 

17. Add to public > css > styles > _components.scss , _variables.scss

18. TO make public folders not accessible, make index.php file and insert the code
> <?php header('Location: ../forbidden') ?>
change the location depends on the path