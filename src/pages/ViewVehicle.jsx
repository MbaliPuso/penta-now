import React from "react";
import "../styles/ViewVehicle.css";
import Header from "../components/Header";
import { useLocation, Link, useNavigate } from "react-router-dom";
import ViewVehicleForm from "../components/ViewVehicleForm";
import CarCarousel from "../components/CarCarousel";
import VehicleSpecs from "../components/VehicleSpecs";
import Footer from "../components/Footer";
import approvedBadge from "../assets/Approved_badge.png";
import SuggestionCars from "../components/SuggestionCars";

const ViewVehicle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state?.car;

  const handlePentaAproved = () => {
    navigate("/penta-approved");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row view-vehicle-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <Link to="/buy-a-car" className="all-cars-link">
              <i className="bi bi-arrow-left"></i>
              {"  "}Back
            </Link>
            <CarCarousel className="carousel-section" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-section">
            <h4 className="make-model">
              {car.make} - {car.model}
            </h4>
            <div className="vehicles-info align-items-center">
              <div className="info-icon">
                <span>
                  <ion-icon
                    name="speedometer-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="speedometer outline"
                  ></ion-icon>{' '}
                </span>
                {car.mileage} KM
              </div>
              <div className="info-icon">
                <span>
                  <ion-icon
                    name="cog-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="cog outline"
                  ></ion-icon>{' '}
                </span>
                {car.transmission}
              </div>
              <div className="info-icon">
                <span>
                  <ion-icon
                    name="car-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="car outline"
                  ></ion-icon>{' '}
                </span>
                {car.fuel}
              </div>
              <div className="info-icon">
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
              {car.pentaApproved === "yes" && (
                <div
                  className="more-info-icon"
                  onClick={() => handlePentaAproved()}
                  style={{ cursor: "pointer" }}
                >
                  
                  <span>
                    <img src={approvedBadge} alt={car.make} width={40} className="approved-badge-view" />
                  </span>{" "}
                  <span className="approved-icon-text">Approved</span>
                  <span className="pulse-container rounded-circle">
                    <span className="more-info-icon">
                    <i className="bi bi-info"></i>
                    </span>
                  </span>
                </div>
              )}
            </div>
            <h2 className="view-vehicle-price">R {car.price}</h2>
            <ViewVehicleForm />
          </div>
        </div>

        <div className="row second-view-vehicle-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <VehicleSpecs />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <SuggestionCars />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewVehicle;
