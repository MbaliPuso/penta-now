import React from "react";
import approvedBadge from "../assets/Approved_badge.png";
import "../styles/PentaApprovedInfo.css";

const pentaApprovedInfo = () => {
  return (
    <div className="container approved-information mt-4">
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <img
            src={approvedBadge}
            alt="Penta Now Approved Pre-Owned Vehicle"
            className="penta-badge-view"
          />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <h2>Penta Now Approved Vehicles</h2>
          <p>
            What is Penta Now Approved? Penta Now Approved is our program for
            exceptional pre-owned vehicles that have undergone a rigorous
            inspection process. These vehicles meet our high standards for
            quality and reliability, so you can be confident you're getting a
            great car.
          </p>
        </div>
      </div>

      <p>
        <strong>Benefits of Penta Now Approved</strong>
      </p>
      <ul>
        <li>
          Peace of Mind: Every Penta Now Approved vehicle comes with a 1-year or
          20,000km maintenance warranty, ensuring you're covered for unexpected
          repairs.
        </li>
        <li>
          Hassle-Free Ownership: Enjoy the convenience of free license renewal
          and servicing for a year, so you can focus on the joy of driving.
        </li>
        <li>
          Cream of the Crop: We select only the best pre-owned vehicles for our
          program, so you can be sure you're getting a reliable and
          well-maintained car.
        </li>
      </ul>
      <p>Drive away with confidence. Choose Penta Now Approved today!</p>
    </div>
  );
};

export default pentaApprovedInfo;
