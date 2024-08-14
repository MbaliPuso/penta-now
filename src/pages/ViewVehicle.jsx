import React from "react";
import "../styles/ViewVehicle.css";
import Header from "../components/Header";
import { useLocation, Link, useNavigate } from "react-router-dom";
import ViewVehicleForm from "../components/ViewVehicleForm";
import CarCarousel from "../components/CarCarousel";
import VehicleSpecs from "../components/VehicleSpecs";
import PentaApprovedInfo from "../components/PentaApprovedInfo";
import Footer from "../components/Footer";
import approvedBadge from "../assets/Approved_badge.png";

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
      <div className="row view-vehicle-row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <Link to="/buy-a-car" className="all-cars-link">
            <i className="bi bi-arrow-left"></i>
            {"  "}Back
          </Link>
          <CarCarousel />
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
                ></ion-icon>
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
                ></ion-icon>
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
                ></ion-icon>
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
                ></ion-icon>
              </span>
              {car.branch}
            </div>
            {car.pentaApproved === "yes" && (
              <div
                className="info-icon"
                onClick={() => handlePentaAproved()}
                style={{ cursor: "pointer" }}
              >
                <span>
                  <img src={approvedBadge} alt={car.make} width={40} />
                </span>{" "}
                Approved
              </div>
            )}
          </div>
          <h2 className="view-vehicle-price">R {car.price}</h2>
          {car.pentaApproved === "yes" && (
            <PentaApprovedInfo />
          )}
          {car.pentaApproved !== "yes" && (
            <VehicleSpecs />
          )}
        </div>
      </div>
      {car.pentaApproved === "yes" ? (
        <div className="row view-vehicle-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <ViewVehicleForm />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <VehicleSpecs />
          </div>
        </div>
      ) : (
        <ViewVehicleForm />
      )}

      <Footer />
    </>
  );
};

export default ViewVehicle;
