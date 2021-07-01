<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * ========================================================================
 * * HOME CONTROLLER
 * ------------------------------------------------------------------------
 * This is the home controller
 * ========================================================================
 */

class Home extends CI_Controller {

    
    /**
     * ========================================================================
     * * CUSTOM VARIABLES AND METHODS
     * ========================================================================
     */

	// Directory Folder of Views
    private String $dir = "home";

    // AJAX Files
    private Array $AJAX_files = [
        'login'
    ];
    
    // Load Views Method
    // This load the header and the footer templates automatically when called
    public function load_views(String $pageTitle, Array $views) {

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

        // This load all the AJAX files
        $this->load->view('all/templates/scripts', [
            'dir_path'   => $this->dir,
            'AJAX_Files' => $this->AJAX_files
        ]);

        // This load the footer templates
        $this->load->view('all/templates/footer');
    }

    /**
     * ========================================================================
     * * VIEWS AND CONTROLLER METHODS
     * ========================================================================
     */

    // Index
	public function index() {
		$this->load_views('Welcome to LibMS', [['index']]);
	}

    // Browse
	public function browse() {
		$this->load_views('Browse', [
            ['components/banner', ["title" => "Browse All Materials"]],
            ['browse']
        ]);
	}

    // Advance Search
	public function advance_search() {
		$this->load_views('Advance Search', [
            ['components/banner', ["title" => "Advance Search"]],
            ['advance_search']
        ]);
	}

    // About Us
	public function about_us() {
		$this->load_views('About Us', [
            ['components/banner', ["title" => "About Us"]],
            ['about_us']
        ]);
	}

    // Terms and COnditions
	public function terms_and_conditions() {
		$this->load_views('Terms and Conditions', [
            ['components/banner', ["title" => "Terms and Conditions"]],
            ['terms_and_conditions']
        ]);
	}
    
    // Materials
    public function materials($material_ID = NULL) {
        if($material_ID == NULL) {
            $this->Error_model->page_not_found();
        } else {
            $this->load_views('Material details', [
                ['components/banner', ["title" => "Material Details"]],
                ['material_details']
            ]);
        }
    }

    // Login
    public function login() {
		$this->load_views('Login', [['login']]);
    }

    // UI (for testing purposes)
    public function ui() {
		$this->load_views('UI', [['_ui']]);
    }

}
