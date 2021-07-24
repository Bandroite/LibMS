<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * ========================================================================
 * * USER CONTROLLER
 * ------------------------------------------------------------------------
 * This is the home controller
 * ========================================================================
 */

class User extends CI_Controller {

    /**
     * ========================================================================
     * * CUSTOM-DEFINED METHODS
     * ========================================================================
     */

	// Directory Folder of Views
    private String $dir = "user";

    // AJAX Files
    private Array $AJAX_files = [
        'account',
        'favorites',
        'transactions',
    ];

    // Load Views Method
    // This load the header and the footer templates automatically when called
    private function load_views(String $pageTitle, Array $views) {

        $userType = $this->session->userType;

        if(!($userType === 'Staff' || $userType === 'Student')) {
            $this->Error_model->page_not_found();
        } else {
        
            // This load the header templates
            $this->load->view('all/templates/header', ['title'=>$pageTitle]);
    
            // This load the navbar components
            $this->load->view('all/components/navbar');
            
            // This load all the content throwed from parameter
            foreach($views as $view) {
                $viewPath = $this->dir . '/' . $view[0];
                $viewData = isset($view[1]) ? $view[1] : NULL;
                $this->load->view($viewPath, $viewData);
            }

            // This load the footer components
            $this->load->view('all/components/footer');
            
            // This load the footer templates
            $this->load->view('all/templates/footer', [
                'dir_path'   => 'borrower',
                'AJAX_Files' => $this->AJAX_files
            ]);
        }
    }

    /**
     * ========================================================================
     * * VIEWS AND CONTROLLER METHODS
     * ========================================================================
     */

    // Profile
    public function profile() {
        $this->load_views('Profile', [
            ['components/banner', ['title' => 'Your Profile']],
            ['components/modals/profile_modals'],
            ['profile']
        ]);
    }

    // Favorites
    public function favorites() {
        $currentPage = $this->input->get('page');
        if($currentPage == NULL) {
            redirect('me/favorites/?page=1');
        } else if($currentPage == 0) {
            $this->Error_model->page_not_found();
        } else {
            $this->load_views('Favorites', [
                ['components/banner', ['title' => 'Your Favorites']],
                ['favorites']
            ]);
        }
    }

    // Transactions
    public function transactions() {
        $this->load_views('Borrowed Books', [
            ['components/banner', ['title' => 'Your transactions']],
            ['transactions']
        ]);
    }

    // Edit Information
    public function edit_info() {
        $this->load_views('Edit Information', [
            ['components/banner', ['title' => 'Edit your information']],
            ['edit_info']
        ]);
    }

    // Account Setting
    public function account_settings() {
        $this->load_views('Edit Information', [
            ['components/banner', ['title' => 'Account Settings']],
            ['account_settings']
        ]);
    }
}