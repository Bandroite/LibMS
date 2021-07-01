<?php

class Error_model extends CI_Model {
    
    // 403: Forbidden
    public function forbidden() {
        set_status_header(403);
        $this->load->view('all/templates/header', [
            'title' => '403 Forbidden'
        ]);
        $this->load->view('all/errors/403');
        $this->load->view('all/templates/footer');
    }

    // 404: Page Not Found
	public function page_not_found() {
        set_status_header(404);
        $this->load->view('all/templates/header', [
            'title' => '404 Page Not Found'
        ]);
        $this->load->view('all/errors/404');
        $this->load->view('all/templates/footer');
	}
}