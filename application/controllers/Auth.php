<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * ========================================================================
 * * ERROR CONTROLLER
 * ------------------------------------------------------------------------
 * This is the error controller
 * ========================================================================
 */

class Auth extends CI_Controller {

    /**
     * ========================================================================
     * * VIEWS AND CONTROLLER METHODS
     * ========================================================================
     */

    // oAuth
    public function oAuth() {

        // Get values from parameters
        $userID   = $this->input->get('userID');
        $userType = $this->input->get('userType');

        // If userID and userType params are null or empty, then display 404 page
        if($userID == null || $userID === '' || $userType == null || $userType === '') {
            $this->Error_model->page_not_found();
        } else {

            // For validating userType
            $validUserType = 
                $userType === 'Staff'   || 
                $userType === 'Student' || 
                $userType === 'Librarian';
            
            // If userType param is invalid, then display 403 page
            if(!$validUserType) {
                $this->Error_model->forbidden();
            } else {

                // Set Session Data
                $this->session->set_userdata([
                    'userID'    => $userID,
                    'userType'  => $userType,
                ]);
        
                // Redirect to user page
                if($this->session->userType === 'Staff' || $this->session->userType === 'Student') {
                    redirect('home');
                } else if ($this->session->userType === 'Librarian') {
                    redirect('admin');
                } else {
                    session_destroy();
                    redirect('forbidden');
                }
            }
        }
    }

    // Logout
    public function logout() {
        session_destroy();
        redirect();
    }

    // 403 Forbidden
    public function forbidden() {
        $this->Error_model->forbidden();
    }

    // 404 Page Not Found
    public function page_not_found() {
        $this->Error_model->page_not_found();
    }

    // 404 Page Not Found
    public function server_down() {
        $this->Error_model->server_down();
    }
}