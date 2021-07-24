<!-- Main Footer -->
<footer class="footer">

    <!-- Footer Links Section -->
    <div class="container-fluid text-white p-5">
        <div class="row">
            <div class="col-12 col-lg-4 px-3">
                <div class="background-brand">
                    <!-- Brand Name -->
                    <h4 class="font-weight-light">Welcome to</h4>
                    <a class="navbar-brand text-primary" href="#">
                        <h1 class="display-2">Lib<span class="text-white">MS</span></h1>
                    </a>
                </div>
                
            </div>
            <div class="col-12 col-lg-4 px-3">
                <h4 class="font-weight-normal">Contact Details</h4>
                <div class="nav flex-column">
                    <a href="#" class="footer-links">
                        <i class="fas fa-map-marker-alt footer-icons"></i>
                        <span>Commonwealth, QC</span>
                    </a>
                    <a href="#" class="footer-links">
                        <i class="fas fa-envelope footer-icons"></i>
                        <span>info@gmail.com</span>
                    </a>
                    <a href="#" class="footer-links">
                        <i class="fas fa-phone footer-icons"></i>
                        <span>091234567890</span>
                    </a>
                    <a href="#" class="footer-links">
                        <i class="fas fa-globe-asia footer-icons"></i>
                        <span>www.library.com</span>
                    </a>
                </div>
            </div>
            <div class="col-12 mt-5 mt-lg-0 col-lg-4 px-3">
                <h4 class="font-weight-normal">Navigation</h4>
                <a href="<?= base_url() ?>browse" class="footer-links">
                        <i class="fas fa-info-circle footer-icons"></i>
                        <span>Browse</span>
                    </a>
                <div class="nav flex-column">
                    <a href="<?= base_url() ?>search" class="footer-links">
                        <i class="fas fa-search footer-icons"></i>
                        <span>Search</span>
                    </a>
                    <a href="<?= base_url() ?>about-us" class="footer-links">
                        <i class="fas fa-info-circle footer-icons"></i>
                        <span>About Us</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bottom Footer -->
    <div class="bottom-footer">
        <div>Copyright <?=  date('Y') ?></div>
        <div>
            <a class="bottom-footer-links" href="<?= base_url() ?>about-us">About Us</a>
            <span>|</span>
            <a class="bottom-footer-links" href="<?= base_url() ?>terms-and-conditions">Terms and Condition</a>
        </div>
    </div>
</footer>
