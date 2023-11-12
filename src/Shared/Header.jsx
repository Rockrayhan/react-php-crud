import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            
        {/* <!-- Topbar Start --> */}
        <div className="container-fluid topbar-top bg-primary">
            <div className="container">
                <div className="d-flex justify-content-between topbar py-2">
                    <div className="d-flex align-items-center flex-shrink-0 topbar-info">
                        <a href="#" className="me-4 text-secondary"><i className="fas fa-map-marker-alt me-2 text-dark"></i>123 Street, CA, USA</a>
                        <a href="#" className="me-4 text-secondary"><i className="fas fa-phone-alt me-2 text-dark"></i>+01234567890</a>
                        <a href="#" className="text-secondary"><i className="fas fa-envelope me-2 text-dark"></i>Example@gmail.com</a>
                    </div>
                    <div className="text-end pe-4 me-4 border-end border-dark search-btn">
                        <div className="search-form">
                            <form method="post" action="index.html">
                                <div className="form-group">
                                    <div className="d-flex">
                                        <input type="search" className="form-control border-0 rounded-pill" name="search-input" value="" placeholder="Search Here" required=""/>
                                        <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center topbar-icon">
                        <a href="#" className="me-4"><i className="fab fa-facebook-f text-dark"></i></a>
                        <a href="#" className="me-4"><i className="fab fa-twitter text-dark"></i></a>
                        <a href="#" className="me-4"><i className="fab fa-instagram text-dark"></i></a>
                        <a href="#" className=""><i className="fab fa-linkedin-in text-dark"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}


        {/* <!-- Navbar Start --> */}
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-primary mb-0 display-5">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2"></i></h1>
                    </a>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/" className="nav-item nav-link active-Link active-link">Home</NavLink>
                            <NavLink to="about" className="nav-item nav-link active-link">About</NavLink>
                            <NavLink to="services" className="nav-item nav-link active-link">Services</NavLink>
                            <NavLink to="projects" className="nav-item nav-link active-link">Projects</NavLink>
                            <NavLink to="contact" className="nav-item nav-link active-link">Contact</NavLink>
                            <NavLink to="users" className="nav-item nav-link active-link">Users</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}

     

        </div>
    );
};

export default Header;