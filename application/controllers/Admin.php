<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * ========================================================================
 * * ADMIN CONTROLLER
 * ------------------------------------------------------------------------
 * This is the home controller
 * ========================================================================
 */

class Admin extends CI_Controller {

    /**
     * ========================================================================
     * * CUSTOM-DEFINED VARIABLES AND METHODS
     * ========================================================================
     */

	// Directory Folder of Views
    private String $dir = "admin";

    private Array $AJAX_Files = [
        'authors',
        'buildings',
        'copies',
        'publishers',
        'users'
    ];

    // Load Views Method
    // This load the header and the footer templates automatically when called
    public function load_views(String $pageTitle, String $activeNavlink, Array $views) {
        
        // Get the userType based on session
        $userType = $this->session->userType;

        // Check if the userType is Librarian
        if(!($userType === 'Librarian')) {
            $this->Error_model->page_not_found();
        } else {
            $this->load->view('all/templates/header', ['title'=>$pageTitle]);
            
            $this->load->view($this->dir . '/templates/admin_header', [
                'active' => $activeNavlink
            ]);
            foreach($views as $view) {
                $viewPath = $this->dir . '/' . $view[0];
                $viewData = isset($view[1]) ? $view[1] : NULL;
                $this->load->view($viewPath, $viewData);
            }
            $this->load->view($this->dir. '/templates/admin_footer');
            $this->load->view('all/templates/footer', [
                'dir_path'   => 'librarian',
                'AJAX_Files' => $this->AJAX_Files
            ]);
        }
    }

    /**
     * ========================================================================
     * * VIEWS AND CONTROLLER METHODS
     * ========================================================================
     */

    // Dashboard
	public function dashboard() {
        $this->load_views('Dashboard', 'Dashboard', [['dashboard']]);
	}

    // Transactions
    public function transactions() {
        $this->load_views('Transaction List', 'Transaction List', [['transactions']]);
    }

    // Borrowed
	public function borrowed() {
        $this->load_views('Borrowed Books', 'Borrowed Books', [
            ['components/modals/borrowed_actions_modals'],
            ['borrowed'],
        ]);
	}

    // Borrowers
	public function borrowers() {
        $this->load_views('Borrowers', 'Borrowers', [['borrowers']]);
	}

    // Borrowers
	public function add_borrower() {
        $this->load_views('Add Borrower', 'Borrowers', [['add_borrower']]);
	}

    // Retuned
	public function returned() {
        $this->load_views('Returned Books', 'Returned Books', [
            ['components/modals/returned_actions_modals'],
            ['returned'],
        ]);
	}

    // Materials
	public function materials($book_ID = NULL) {
        if($book_ID == NULL) {
            $this->load_views('Materials', 'Materials', [
                ['components/modals/materials_modals'],
                ['materials'],
            ]);
        } else {
            $this->load_views('Material Details', 'Materials', [
                ['components/modals/material_details_modals'],
                ['material_details'],
            ]);
        }
	}

    // Add Material
	public function add_material() {
        $this->load_views('Add Material', 'Materials', [['add_material']]);
	}

    // Edit Material
	public function edit_material() {
        $this->load_views('Edit Material', 'Materials', [['edit_material']]);
	}

    // Genre
	public function genres() {
        $this->load_views('Genres', 'Genres', [
            ['components/modals/genres_modals'],
            ['genres'],
        ]);
	}
    
    // Material Types
	public function material_types() {
        $this->load_views('Material Types', 'Material Types', [
            ['components/modals/material_types_modals'],
            ['material_types']
        ]);
	}

    // Authors
	public function authors() {
        $this->load_views('Authors', 'Authors', [
            ['components/modals/authors_modals'],
            ['authors'],
        ]);
	}

    // Publishers
	public function publishers() {
        $this->load_views('Publishers', 'Publishers', [
            ['components/modals/publishers_modals'],
            ['publishers'],
        ]);
	}

    // Publication Countries
	public function publication_countries() {
        $this->load_views('Publication Countries', 'Publication Countries', [['publication_countries']]);
	}

    // Languages
	public function languages() {
        $this->load_views('Languages', 'Languages', [
            ['components/modals/languages_modals'],
            ['languages'],
        ]);
	}

    // Weeded Materials
	public function weeded_materials() {
        $this->load_views('Weeded Materials', 'Weeded Materials', [['weeded_materials']]);
	}

    // Buildings
	public function buildings() {
        $this->load_views('Buildings', 'Buildings', [
            ['components/modals/buildings_modals'],
            ['buildings']
        ]);
	}

    // Rooms
	public function rooms() {
        $this->load_views('Rooms', 'Rooms', [
            ['components/modals/rooms_modals'],
            ['rooms'],
        ]);
	}

    // Shelves
	public function shelves() {
        $this->load_views('Shelves', 'Shelves', [
            ['components/modals/shelves_modals'],
            ['shelves'],
        ]);
	}

    // Programs and sections
	public function programs_and_sections() {
        $this->load_views('Programs & Sections', 'Programs & Sections', [['programs_and_sections']]);
	}

    // Logout
    public function logout() {
        session_destroy();
        redirect();
    }
}
