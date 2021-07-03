<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller']   = 'home';
$route['404_override']         = 'auth/page_not_found';
$route['translate_uri_dashes'] = FALSE;


// Auth Routes
$route['oAuth']             = 'auth/oAuth';
$route['logout']            = 'auth/logout';
$route['forbidden']         = 'auth/forbidden';
$route['page-not-found']    = 'auth/page-not-found';


// Main Routes
$route['browse']                    = 'home/browse';
$route['advance-search']            = 'home/advance_search';
$route['about-us']                  = 'home/about_us';
$route['terms-and-conditions']      = 'home/terms_and_conditions';
$route['login']                     = 'home/login';
$route['materials/(:any)']          = 'home/materials/$1';


// User Routes
$route['me']                  = 'user/profile';
$route['me/favorites']        = 'user/favorites';
$route['me/borrowed-books']   = 'user/borrowed_books';
$route['me/edit-info']        = 'user/edit_info';
$route['me/account-settings'] = 'user/account_settings';
$route['me/logout']           = 'user/logout';


// Admin Routes
$route['admin']                         = 'admin/dashboard';
$route['admin/transactions']            = 'admin/transactions';
$route['admin/borrowed']                = 'admin/borrowed';
$route['admin/borrowers']               = 'admin/borrowers';
$route['admin/add-borrower']            = 'admin/add_borrower';
$route['admin/returned']                = 'admin/returned';
$route['admin/materials/(:book_ID)']    = 'admin/materials/$1'; 
$route['admin/add-material']            = 'admin/add_material';
$route['admin/edit-material']            = 'admin/edit_material';
$route['admin/genres']                  = 'admin/genres';
$route['admin/material-types']          = 'admin/material_types';
$route['admin/authors']                 = 'admin/authors';
$route['admin/publishers']              = 'admin/publishers';
$route['admin/publication-countries']   = 'admin/publication_countries';
$route['admin/languages']               = 'admin/languages';
$route['admin/weeded-materials']        = 'admin/weeded_materials';
$route['admin/buildings']               = 'admin/buildings';
$route['admin/rooms']                   = 'admin/rooms';
$route['admin/shelves']                 = 'admin/shelves';
$route['admin/programs-and-sections']   = 'admin/programs_and_sections';
$route['admin/logout']                  = 'admin/logout';
