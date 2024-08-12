import React, { useMemo, useState, useEffect } from "react";
import logo from "../assets/now-banner.jpg";
import carOne from "../assets/Mercedes-Benz-B-class.jpg";
import carTwo from "../assets/chevrolet-utility.jpg";
import carThree from "../assets/nissan-qashqai.jpg";
import carFour from "../assets/Honda_Jazz.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const homeCars = useMemo(
    () => [
      {
        image: carOne,
        type: "Hatch",
        make: "Mercedes Benz",
        model: "B-class",
        variant: "B180",
        year: 2011,
        mileage: 192323,
        price: "99 950",
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
        price: "117 900",
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
        price: "119 900",
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
        price: "129 900",
        engine: 1200,
        fuel: "Petrol",
        transmission: "Manual",
        color: "WHITE",
        branch: "Centurion",
        stockNo: "PCU10067",
        serviceHistory: "yes",
      },
    ],
    []
  );

  const navigate = useNavigate();
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortCriteria, setSortCriteria] = useState("");

  const viewVehicle = (car) => {
    navigate("/view-vehicle", { state: { car } });
  };

  useEffect(() => {
    // Check the viewport width then sets grid as view mode
    if (window.innerWidth < 576) {
      setViewMode("grid");
    }
  }, []);

  useEffect(() => {
    // Filter cars based on selected filters
    let filtered = homeCars.filter((car) => {
      return (
        (!makeFilter || car.make === makeFilter) &&
        (!modelFilter || car.model === modelFilter) &&
        (!minPrice || car.price >= parseInt(minPrice, 10)) &&
        (!maxPrice || car.price <= parseInt(maxPrice, 10))
      );
    });

    if (sortCriteria) {
      filtered = filtered.sort((a, b) => {
        if (sortCriteria === "year") {
          return b.year - a.year;
        } else if (sortCriteria === "lowestPrice") {
          return (
            parseInt(a.price.replace(/ /g, "")) -
            parseInt(b.price.replace(/ /g, ""))
          );
        } else if (sortCriteria === "highestPrice") {
          return (
            parseInt(b.price.replace(/ /g, "")) -
            parseInt(a.price.replace(/ /g, ""))
          );
        } else if (sortCriteria === "lowestMileage") {
          return a.mileage - b.mileage;
        } else if (sortCriteria === "highestMileage") {
          return b.mileage - a.mileage;
        }
        return 0;
      });
    }

    setFilteredCars(filtered);
  }, [homeCars, makeFilter, modelFilter, minPrice, maxPrice, sortCriteria]);

  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${logo})` }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="row mb-5">
                <div className="col-12 intro">
                  <h1 style={{ color: "#ffffff" }}>
                    <strong>Quality</strong> used vehicles you can trust.
                  </h1>
                </div>
              </div>
              <form className="trip-form">
                <div className="row align-items-center p-0 m-0">
                  <div className="mb-3 mb-md-0 col-md-3">
                    <select
                      className="custom-select form-control"
                      value={makeFilter}
                      onChange={(e) => setMakeFilter(e.target.value)}
                    >
                      <option value="">Select Make</option>
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
                      <select
                        className="custom-select form-control"
                        value={modelFilter}
                        onChange={(e) => setModelFilter(e.target.value)}
                        disabled={!makeFilter}
                      >
                        <option>Select Model</option>
                        {homeCars
                          .filter((car) => car.make === makeFilter)
                          .map((car, index) => (
                            <option key={index} value={car.model}>
                              {car.model}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select
                        className="custom-select form-control"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      >
                        <option value>Min Price</option>
                        <option value>R50 000</option>
                        <option value>R100 000</option>
                        <option value>R150 000</option>
                        <option value>R200 000</option>
                        <option value>R250 000</option>
                        <option value>R300 000</option>
                        <option value>R350 000</option>
                        <option value>R400 000</option>
                        <option value>R500 000</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 mb-md-0 col-md-3">
                    <div className="form-control-wrap">
                      <select
                        className="custom-select form-control"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      >
                        <option value>Max</option>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* featured cars section */}
      {/* listed cars */}
      <div className="container mt-5">
          {/* sort container */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-md-block m-auto d-none">
              <button
                className={`view-mode-button ${
                  viewMode === "grid" ? "active" : ""
                }`}
                onClick={() => setViewMode("grid")}
              >
                <span className="mode-icon">
                  <i className="bi bi-grid"></i>
                </span>{" "}
                <span className="view-text">Grid View</span>
              </button>
              <button
                className={`view-mode-button ${
                  viewMode === "list" ? "active" : ""
                }`}
                onClick={() => setViewMode("list")}
              >
                <span className="mode-icon">
                  <i className="bi bi-list"></i>
                </span>{" "}
                <span className="view-text">List View</span>
              </button>
            </div>
            <div className="col-sm-12 col-md-auto sort-container d-flex align-items-center">
              <span className="view-text" style={{ paddingRight: "20px" }}>
                Sort By:
              </span>
              <select
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                className="sort-input"
              >
                <option value="year">Year : Newest</option>
                <option value="lowestPrice">Price : Lowest</option>
                <option value="highestPrice">Price : Highest</option>
                <option value="lowestMileage">Mileage : Lowest</option>
                <option value="highestMileage">Mileage : Highest</option>
              </select>
            </div>
          </div>
          {/* sort container end */}
          {/* view mode change */}
          <div className={`car-list ${viewMode}`}>
            {viewMode === "grid" ? (
              // grid view
              <div className="row justify-content-center">
                {filteredCars.map((car, index) => (
                  <div
                    className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 car mt-4 mb-4"
                    key={index}
                  >
                    <div
                      className="card vehicle-card"
                      onClick={() => viewVehicle(car)}
                    >
                      <img
                        src={car.image}
                        alt={car.make}
                        className="car-image"
                        height={152}
                        width={205}
                      />
                      <div className="vehicle-details">
                        <div style={{ color: "#1223594" }}>
                          <h5 className="car-title">
                            {car.make} - {car.model}
                          </h5>
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
                          <div className="price">
                            <strong>R {car.price}</strong>
                          </div>
                        </div>
                        <button
                          onClick={() => viewVehicle(car)}
                          className="view-details-button"
                        >
                          View Details
                        </button>
                        <div className="branch">{car.branch}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // list view
              <div className="row justify-content-center">
                {filteredCars.map((car, index) => (
                  <div key={index} className="col-12">
                    <div className="card border list-car-item">
                      <div className="row mb-4">
                        <div className="col-md-3">
                          <img
                            src={car.image}
                            alt={car.make}
                            className="img-fluid car-list-image"
                          />
                        </div>
                        <div className="col-md-6">
                          <h5 className="list-car-title">
                            {car.make} {car.model}
                          </h5>
                          <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-mileage">
                              <span>
                                <ion-icon
                                  name="speedometer-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="speedometer outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.mileage}
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-transmission">
                              <span>
                                <ion-icon
                                  name="car-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="car outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.transmission}
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-year">
                              <span>
                                <ion-icon
                                  name="calendar-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="calendar outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.year}
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 list-location">
                              <span>
                                <ion-icon
                                  name="location-outline"
                                  role="img"
                                  className="md hydrated"
                                  aria-label="location outline"
                                ></ion-icon>{" "}
                              </span>
                              {car.branch}
                            </div>
                          </div>
                          <button
                            className="view-list-button mt-2"
                            onClick={() => viewVehicle(car)}
                          >
                            View Details
                          </button>
                        </div>
                        <div className="col-md-3 car-price">
                          <div className="align-items-end list-price text-center">
                            <strong>R {car.price}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredCars.length === 0 && (
                  <div className="col-12">
                    <p className="text-center">No cars match your filters</p>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* view mode change end */}
        </div>
    </>
  );
};

export default Hero;
