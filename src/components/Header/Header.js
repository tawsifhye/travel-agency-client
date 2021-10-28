import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth'
import logo from '../../images/logo.jpg'
import "./Header.css"
const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top self-navbar  self-nav">
                <div className="container w-50 ms-0 ps-3">
                    <Link to="/home">
                        <img
                            className="rounded-circle"
                            src={logo}
                            alt=""
                            width="100"
                            height="81"
                        />
                    </Link>
                </div>
                <button
                    className="navbar-toggler navbar-toggler-right bg-light me-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pe-lg-5 mb-2 mb-lg-0 fw-bold fs-6">
                            <li className="nav-item">
                                <HashLink
                                    className="nav-link active 
                                link-hover"
                                    aria-current="page"
                                    to="/home#home"
                                >
                                    Home
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink
                                    className="nav-link active 
                                link-hover"
                                    aria-current="page"
                                    to="/home#service"
                                >
                                    My Bookings
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink
                                    className="nav-link active 
                                link-hover"
                                    aria-current="page"
                                    to="/home#service"
                                >
                                    Services
                                </HashLink>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link active 
                                link-hover"
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            {user?.email ? (
                                <button
                                    className="btn btn-danger fw-bolder rounded pt-2 mx-1"
                                    onClick={logOut}
                                >
                                    Log Out
                                </button>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login">
                                        <button className="btn btn-success fw-bolder rounded  pt-2 mx-1">
                                            Sign In
                                        </button>
                                    </Link>
                                </li>
                            )}
                            {user?.email && (
                                <li className="nav-item  pt-2">{user.displayName}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;