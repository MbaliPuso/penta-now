import React from "react";
import '../styles/ViewVehicle.css'
import Header from '../components/Header'
import { useLocation } from "react-router-dom";
import ViewVehicleForm from "../components/ViewVehicleForm";
import CarCarousel from "../components/CarCarousel";
import VehicleSpecs from "../components/VehicleSpecs";
import Footer from "../components/Footer"

const ViewVehicle = () => {
    const location = useLocation();
    const car = location.state?.car;

    return (
        <>
        <Header />
        <div className="row view-vehicle-row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <CarCarousel />
                <VehicleSpecs />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-section">
                <h4>{car.make} - {car.model}</h4>
                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <span>
                        <ion-icon name="speedometer-outline" role="img" className="md hydrated" aria-label="speedometer outline"></ion-icon>
                        </span>
                        {car.mileage} KM
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <span>
                        <ion-icon name="cog-outline" role="img" className="md hydrated" aria-label="cog outline"></ion-icon>
                        </span>
                        {car.transmission}
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <span>
                        <ion-icon name="car-outline" role="img" className="md hydrated" aria-label="car outline"></ion-icon>
                        </span>
                        {car.fuel}
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <span>
                        <ion-icon name="location-outline" role="img" className="md hydrated" aria-label="location outline"></ion-icon>
                        </span>
                        {car.branch}
                    </div>
                </div>
                <h2 className="view-vehicle-price">R {car.price}</h2>
                <ViewVehicleForm />
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ViewVehicle;