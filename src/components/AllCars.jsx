import React, { useState, useEffect, useMemo } from "react";
import "../styles/AllCars.css";
import { useNavigate } from "react-router-dom";
import carOne from "../assets/Mercedes-Benz-B-class.jpg";
import carTwo from "../assets/chevrolet-utility.jpg";
import carThree from "../assets/nissan-qashqai.jpg";
import carFour from "../assets/Honda_Jazz.jpg";
import carFive from "../assets/datsun-go.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const AllCars = () => {
  // Cars data
  const cars = useMemo(
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
      {
        image: carFive,
        type: "Hatchback",
        make: "Datsun",
        model: "Go",
        variant: "1.2 LUX",
        year: 2020,
        mileage: 52200,
        price: "129 900",
        engine: 1200,
        fuel: "Petrol",
        transmission: "Manual",
        color: "Silver",
        branch: "Gezina",
        stockNo: "UNG36",
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
      {
        image: carFive,
        type: "Hatchback",
        make: "Datsun",
        model: "Go",
        variant: "1.2 LUX",
        year: 2020,
        mileage: 52200,
        price: "129 900",
        engine: 1200,
        fuel: "Petrol",
        transmission: "Manual",
        color: "Silver",
        branch: "Gezina",
        stockNo: "UNG36",
        serviceHistory: "yes",
      },
    ],
    []
  );

  const navigate = useNavigate();
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [mileageFilter, setMileageFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [sortCriteria, setSortCriteria] = useState("");

  const viewVehicle = (car) => {
    navigate("/view-vehicle", { state: { car } });
  };

  useEffect(() => {
    // Filter cars based on selected filters
    let filtered = cars.filter((car) => {
      return (
        (!makeFilter || car.make === makeFilter) &&
        (!modelFilter || car.model === modelFilter) &&
        (!mileageFilter || car.mileage <= parseInt(mileageFilter, 10)) &&
        (!branchFilter || car.branch === branchFilter) &&
        (!fuelFilter || car.fuel === fuelFilter) &&
        (!transmissionFilter || car.transmission === transmissionFilter) &&
        (!minPrice || car.price >= parseInt(minPrice, 10)) &&
        (!maxPrice || car.price <= parseInt(maxPrice, 10)) &&
        (!minYear || car.year >= parseInt(minYear, 10)) &&
        (!maxYear || car.year <= parseInt(maxYear, 10))
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
  }, [
    cars,
    makeFilter,
    modelFilter,
    mileageFilter,
    branchFilter,
    fuelFilter,
    transmissionFilter,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    sortCriteria,
  ]);

  return (
    <>
      <div className="section" style={{ marginTop: 120 }}>
        <div className="all-cars-intro text-center">
          <div className="small-home-heading">Browse for used vehicles</div>
          <h2 className="featured-vehicles-heading">
            Featured Vehicles to Buy From
          </h2>
        </div>
        <button
          className="d-md-none d-block m-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <div className={showFilters ? "d-block" : "d-none d-md-block"}>
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10">
              <form className="trip-form">
                <div className="row align-items-center">
                  <div className="mb-md-0 col-md-3">
                    <select
                      id="makeFilter"
                      data-filter="make"
                      className="custom-select filter"
                      value={makeFilter}
                      onChange={(e) => setMakeFilter(e.target.value)}
                    >
                      <option value="">Make</option>
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
                  <div className="col-md-3">
                    <select
                      id="modelFilter"
                      data-filter="model"
                      className="custom-select filter"
                      value={modelFilter}
                      onChange={(e) => setModelFilter(e.target.value)}
                      disabled={!makeFilter}
                    >
                      <option value="">Model</option>

                      {cars
                        .filter((car) => car.make === makeFilter)
                        .map((car, index) => (
                          <option key={index} value={car.model}>
                            {car.model}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      id="mileageFilter"
                      data-filter="mileage"
                      className="custom-select filter"
                      value={mileageFilter}
                      onChange={(e) => setMileageFilter(e.target.value)}
                    >
                      <option value="">Mileage</option>
                      <option value="10000">&lt;10000 KM</option>
                      <option value="50000">&lt;50000 KM</option>
                      <option value="150000">&lt;150000 KM</option>
                      <option value="200000">200000 KM</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      id="branchFilter"
                      className="custom-select filter"
                      value={branchFilter}
                      onChange={(e) => setBranchFilter(e.target.value)}
                    >
                      <option value="">All Branches</option>
                      <option value="Centurion">Centurion</option>
                      <option value="Lynnwood">Lynnwood</option>
                      <option value="Gezina">Gezina</option>
                      <option value="Klerksdorp">Klerksdorp</option>
                      <option value="Brits">Brits</option>
                      <option value="Mokopane">Mokopane</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mt-4">
                  <div className="col-md-3">
                    <select
                      id="fuelFilter"
                      data-filter="fuel"
                      className="custom-select filter"
                      value={fuelFilter}
                      onChange={(e) => setFuelFilter(e.target.value)}
                    >
                      <option value="">Fuel Type</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      id="transmissionFilter"
                      data-filter="transmission"
                      className="custom-select filter"
                      value={transmissionFilter}
                      onChange={(e) => setTransmissionFilter(e.target.value)}
                    >
                      <option value="">Transmission</option>
                      <option>Manual</option>
                      <option>Automatic</option>
                      <option>CVT</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 left-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="minPrice"
                              placeholder="Min Price"
                              value={minPrice}
                              onChange={(e) => setMinPrice(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 right-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="maxPrice"
                              placeholder="Max Price"
                              value={maxPrice}
                              onChange={(e) => setMaxPrice(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 left-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="minYear"
                              placeholder="Min Year"
                              value={minYear}
                              onChange={(e) => setMinYear(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 right-input">
                        <div className="exchange-group small">
                          <div className="input-col">
                            <input
                              type="number"
                              className="custom-select filter"
                              id="maxYear"
                              placeholder="Max Year"
                              value={maxYear}
                              onChange={(e) => setMaxYear(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* listed cars */}
        <div className="container mt-5">
          {/* sort container */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-block m-auto">
              <button
                className={`view-mode-button ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <span className="mode-icon"><i className="bi bi-grid"></i></span> <span className="view-text">Grid View</span>
              </button>
              <button
                className={`view-mode-button ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <span className="mode-icon"><i className="bi bi-list"></i></span> <span className="view-text">List View</span>
              </button>
            </div>
            <div className="sort-container d-flex align-items-center">
              <span className="view-text" style={{ paddingRight: '20px' }}>Sort By:</span>
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
                          <div className="price"><strong>R {car.price}</strong></div>
                        </div>
                        <button onClick={() => viewVehicle(car)} className="view-details-button">View Details</button>
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
                        <div
                          className="col-md-3"
                        >
                          <img
                            src={car.image}
                            alt={car.make}
                            className="img-fluid car-list-image"
                          />
                        </div>
                        <div
                          className="col-md-6"
                        >
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
                                ></ion-icon>{' '}
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
                                ></ion-icon>{' '}
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
                                ></ion-icon>{' '}
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
                                ></ion-icon>{' '}
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
                        <div
                          className="col-md-3 car-price"
                        >
                         <div className="align-items-end list-price text-center"><strong>R {car.price}</strong></div> 
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
      </div>
    </>
  );
};

export default AllCars;
