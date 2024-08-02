import React from "react";

const ApprovedCars = () => {
    return (
        <>
        <div id="appCapsule" className="extra-header-active full-height">
        <div className="section tab-content mb-1" style={{ marginTop: 120 }}>
          <div className="container">
            <div
              className="row"
              id="filter"
              style={{ padding: "0px !important", marginTop: 10 }}
            ></div>
            <div
              className="row"
              id="filter"
              style={{ padding: "0px !important", marginTop: 10 }}
            >
              <div className="col-md-12">
                <form
                  id="select-form"
                  action
                  method="POST"
                  encType="multipart/form-data"
                  style={{ display: "flex" }}
                >
                  <div className="col-md-3">
                    <select
                      id="makeFilter"
                      data-filter="make"
                      className="filter-make filter form-control"
                    >
                      <option value>Make</option>
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
                  <div
                    className="col-md-3"
                    style={{ marginRight: 6, marginLeft: 6 }}
                  >
                    <select
                      id="modelFilter"
                      data-filter="model"
                      className="filter-model filter form-control"
                    >
                      <option value>Model</option>
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
                  <div className="col-md-3">
                    <select
                      id="makeFilter"
                      data-filter="mileage"
                      className="filter-mileage filter form-control"
                    >
                      <option value>Mileage</option>
                      <option value="<10000">&lt;10000 KM</option>
                      <option value="<50000">&lt;50000 KM</option>
                      <option value="<150000">&lt;150000 KM</option>
                      <option value="200000">20000 KM</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      id="branchFilter"
                      className="filter-branch filter form-control"
                    >
                      <option value>All Branches</option>
                      <option value="Centurion">Centurion</option>
                      <option value="Lynnwood">Lynnwood</option>
                      <option value="Gezina">Gezina</option>
                      <option value="Klerksdorp">Klerksdorp</option>
                      <option value="Brits">Brits</option>
                      <option value="Mokopane">Mokopane</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="row"
              id="filter"
              style={{ padding: "0px !important", marginTop: 10 }}
            >
              <div className="col-md-12">
                <form
                  id="select-form"
                  action
                  method="POST"
                  encType="multipart/form-data"
                  style={{ display: "flex" }}
                >
                  <div className="col-md-3">
                    <select
                      id="makeFilter"
                      data-filter="fuel"
                      className="filter-fuel filter form-control"
                    >
                      <option value>Fuel Type</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                    </select>
                  </div>
                  <div
                    className="col-md-3"
                    style={{ marginRight: 6, marginLeft: 6 }}
                  >
                    <select
                      id="modelFilter"
                      data-filter="transmission"
                      className="filter-transmission filter form-control"
                    >
                      <option value>Transmission</option>
                      <option>Manual</option>
                      <option>Automatic</option>
                    </select>
                  </div>
                  <div
                    className="row"
                    style={{ marginLeft: "15px", marginRight: "13px" }}
                  >
                    <div className="col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="textarea"
                            className="form-control form-control-lg pe-0 price-range"
                            id="minPrice"
                            placeholder="Min Price"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="textarea"
                            className="form-control form-control-lg pe-0"
                            id="maxPrice"
                            placeholder="Max Price"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginLeft: "15px", marginRight: "3px" }}
                  >
                    <div className="col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="textarea"
                            className="form-control form-control-lg pe-0 price-range"
                            id="minYear"
                            placeholder="Min Year"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="textarea"
                            className="form-control form-control-lg pe-0"
                            id="maxYear"
                            placeholder="Max Year"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <hr className="horizontal-line" />
                {/* search input */}
                <div
                  className="row"
                  id="search"
                  style={{ padding: "0px !important", marginTop: 10 }}
                >
                  <div className="col-md-12">
                    <form
                      id="search-form"
                      action
                      method="POST"
                      encType="multipart/form-data"
                      style={{ display: "flex" }}
                    >
                      <input
                        className="form-control"
                        type="text"
                        id="searchInput"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary ml-2 buttonctrl"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* All the cars are listed here */}
            <div className="tab-content" style={{ marginBottom: 50 }}>
              <div className="tab-pane active show" id="allBranches">
                <div className="row" id="allBranchesContainer" style={{ marginTop: '100px' }}>
                  {/* All Branches Products will be inserted here */}
                  
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="listing d-block  align-items-stretch">
                        <div className="listing-img h-100 mr-4">
                          <img
                            src="images/car_6.jpg"
                            alt="Mitsubishi Pajero"
                            className="img-fluid"
                          />
                        </div>
                        <div className="listing-contents h-100">
                          <h3>Mitsubishi Pajero</h3>
                          <div className="rent-price">
                            <strong>$389.00</strong>
                            <span className="mx-1">/</span>day
                          </div>
                          <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                            <div className="listing-feature pr-4">
                              <span className="caption">Luggage:</span>
                              <span className="number">8</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Doors:</span>
                              <span className="number">4</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Passenger:</span>
                              <span className="number">4</span>
                            </div>
                          </div>
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quos eos at eum, voluptatem
                              quibusdam.
                            </p>
                            <p>
                              <a href="/" className="btn btn-primary btn-sm">
                                Rent Now
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="listing d-block  align-items-stretch">
                        <div className="listing-img h-100 mr-4">
                          <img
                            src="images/car_5.jpg"
                            alt="Nissan Moco"
                            className="img-fluid"
                          />
                        </div>
                        <div className="listing-contents h-100">
                          <h3>Nissan Moco</h3>
                          <div className="rent-price">
                            <strong>$389.00</strong>
                            <span className="mx-1">/</span>day
                          </div>
                          <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                            <div className="listing-feature pr-4">
                              <span className="caption">Luggage:</span>
                              <span className="number">8</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Doors:</span>
                              <span className="number">4</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Passenger:</span>
                              <span className="number">4</span>
                            </div>
                          </div>
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quos eos at eum, voluptatem
                              quibusdam.
                            </p>
                            <p>
                              <a href="/" className="btn btn-primary btn-sm">
                                Rent Now
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="listing d-block  align-items-stretch">
                        <div className="listing-img h-100 mr-4">
                          <img
                            src="images/car_4.jpg"
                            alt="Honda Fitta"
                            className="img-fluid"
                          />
                        </div>
                        <div className="listing-contents h-100">
                          <h3>Honda Fitta</h3>
                          <div className="rent-price">
                            <strong>$389.00</strong>
                            <span className="mx-1">/</span>day
                          </div>
                          <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                            <div className="listing-feature pr-4">
                              <span className="caption">Luggage:</span>
                              <span className="number">8</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Doors:</span>
                              <span className="number">4</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Passenger:</span>
                              <span className="number">4</span>
                            </div>
                          </div>
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quos eos at eum, voluptatem
                              quibusdam.
                            </p>
                            <p>
                              <a href="/" className="btn btn-primary btn-sm">
                                Rent Now
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="listing d-block  align-items-stretch">
                        <div className="listing-img h-100 mr-4">
                          <img
                            src="images/car_3.jpg"
                            alt="Skoda Laura"
                            className="img-fluid"
                          />
                        </div>
                        <div className="listing-contents h-100">
                          <h3>Skoda Laura</h3>
                          <div className="rent-price">
                            <strong>$389.00</strong>
                            <span className="mx-1">/</span>day
                          </div>
                          <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                            <div className="listing-feature pr-4">
                              <span className="caption">Luggage:</span>
                              <span className="number">8</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Doors:</span>
                              <span className="number">4</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Passenger:</span>
                              <span className="number">4</span>
                            </div>
                          </div>
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quos eos at eum, voluptatem
                              quibusdam.
                            </p>
                            <p>
                              <a href="/" className="btn btn-primary btn-sm">
                                Rent Now
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="listing d-block  align-items-stretch">
                        <div className="listing-img h-100 mr-4">
                          <img
                            src="images/car_2.jpg"
                            alt="Mazda LaPuta"
                            className="img-fluid"
                          />
                        </div>
                        <div className="listing-contents h-100">
                          <h3>Mazda LaPuta</h3>
                          <div className="rent-price">
                            <strong>$389.00</strong>
                            <span className="mx-1">/</span>day
                          </div>
                          <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                            <div className="listing-feature pr-4">
                              <span className="caption">Luggage:</span>
                              <span className="number">8</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Doors:</span>
                              <span className="number">4</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Passenger:</span>
                              <span className="number">4</span>
                            </div>
                          </div>
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quos eos at eum, voluptatem
                              quibusdam.
                            </p>
                            <p>
                              <a href="/" className="btn btn-primary btn-sm">
                                Rent Now
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="listing d-block  align-items-stretch">
                        <div className="listing-img h-100 mr-4">
                          <img
                            src="images/car_1.jpg"
                            alt="Buick LaCrosse"
                            className="img-fluid"
                          />
                        </div>
                        <div className="listing-contents h-100">
                          <h3>Buick LaCrosse</h3>
                          <div className="rent-price">
                            <strong>$389.00</strong>
                            <span className="mx-1">/</span>day
                          </div>
                          <div className="d-block d-md-flex mb-3 border-bottom pb-3">
                            <div className="listing-feature pr-4">
                              <span className="caption">Luggage:</span>
                              <span className="number">8</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Doors:</span>
                              <span className="number">4</span>
                            </div>
                            <div className="listing-feature pr-4">
                              <span className="caption">Passenger:</span>
                              <span className="number">4</span>
                            </div>
                          </div>
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quos eos at eum, voluptatem
                              quibusdam.
                            </p>
                            <p>
                              <a href="/" className="btn btn-primary btn-sm">
                                Rent Now
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                
                  <a
                    href="/"
                    className="btn btn-primary btn-sm d-block m-auto w-25"
                  >
                    View All Cars
                  </a>
                </div>
                {/* <div className="text-center mt-3">
                  <button id="loadMoreBtn" className="btn btn-primary">
                    Load More
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default ApprovedCars;