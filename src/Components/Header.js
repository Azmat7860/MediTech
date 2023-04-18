import React from "react";
import "../css/style.css";
// import {nav} from '../js/main.js'

function Header() {
  // nav();
  return (
   
    <header id="header" className="fixed-top d-flex align-items-center header-transparent header-scrolled">
    <div className="container-fluid">

        <div className="row justify-content-center align-items-center">
            <div className="col-xl-11 d-flex align-items-center justify-content-between">
                <h1 className="logo"><a href="index.html">MediTech</a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo -->
                <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="dropdown"><a href="/"><span>Doctors</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/">Drop Down 1</a></li>
                                <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="/">Deep Drop Down 1</a></li>
                                        <li><a href="/">Deep Drop Down 2</a></li>
                                        <li><a href="/">Deep Drop Down 3</a></li>
                                        <li><a href="/">Deep Drop Down 4</a></li>
                                        <li><a href="/">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Drop Down 2</a></li>
                                <li><a href="/">Drop Down 3</a></li>
                                <li><a href="/">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="/"><span>Caretakers</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/">Drop Down 1</a></li>
                                <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="/">Deep Drop Down 1</a></li>
                                        <li><a href="/">Deep Drop Down 2</a></li>
                                        <li><a href="/">Deep Drop Down 3</a></li>
                                        <li><a href="/">Deep Drop Down 4</a></li>
                                        <li><a href="/">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Drop Down 2</a></li>
                                <li><a href="/">Drop Down 3</a></li>
                                <li><a href="/">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="/"><span>Lab Tests</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/">Drop Down 1</a></li>
                                <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="/">Deep Drop Down 1</a></li>
                                        <li><a href="/">Deep Drop Down 2</a></li>
                                        <li><a href="/">Deep Drop Down 3</a></li>
                                        <li><a href="/">Deep Drop Down 4</a></li>
                                        <li><a href="/">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Drop Down 2</a></li>
                                <li><a href="/">Drop Down 3</a></li>
                                <li><a href="/">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Health Blogs</a></li>
                        <li><a className="nav-link scrollto btn-signup-login" href="#contact">Signup/Login</a></li>
                        <li><a className="nav-link scrollto btn btn-success btn-block h-100 btn-search ms-3" href="#contact">3150470727</a></li>
                        
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}
            </div>
        </div>

    </div>
</header>
  );
}

export default Header;
