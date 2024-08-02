import React from "react";
import favicon from "../assets/favicon.png";
import "../styles/SellCarForm.css";

const SellCarForm = () => {
  return (
    <>
      <section
        className="position-relative overflow-hidden"
        style={{ marginTop: 120 }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <small
                className="fs-7 d-block text-warning"
                style={{ color: "#2a74e7 !important" }}
              />
              <h2
                className="fs-3 mb-0"
                style={{
                  color: "#2a74e7",
                  fontWeight: 700,
                  fontSize: "calc(1.46875rem + 2.625vw)",
                }}
              >
                We Offer The Best Deal For Your Used Car...
              </h2>
              {/* Item 1 */}
              <div className="card sell-item-list" style={{ marginTop: 30 }}>
                <div className="row item align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center rounded-circle icon">
                    <ion-icon className='rounded-circle' name="checkmark-circle-outline" />
                  </div>
                  <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 in">
                    <div style={{ color: 'black' }}>
                      <strong style={{ fontSize: '18px', lineHeight: '1.5em', fontWeight: 600 }}>How It Works</strong>
                      <div style={{ fontSize: '11px', lineHeight: '16px', fontWeight: '400' }}>
                        Fill In The Form | Bring In Your Car For Evalution | Get
                        An Offer - It's That Easy!!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ marginTop: 30 }}>
                <div className="row item align-items-center">
                  <div className="col-2">
                  <img
                          src={favicon}
                          alt="penta now icon"
                          className="imaged rounded w-36"
                          style={{ width: "36px" }}
                        />
                  </div>
                  <div className="col-10 in">
                    <div style={{ color: 'black' }}>
                      <strong style={{ fontSize: '18px', lineHeight: '1.5em', fontWeight: 600, color: 'black' }}>Dedicated To Fair Trade</strong>
                      <div style={{ fontSize: '11px', lineHeight: '16px', fontWeight: '400' }}>
                      We offer the best amount for your used vehicle
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ marginTop: 30 }}>
                <div className="row item align-items-center">
                  <div className="col-2">
                  <img
                          src={favicon}
                          alt="penta now icon"
                          className="imaged rounded w-36"
                          style={{ width: "36px" }}
                        />
                  </div>
                  <div className="col-10 in">
                    <div style={{ color: 'black' }}>
                      <strong style={{ fontSize: '18px', lineHeight: '1.5em', fontWeight: 500, color: 'black' }}>Quick, Fast & Easy Process</strong>
                      <div style={{ fontSize: '11px', lineHeight: '16px', fontWeight: '400' }}>
                      We remain committed to bring you the best offer in an hour after vehicle evaluation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* sell car form */}
            <div
              className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"
              style={{ marginBottom: 20 }}
            >
              <div className=''>
                
                <div className="card">
                  <ul className="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                    {/* item */}
                    {/* * item */}
                    {/* item */}
                    <li style={{ padding: 10, marginBottom: 50 }}>
                      {/* Sell Car Form*/}
                      <p>
                  <div
                    className="section-title"
                    style={{ padding: "10px 0px" }}
                  >
                    Fill In The Form Below - A Dedicated Consultant Will Contact
                    You
                  </div>
                </p>
                      <form className="d-block m-auto sell-car-fill">
                      
                        <div
                          className="form-group basic"
                          style={{ display: "flex", justifyContent: 'left' }}
                        >
                          <div
                            className="input-wrapper"
                            style={{ marginRight: 15 }}
                          >
                            <label className="label" htmlFor="account2">
                              Vehicle Make
                            </label>
                            <div className="exchange-group small">
                              <div className="input-col">
                                <input
                                  type="textarea"
                                  className="form-control form-control-lg pe-0"
                                  id="make"
                                  placeholder="eg. Suzuki"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input-wrapper">
                            <label className="label" htmlFor="account2">
                              Vehicle Model
                            </label>
                            <div className="exchange-group small">
                              <div className="input-col">
                                <input
                                  type="textarea"
                                  className="form-control form-control-lg pe-0"
                                  id="model"
                                  placeholder="eg. Swift"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <center>
                          <div
                            className="form-group basic"
                            style={{ display: "flex", gap: 20 }}
                          >
                            <div className="input-wrapper">
                              <label className="label" htmlFor="account2">
                                Select Year
                              </label>
                              <div className="exchange-group small">
                                <div className="input-col">
                                  <select
                                    id="Year"
                                    className="form-select form-select-lg currency"
                                  >
                                    <option value={2024} selected>
                                      2024
                                    </option>
                                    <option value={2023}>2023</option>
                                    <option value={2022}>2022</option>
                                    <option value={2021}>2021</option>
                                    <option value={2020}>2020</option>
                                    <option value={2019}>2019</option>
                                    <option value={2018}>2018</option>
                                    <option value={2017}>2017</option>
                                    <option value={2016}>2016</option>
                                    <option value={2015}>2015</option>
                                    <option value={2014}>2014</option>
                                    <option value={2013}>2013</option>
                                    <option value={2012}>2012</option>
                                    <option value={2011}>2011</option>
                                    <option value={2010}>2010</option>
                                    <option value={2009}>2009</option>
                                    <option value={2008}>2008</option>
                                    <option value={2007}>2007</option>
                                    <option value={2006}>2006</option>
                                    <option value={2005}>2005</option>
                                    <option value={2004}>2004</option>
                                    <option value={2003}>2003</option>
                                    <option value={2002}>2002</option>
                                    <option value={2001}>2001</option>
                                    <option value={2000}>2000</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper">
                              <label className="label" htmlFor="account2">
                                Select Fuel
                              </label>
                              <div className="exchange-group small">
                                <div className="input-col">
                                  <select
                                    id="FuelType"
                                    className="form-select form-select-lg currency"
                                  >
                                    <option value="Petrol" selected>
                                      Petrol
                                    </option>
                                    <option value="Diesel">Diesel</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper">
                              <label className="label" htmlFor="account2">
                                Transmission
                              </label>
                              <div className="exchange-group small">
                                <div className="input-col">
                                  <select
                                    id="Trans"
                                    className="form-select form-select-lg currency"
                                  >
                                    <option value="Automatic" selected>
                                      Automatic
                                    </option>
                                    <option value="Manual">Manual</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </center>
                        <div className="form-group basic">
                          <div className="input-wrapper">
                            <label className="label" htmlFor="account2">
                              Vehicle Condition
                            </label>
                            <br />
                            <div className="exchange-group small">
                              <div
                                className="input-col"
                                style={{ display: "flex" }}
                              >
                                <div style={{ marginRight: 10, width: "20%" }}>
                                  <input
                                    type="radio"
                                    id="option1"
                                    name="selection"
                                    defaultValue="option1"
                                  />
                                  <br />
                                  <label
                                    htmlFor="option1"
                                    style={{ fontSize: 10 }}
                                  >
                                    Excellent
                                  </label>
                                </div>
                                <div style={{ marginRight: 10, width: "20%" }}>
                                  <input
                                    type="radio"
                                    id="option1"
                                    name="selection"
                                    defaultValue="option1"
                                  />
                                  <br />
                                  <label
                                    htmlFor="option1"
                                    style={{ fontSize: 10 }}
                                  >
                                    Good
                                  </label>
                                </div>
                                <div style={{ marginRight: 10, width: "20%" }}>
                                  <input
                                    type="radio"
                                    id="option1"
                                    name="selection"
                                    defaultValue="option1"
                                  />
                                  <br />
                                  <label
                                    htmlFor="option1"
                                    style={{ fontSize: 10 }}
                                  >
                                    Average
                                  </label>
                                </div>
                                <div style={{ marginRight: 10, width: "30%" }}>
                                  <input
                                    type="radio"
                                    id="option1"
                                    name="selection"
                                    defaultValue="option1"
                                  />
                                  <br />
                                  <label
                                    htmlFor="option1"
                                    style={{ fontSize: 10 }}
                                  >
                                    Below Average
                                  </label>
                                </div>
                                <div style={{ marginRight: 10, width: "10%" }}>
                                  <input
                                    type="radio"
                                    id="option1"
                                    name="selection"
                                    defaultValue="option1"
                                  />
                                  <br />
                                  <label
                                    htmlFor="option1"
                                    style={{ fontSize: 10 }}
                                  >
                                    Bad
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="form-group basic">
                          <div className="input-wrapper">
                            <label className="label" htmlFor="account2">
                              Your Name &amp; Surname
                            </label>
                            <div className="exchange-group small">
                              <div className="input-col">
                                <input
                                  type="textarea"
                                  className="form-control form-control-lg pe-0"
                                  id="fullName"
                                  placeholder="Enter Your Name & Surname"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group basic mb-2">
                          <div className="input-wrapper">
                            <label className="label" htmlFor="account2">
                              Your Cell Number
                            </label>
                            <input
                              type="mobile"
                              className="form-control form-control-lg pe-0"
                              id="mobile"
                              placeholder="Enter Your Cell Number"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group basic mb-3">
                          <div className="input-wrapper">
                            <label className="label" htmlFor="account2">
                              Your Email Address
                            </label>
                            <input
                              type="textarea"
                              className="form-control form-control-lg pe-0"
                              id="email"
                              placeholder="Enter Your Email Address"
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="button"
                            id="submitlead"
                            className="btn btn-primary btn-lg btn-block rounded-3"
                            onclick="cario()"
                          >
                            Send Vehicle Details
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellCarForm;
