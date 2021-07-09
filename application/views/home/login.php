<div class="container-fluid p-0">
    <div class="min-vh-100 row m-0">
    
        <!-- Image -->
        <div class="col-lg-6 col-xl-8 min-h-100 flex-center bg-light">
            <img 
                class     = "w-75" 
                src       = "<?= base_url() ?>public/images/app/book_lover.svg" 
                alt       = "Book Lover"
                draggable = "false"
            >
        </div>
    
        <!-- Login Section -->
        <div class="col-12 col-lg-6 col-xl-4 min-h-100 d-flex justify-content-between align-items-center">
            <div class="container-fluid">
    
                <!-- Login Form -->
                <form id="loginForm">
                    <h1 class="text-center display-4 mb-5">Log in</h1>
                    
                    <!-- Error Login Alert -->
                    <div id="errorLoginContainer"></div>
                    
                    <!-- Email field -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            class="form-control" 
                            placeholder="Type your email here"
                        >
                    </div>
    
                    <!-- Password Field -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            class="form-control" 
                            placeholder="Type your password here"
                        >
                    </div>
    
                    <!-- User Actions -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                            <span>Log in</span>
                            <i class="fas fa-sign-in-alt ml-1"></i>
                        </button>
                        <button class="btn btn-light btn-block">I forgot my password</button>
                    </div>
                </form>
    
                <div class="dropdown-divider"></div>
    
                <div class="form-group small d-flex justify-content-between align-items-center">
                    <div>
                        <a href="<?= base_url() ?>home">Home</a>
                        <span>|</span>
                        <a href="<?= base_url() ?>about-us">About Us</a>
                    </div>
                    <div>
                        <a href="<?= base_url() ?>terms-and-conditions">Terms and Condition</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>