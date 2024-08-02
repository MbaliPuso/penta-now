import React from "react";
import '../styles/VehicleSpecs.css';
import { useLocation } from "react-router-dom";

const VehicleSpecs = () => {
    const location = useLocation();
    const car = location.state?.car;
    return (
        <>
        <div className="spec-items">
            <div className="spec-item mb-3">
                <span className="spec-title">Make</span>
                <span className="spec-title-value">{car.make}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Model</span>
                <span className="spec-value">{car.model}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Description</span>
                <span className="spec-value">{car.variant}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Year</span>
                <span className="spec-value">{car.year}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Mileage</span>
                <span className="spec-value">{car.mileage}</span>
            </div>
            <div className="spec-item">
                <span className="spec-title mb-3">Engine Size</span>
                <span className="spec-value">{car.engine}</span>
            </div>
            <div className="spec-item">
                <span className="spec-title mb-3">Fuel Type</span>
                <span className="spec-value">{car.fuel}</span>
            </div>
            <div className="spec-item">
                <span className="spec-title mb-3">Gearbox</span>
                <span className="spec-value">{car.transmission}</span>
            </div>
            <div className="spec-item">
                <span className="spec-title mb-3">Color</span>
                <span className="spec-value">{car.color}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Vehicle Type</span>
                <span className="spec-value">{car.type}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Stock Number</span>
                <span className="spec-value">{car.stockNo}</span>
            </div>
            <div className="spec-item mb-3">
                <span className="spec-title">Has Service History</span>
                <span className="spec-value">{car.serviceHistory}</span>
            </div>
        </div>
        </>
    );
};

export default VehicleSpecs;