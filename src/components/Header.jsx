import React from "react";
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header className="site-navbar site-navbar-target position-fixed" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <a href="index.html">
                  <img src={logo} alt="Penta Now logo" style={{ width: '200px' }} />
                </a>
              </div>
            </div>
            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none">
                <a href="/" className=" site-menu-toggle js-menu-toggle py-5 ">
                  <span className="icon-menu h3 text-black" />
                </a>
              </span>
              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="active">
                    <a href="index.html" className="nav-link">
                      Sell a car
                    </a>
                  </li>
                  <li>
                    <a href="listing.html" className="nav-link">
                      Buy a car
                    </a>
                  </li>
                  <li>
                    <a href="testimonials.html" className="nav-link">
                      Penta Approved
                    </a>
                  </li>
                  <li>
                    <a href="about.html" className="nav-link">
                      Our locations
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="nav-link">
                      Coctact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
