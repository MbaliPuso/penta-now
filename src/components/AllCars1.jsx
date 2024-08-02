import React from "react";
import "../styles/AllCars.css";
import { useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";
import carOne from "../assets/Mercedes-Benz-B-class.jpg";
import carTwo from "../assets/chevrolet-utility.jpg";
import carThree from "../assets/nissan-qashqai.jpg";
import carFour from "../assets/Honda_Jazz.jpg";

const AllCars = () => {
  const navigate = useNavigate();
  const cars = [
    {
      image: carOne,
      type: "Hatch",
      make: "Mercedes Benz",
      model: "B-class",
      variant: "B180",
      year: 2011,
      mileage: 192323,
      price: 99950,
      engine: 1800,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "Comet Grey",
      branch: "Lynnwood",
      stockNo: "UNL10023",
      serviceHistory: "yes",
    },
    {
      image: carTwo,
      type: "Hatch",
      make: "Chevrolet",
      model: "Utility",
      variant: "1.4 A/C Pick Up",
      year: 2014,
      mileage: 86000,
      price: 117900,
      engine: 1400,
      fuel: "Diesel",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      stockNo: "PCU10006",
      serviceHistory: "yes",
    },
    {
      image: carThree,
      type: "SUV",
      make: "Nissan",
      model: "Qashqai",
      variant: "2.0 ACENTA CVT",
      year: 2012,
      mileage: 181000,
      price: 119900,
      engine: 2,
      fuel: "Petrol",
      transmission: "CVT",
      color: "Metallic Silky Silver",
      branch: "Gezina",
      stockNo: "UNG38",
      serviceHistory: "yes",
    },
    {
      image: carFour,
      type: "Hatchback",
      make: "Honda",
      model: "Jazz",
      variant: "1.2 COMFORT",
      year: 2016,
      mileage: 130000,
      price: 129900,
      engine: 1200,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      stockNo: "PCU10067",
      serviceHistory: "yes",
    },
    {
      image: carOne,
      type: "Hatch",
      make: "Mercedes Benz",
      model: "B-class",
      variant: "B180",
      year: 2011,
      mileage: 192323,
      price: 99950,
      engine: 1800,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "Comet Grey",
      branch: "Lynnwood",
      stockNo: "UNL10023",
      serviceHistory: "yes",
    },
    {
      image: carTwo,
      type: "Hatch",
      make: "Chevrolet",
      model: "Utility",
      variant: "1.4 A/C Pick Up",
      year: 2014,
      mileage: 86000,
      price: 117900,
      engine: 1400,
      fuel: "Diesel",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      stockNo: "PCU10006",
      serviceHistory: "yes",
    },
    {
      image: carThree,
      type: "SUV",
      make: "Nissan",
      model: "Qashqai",
      variant: "2.0 ACENTA CVT",
      year: 2012,
      mileage: 181000,
      price: 119900,
      engine: 2,
      fuel: "Petrol",
      transmission: "CVT",
      color: "Metallic Silky Silver",
      branch: "Gezina",
      stockNo: "UNG38",
      serviceHistory: "yes",
    },
    {
      image: carFour,
      type: "Hatchback",
      make: "Honda",
      model: "Jazz",
      variant: "1.2 COMFORT",
      year: 2016,
      mileage: 130000,
      price: 129900,
      engine: 1200,
      fuel: "Petrol",
      transmission: "Manual",
      color: "WHITE",
      branch: "Centurion",
      stockNo: "PCU10067",
      serviceHistory: "yes",
    },
  ];

  const viewVehicle = (car) => {
    navigate('/view-vehicle', { state: {car} })
};

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
                
              </div>
            </div>
            {/* All the cars are listed here */}
            <div className="container mt-5">
              <div className="row">
                {cars.map((car, index) => (
                  <div
                    key={index}
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-4 car"
                  >
                    <div className="card vehicle-card" onClick={() => viewVehicle(car)}>
                      <img
                        src={car.image}
                        alt={car.name}
                        className="car-image"
                        height={152}
                        // width={203}
                      />
                      <div className="vehicle-details">
                        <div style={{ color: '#123594' }}>
                      <h5 className="car-title">{car.make} <span> - {car.model}</span></h5>
                      <div className="row car-details">
                        <div className="col-4 mileage p-0">
                          <div>
                            <ion-icon
                              name="speedometer-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="speedometer outline"
                            ></ion-icon>
                          </div>
                          {car.mileage}
                        </div>
                        <div className="col-4 transmission p-0">
                          <div>
                            <ion-icon
                              name="car-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="car outline"
                            ></ion-icon>
                          </div>
                          {car.transmission}
                        </div>
                        <div className="col-4 year p-0">
                          <div>
                            <ion-icon
                              name="calendar-outline"
                              role="img"
                              className="md hydrated"
                              aria-label="calendar outline"
                            ></ion-icon>
                          </div>
                          {car.year}
                        </div>
                      </div>
                      <div className="price"><strong>R {car.price}</strong></div>
                      </div>
                      <button className="view-details-button">
                        View Details
                      </button>
                      <div className="branch">{car.branch}</div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End list cars */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCars;
