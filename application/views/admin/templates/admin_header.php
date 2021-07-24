<div class="sb-nav-fixed">


<!-- Top Navigation Bar -->
<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark shadow-lg">

    <!-- Brand Container -->
    <div class="navbar-container d-flex align-items-center">

        <!-- Toggler Button For Sidebar -->
        <div 
            class = "btn btn-white-muted ml-lg-0" 
            id    = "sidebarToggle"
        ><i class="fas fa-bars"></i></div>

        <!-- Brand Name -->
        <a class="navbar-brand" href="admin/">Admin Panel</a>

    </div>

    <!-- Navbar-->
    <ul class="navbar-nav navbar-container justify-content-end w-100 d-flex">
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
                <span id="librarianFirstName"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
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
    </ul>
</nav>

    <!-- Main Body -->
<div id="layoutSidenav">
    
    <!-- Side Bar -->
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-light bg-light user-select-none" id="sidenavAccordion">
            
            <!-- Sidenav Menu -->
            <div class="sb-sidenav-menu">
                <div class="nav">

                    <!-- Core -->
                    <div class="sb-sidenav-menu-heading">Core</div>
                    <a 
                        class = "nav-link<?= $active === 'Dashboard' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-tachometer-alt sidebar-icon"></i>
                        </div>
                        <span>Dashboard</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <!-- Transactions -->
                    <div class="sb-sidenav-menu-heading">Transaction</div>
                    <a 
                        class = "nav-link<?= $active === 'Transaction List' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/transactions"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-exchange-alt sidebar-icon"></i>
                        </div>
                        <span>Transaction List</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Borrowed Books' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/borrowed"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Borrowed Copies</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Borrowers' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/borrowers"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book-reader sidebar-icon"></i>
                        </div>
                        <span>Borrowers</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Returned Books' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/returned"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-undo sidebar-icon"></i>
                        </div>
                        <span>Returned Copies</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <!-- Materials Management -->
                    <div class="sb-sidenav-menu-heading">Materials managemenent</div>
                    <a 
                        class = "nav-link<?= $active === 'Materials' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/materials"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>All Materials</span>
                    </a>
                    <a 
                        class   = "nav-link<?= $active === 'Genres' ? ' active' : ''; ?>" 
                        href    = 
                    "<?= base_url() ?>admin/genres"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Genres</span>
                    </a>
                    <a 
                        class   = "nav-link<?= $active === 'Material Types' ? ' active' : ''; ?>" 
                        href    = "<?= base_url() ?>admin/material-types"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Material Types</span>
                    </a>
                    <a 
                        class   = "nav-link<?= $active === 'Authors' ? ' active' : ''; ?>" 
                        href    = "<?= base_url() ?>admin/authors"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Authors</span>
                    </a>
                    <a 
                        class   = "nav-link<?= $active === 'Publishers' ? ' active' : ''; ?>" 
                        href    = "<?= base_url() ?>admin/publishers"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Publishers</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Publication Countries' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/publication-countries"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Publication Countries</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Languages' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/languages"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Languages</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Weeded Materials' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/weeded-materials"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book sidebar-icon"></i>
                        </div>
                        <span>Weeded Materials</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <!-- Library Setup -->
                    <div class="sb-sidenav-menu-heading">Library Setup</div>
                    <a 
                        class = "nav-link<?= $active === 'Buildings' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/buildings"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-building sidebar-icon"></i>
                        </div>
                        <span>Buildings</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Rooms' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/rooms"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-cube sidebar-icon"></i>
                        </div>
                        <span>Rooms</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Shelves' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/shelves"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-grip-vertical sidebar-icon"></i>
                        </div>
                        <span>Shelves</span>
                    </a>
                    <a 
                        class = "nav-link<?= $active === 'Programs & Sections' ? ' active' : ''; ?>" 
                        href  = "<?= base_url() ?>admin/programs-and-sections"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-list-ol sidebar-icon"></i>
                        </div>
                        <span>Programs & Sections</span>
                    </a>
                </div>
            </div>

            <!-- Sidenav Footer -->
            <div class="sb-sidenav-footer bg-muted">
                <div class="small">Logged in as:</div>
                <div class="font-weight-bold">Librarian</div>
            </div>
        </nav>
    </div>
    
    <!-- Body -->
    <div id="layoutSidenav_content">
        <main class="px-4 py-5">