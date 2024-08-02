import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

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
      <header className="site-navbar site-navbar-target position-fixed bg-white">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <a href="/">
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
                    <Link to='/sell-my-car' className="nav-link">
                      Sell a car
                    </Link>
                  </li>
                  <li>
                    <Link to='/buy-a-car' className="nav-link">
                      Buy a car
                    </Link>
                  </li>
                  <li>
                    <Link to='/penta-approved' className="nav-link">
                      Penta Approved
                    </Link>
                  </li>
                  <li>
                    <Link to='/our-locations' className="nav-link">
                      Our locations
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact-us' className="nav-link">
                      Contact Us
                    </Link>
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
