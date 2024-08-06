import React, { useState, useEffect, useMemo } from "react";
import "../styles/AllCars.css";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import carOne from "../assets/Mercedes-Benz-B-class.jpg";
import carTwo from "../assets/chevrolet-utility.jpg";
import carThree from "../assets/nissan-qashqai.jpg";
import carFour from "../assets/Honda_Jazz.jpg";
import carFive from "../assets/datsun-go.jpg";

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
  ]);

  return (
    <>
      <div id="appCapsule" className="extra-header-active full-height">
        <div className="section tab-content mb-1" style={{ marginTop: 120 }}>
        <button
          className="d-md-none d-block m-auto w-75"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
          <div className={showFilters ? "d-block" : "d-none d-md-block"}>
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
              <div className="col-md-12 col-sm-3">
                <form
                  id="select-form"
                  method="POST"
                  encType="multipart/form-data"
                  style={{ display: "flex" }}
                >
                  <div className="col-12 col-md-3">
                    <select
                      id="makeFilter"
                      data-filter="make"
                      className="filter-make filter form-control"
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
                  <div
                    className="col-12 col-md-3"
                    style={{ marginRight: 6, marginLeft: 6 }}
                  >
                    <select
                      id="modelFilter"
                      data-filter="model"
                      className="filter-model filter form-control"
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
                  <div className="col-12 col-md-3">
                    <select
                      id="mileageFilter"
                      data-filter="mileage"
                      className="filter-mileage filter form-control"
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
                  <div className="col-12 col-md-3">
                    <select
                      id="branchFilter"
                      className="filter-branch filter form-control"
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
                  method="POST"
                  encType="multipart/form-data"
                  style={{ display: "flex" }}
                >
                  <div className="col-12 col-md-3">
                    <select
                      id="fuelFilter"
                      data-filter="fuel"
                      className="filter-fuel filter form-control"
                      value={fuelFilter}
                      onChange={(e) => setFuelFilter(e.target.value)}
                    >
                      <option value="">Fuel Type</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                    </select>
                  </div>
                  <div
                    className="col-12 col-md-3"
                    style={{ marginRight: 6, marginLeft: 6 }}
                  >
                    <select
                      id="transmissionFilter"
                      data-filter="transmission"
                      className="filter-transmission filter form-control"
                      value={transmissionFilter}
                      onChange={(e) => setTransmissionFilter(e.target.value)}
                    >
                      <option value="">Transmission</option>
                      <option>Manual</option>
                      <option>Automatic</option>
                      <option>CVT</option>
                    </select>
                  </div>
                  <div
                    className="row"
                    style={{ marginLeft: "15px", marginRight: "13px" }}
                  >
                    <div className="col-6 col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="number"
                            className="form-control filter pe-0 price-range"
                            id="minPrice"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="number"
                            className="form-control filter pe-0"
                            id="maxPrice"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginLeft: "15px", marginRight: "3px" }}
                  >
                    <div className="col-6 col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="number"
                            className="form-control filter pe-0 price-range"
                            id="minYear"
                            placeholder="Min Year"
                            value={minYear}
                            onChange={(e) => setMinYear(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-6 px-0">
                      <div className="exchange-group small">
                        <div className="input-col">
                          <input
                            type="number"
                            className="form-control filter pe-0"
                            id="maxYear"
                            placeholder="Max Year"
                            value={maxYear}
                            onChange={(e) => setMaxYear(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              {filteredCars.map((car, index) => (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 mb-4 car"
                >
                  <div className="card vehicle-card">
                    <img
                      src={car.image}
                      className="car-image"
                      alt={car.make}
                      height={152}
                      // width={250}
                    />
                    <div className="vehicle-details">
                      <div style={{ color: "#123594" }}>
                        <h5 className="car-title">
                          {car.make} <span> - {car.model}</span>
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
              {filteredCars.length === 0 && (
                <div className="col-12">
                  <p className="text-center">No cars match your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCars;
