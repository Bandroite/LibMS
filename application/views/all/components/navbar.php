<nav class="navbar navbar-expand-md navbar-light bg-white fixed-top shadow" id="navbarTop">

    <!-- Brand Name -->
    <a class="navbar-brand text-primary" href="<?= base_url() ?>">
        <img src="<?= base_url() ?>public/images/app/libms.png" width="130" >
    </a>

    <!-- Toggler Button (responsive) -->
    <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Browse</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="<?= base_url() ?>browse">All</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Books</a>
                    <a class="dropdown-item" href="#">Magazines</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="<?= base_url() ?>advance-search" tabindex="-1" aria-disabled="true">Advance Search</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="<?= base_url() ?>about-us" tabindex="-1" aria-disabled="true">About Us</a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">

            <?php if($this->session->userType === 'Student' || $this->session->userType === 'Staff'): ?>
                <li class="nav-item">
                    <div class="dropdown">
                        <div class="nav-link flex-h-separated" data-toggle="dropdown" role="button">
                            <div>John</div>
                            <div id="notifContainer" class="p-1 ml-2 bg-primary rounded-circle" style="display: none"></div>
                        </div>

                        <div 
                            class = "dropdown-menu dropdown-user-menu dropdown-menu-right user-select-none" 
                            style = "min-width: 250px"
                        >
                            <a 
                                class = "dropdown-item" 
                                href  = "<?= base_url() ?>me"
                            >
                                <i class="fas fa-user-circle dropdown-icon-item"></i>
                                <span>Profile</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a 
                                class = "dropdown-item d-flex justify-content-between align-items-center"  
                                href  = "<?= base_url() ?>me/favorites"
                            >
                                <div>
                                    <i class="fas fa-heart dropdown-icon-item"></i>
                                    <span>Favorites</span>
                                </div>
                                <div id="favoritesCountContainer"></div>
                            </a>
                            <a 
                                class = "dropdown-item d-flex justify-content-between align-items-center" 
                                href  = "<?= base_url() ?>me/transactions"
                            >
                                <div>
                                    <i class="fas fa-book dropdown-icon-item"></i>
                                    <span>Transactions</span>
                                </div>
                                <div id="transactionsCountContainer"></div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a 
                                class = "dropdown-item"  
                                href  = "<?= base_url() ?>me/edit-info"
                            >
                                <i class="fas fa-edit dropdown-icon-item"></i>
                                <span>Edit Information</span>
                            </a>
                            <a 
                                class = "dropdown-item" 
                                href  = "<?= base_url() ?>me/account-settings"
                            >
                                <i class="fas fa-user-lock dropdown-icon-item"></i>
                                <span>Account Settings</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a 
                                class = "dropdown-item"
                                href  = "<?= base_url() ?>logout"                            
                            >
                                <i class="fas fa-sign-out-alt dropdown-icon-item"></i>
                                <span>Log out</span>
                            </a>
                        </div>
                    </div>
                </li>
            <?php elseif($this->session->userType === "Librarian"): ?>
                <li class="nav-item dropdown">
                    <a 
                        class="nav-link dropdown-toggle" 
                        id="userDropdown" 
                        href="#" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                    >
                        <i class="fas fa-user fa-fw mr-1"></i>
                        <span id="librarianFullName"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="<?= base_url() ?>admin">
                            <i class="fas fa-tachometer-alt dropdown-icon-item"></i>
                            <span>Dashboard</span>                        
                        </a> 
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="">
                            <i class="fas fa-user-tie dropdown-icon-item"></i>
                            <span>Profile</span>                        
                        </a> 
                        <a class="dropdown-item" href="">
                            <i class="fas fa-user-cog dropdown-icon-item"></i>
                            <span>Account Settings</span>                        
                        </a> 
                        <a class="dropdown-item" href="<?= base_url() ?>admin/logout">
                            <i class="fas fa-sign-out-alt dropdown-icon-item"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </li>
            <?php else: ?>
                <li class="nav-item dropdown mr-0 mr-md-1 mb-1 mb-md-0">
                    <a class="btn btn-muted btn-block dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Register</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="<?= base_url() ?>register/student">Student</a>
                        <a class="dropdown-item" href="<?= base_url() ?>register/staff">Staff</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="btn btn-primary btn-block" href="<?= base_url() ?>login" tabindex="-1" aria-disabled="true">Login</a>
                </li>
            <?php endif ?>
        </ul>
    </div>
</nav>