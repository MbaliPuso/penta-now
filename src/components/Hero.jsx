import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/hero2.png';

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="row mb-5">
                <div className="col-lg-7 intro">
                  <h1>
                    <strong>Quality</strong> used vehicles you can trust.
                  </h1>
                </div>
              </div>
              <form className="trip-form">
                <div className="row align-items-center">
                  <div className="mb-3 mb-md-0 col-md-3">
                    <select name id className="custom-select form-control">
                      <option value>Select Type</option>
                      <option value>Ferrari</option>
                      <option value>Toyota</option>
                      <option value>Ford</option>
                      <option value>Lamborghini</option>
                    </select>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select name id className="custom-select form-control">
                        <option value>Select Type</option>
                        <option value>Ferrari</option>
                        <option value>Toyota</option>
                        <option value>Ford</option>
                        <option value>Lamborghini</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select name id className="custom-select form-control">
                        <option value>Select Type</option>
                        <option value>Ferrari</option>
                        <option value>Toyota</option>
                        <option value>Ford</option>
                        <option value>Lamborghini</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select name id className="custom-select form-control">
                        <option value>Select Type</option>
                        <option value>Ferrari</option>
                        <option value>Toyota</option>
                        <option value>Ford</option>
                        <option value>Lamborghini</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="mb-3 mb-md-0 col-md-1">
                    <div className="form-control-wrap">
                      <button className="btn search-btn" type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
