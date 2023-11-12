import React from 'react';

const Footer = () => {
    return (
        <div>
            
        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
            <div className="container py-5">
                <div className="row g-4 footer-inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">About PestKit.</h4>
                            <p>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p className="mb-0"><a className="" href="#">PestKit </a> &copy; 2023 All Right Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Usefull Link</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>About Us</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Contact Us</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Our Services</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Terms & Condition</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Services Link</h4>
                            <div className="d-flex flex-column align-items-start">
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Apartment Cleaning</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Office Cleaning</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Car Washing</a>
                                <a className="btn btn-link ps-0" href=""><i className="fa fa-check me-2"></i>Green Cleaning</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Contact Us</h4>
                            <a href="" className="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><i className="fa fa-map-marker-alt me-3"></i>123 Street, CA, USA</a>
                            <a href="" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</a>
                            <a href="" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-envelope me-3"></i>info@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}



        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <a href="#" className="text-primary mb-0 display-6">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2"></i></a>
                    </div>
                    <div className="col-md-4 copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0">
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-primary rounded-circle me-3 copyright-icon" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-md-4 my-auto text-center text-md-end text-white">

                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Copyright End --> */}
        

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary rounded-circle border-3 back-to-top"><i className="fa fa-arrow-up"></i></a>

        </div>
    );
};

export default Footer;