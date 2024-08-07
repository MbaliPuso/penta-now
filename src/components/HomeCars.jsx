import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllCars.css";
import "../styles/HomeCars.css";
import carOne from "../assets/Mercedes-Benz-B-class.jpg";
import carTwo from "../assets/chevrolet-utility.jpg";
import carThree from "../assets/nissan-qashqai.jpg";
import carFour from "../assets/Honda_Jazz.jpg";

const HomeCars = () => {
  const navigate = useNavigate();
  
  const homeCars = [
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
  ];

  const [viewMode, setViewMode] = useState("grid");
  const [sortCriteria, setSortCriteria] = useState("");

  const viewVehicle = (car) => {
    navigate("/view-vehicle", { state: { car } });
  };

  const buyCar = () => {
    navigate("/buy-a-car");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="home-intro">
          <div className="small-home-heading">Welcome To Penta Now</div>
          <h2 className="featured-vehicles-heading">Featured Vehicles</h2>
        </div>
        {/* sort container start */}
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
        <div className="row">
          {homeCars.map((car, index) => (
            <div
              key={index}
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 mb-4 car"
            >
              <div className="card vehicle-card">
                <img
                  src={car.image}
                  alt={car.name}
                  className="car-image"
                  height={152}
                  width={203}
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
        <button className="d-block m-auto" onClick={() => buyCar()}>View All Cars</button>
      </div>
    </>
  );
};

export default HomeCars;
