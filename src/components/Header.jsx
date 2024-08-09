import React from "react";
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSell = () => {
    navigate("/sell-my-car");
  }

  const handleBuy = () => {
    navigate("/buy-a-car");
  }

  const handlePentaApproved = () => {
    navigate("/penta-approved");
  }

  const handleLocations = () => {
    navigate("/our-locations");
  }

  const handleContact = () => {
    navigate("/contact-us");
  }

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
                  <li className="active nav-link" style={{ cursor: "pointer" }} onClick={() => handleSell()}>
                      Sell a car
                  </li>
                  <li className="nav-link" style={{ cursor: "pointer" }} onClick={() => handleBuy()}>
                      Buy a car
                  </li>
                  <li className="nav-link" style={{ cursor: "pointer" }} onClick={() => handlePentaApproved()}>
                      Penta Approved
                  </li>
                  <li className="nav-link" style={{ cursor: "pointer" }} onClick={() => handleLocations()}>
                      Our locations
                  </li>
                  <li className="nav-link" style={{ cursor: "pointer" }} onClick={() => handleContact()}>
                      Contact Us
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
