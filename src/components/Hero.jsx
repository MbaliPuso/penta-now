import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/now-banner.jpg';

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
                <div className="col-12 intro">
                  <h1 style={{ color: '#ffffff' }}>
                    <strong>Quality</strong> used vehicles you can trust.
                  </h1>
                </div>
              </div>
              <form className="trip-form">
                <div className="row align-items-center p-0 m-0">
                  <div className="mb-3 mb-md-0 col-md-3">
                    <select name id className="custom-select form-control">
                      <option>Select Make</option>
                      <option>BMW</option>
                      <option>Chery</option>
                      <option>Chevrolet</option>
                      <option>Datsun</option>
                      <option>Ford</option>
                      <option>Haval</option>
                      <option>Honda</option>
                      <option>Hyundai</option>
                      <option>Isuzu</option>
                      <option>Kia</option>
                      <option>Mahindra</option>
                      <option>Mercedes Benz</option>
                      <option>Mitsubishi</option>
                      <option>Nissan</option>
                      <option>Omoda</option>
                      <option>Renault</option>
                      <option>Suzuki</option>
                      <option>Toyota</option>
                      <option>Volkswagen</option>
                    </select>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select name id className="custom-select form-control">
                        <option>Select Model</option>
                        <option>1 Series (e81/87)</option>
                      <option>1400/np200</option>
                      <option>2014 Chevrolet Utility</option>
                      <option>All New Jimmy</option>
                      <option>Amarok</option>
                      <option>ASX</option>
                      <option>B-class</option>
                      <option>Baleno</option>
                      <option>Bllade 2011 - On</option>
                      <option>C5</option>
                      <option>Caddy</option>
                      <option>Celerio</option>
                      <option>Ciaz</option>
                      <option>Creta</option>
                      <option>D-max</option>
                      <option>Duster</option>
                      <option>Ecosport</option>
                      <option>Go</option>
                      <option>Grand Vitara</option>
                      <option>H1</option>
                      <option>H100 / Bakkie</option>
                      <option>H2</option>
                      <option>H2/ Jolian</option>
                      <option>Hilux</option>
                      <option>Hilux 2016 On</option>
                      <option>Jazz</option>
                      <option>Jimny</option>
                      <option>Juke</option>
                      <option>Kb 2004 - 2019</option>
                      <option>Kiger</option>
                      <option>KUV 100</option>
                      <option>Kwid</option>
                      <option>Land Cruiser 70 Series</option>
                      <option>Land Cruiser Pick Up</option>
                      <option>Magnite</option>
                      <option>Magnite21</option>
                      <option>Micra</option>
                      <option>Navara</option>
                      <option>New Swift</option>
                      <option>NP200</option>
                      <option>Omoda</option>
                      <option>Patrol 5.6 V8 Le Premium</option>
                      <option>Pik Up</option>
                      <option>Polo</option>
                      <option>Polo Playa / Polo</option>
                      <option>Polo Vivo</option>
                      <option>Prada 2002- On</option>
                      <option>Qashqai</option>
                      <option>Ranger</option>
                      <option>Ranger 2007 - 2022</option>
                      <option>Rav 4</option>
                      <option>Rio</option>
                      <option>S-presso</option>
                      <option>Scorpio</option>
                      <option>Sportage</option>
                      <option>Starlet</option>
                      <option>T-cross</option>
                      <option>Territory / Everest</option>
                      <option>Tiggo</option>
                      <option>Tiggo 7 Pro</option>
                      <option>Tiguan 1.4 TSI</option>
                      <option>Toyota Land Cruiser</option>
                      <option>Triber</option>
                      <option>Urban Cruiser</option>
                      <option>Vitara</option>
                      <option>Vitara / Vitara Brezza 2008 - On</option>
                      <option>Vitera Brezza</option>
                      <option>X Trail</option>
                      <option>XI</option>
                      <option>XUV 300</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select name id className="custom-select form-control">
                        <option value>Select Minimum</option>
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
                        <option value>Select Maximum</option>
                        <option value>R50 000</option>
                        <option value>R100 000</option>
                        <option value>R150 000</option>
                        <option value>R200 000</option>
                        <option value>R250 000</option>
                        <option value>R300 000</option>
                        <option value>R350 000</option>
                        <option value>R400 000</option>
                        <option value>R500 000</option>
                        <option value>R600 000</option>
                        <option value>R700 000</option>
                        <option value>R800 000</option>
                        <option value>R900 000</option>
                        <option value>R1 000 000</option>
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
