import React from "react";
import "../styles/PentaBenefits.css";
import vehicleApproved from "../assets/Vehicle_approved_img.png";

const PentaBenefits = () => {
  return (
    <>
      <div className="container-approved">
        <h2 className="penta-approved-heading">
          Introducing Penta Now Approved
        </h2>
        <div className="container">
          <div className="row approved-row">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              style={{ paddingTop: "15px" }}
            >
              <img
                src={vehicleApproved}
                alt="Penta Now Approved Vehicle"
                className="img-fluid vehicle-approved pt-0"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-0 ps-xl-0 ps-lg-3 ps-md-3 ps-3 approved-text">
              <p className="mb-0 fs-7 approved-paragraph">
                Drive with Confidence with Penta Now Approved At Penta Now, we
                understand that buying a pre-owned vehicle comes with its
                uncertainties. But what if you could experience the peace of
                mind of a new car purchase with the value of pre-owned? That's
                the promise of Penta Now Approved.
              </p>
              <p className="mb-0 fs-7 approved-paragraph">
                What is Penta Now Approved? Penta Now Approved is our program
                for exceptional pre-owned vehicles that have undergone a
                rigorous inspection process. These vehicles meet our high
                standards for quality and reliability, so you can be confident
                you're getting a great car.
              </p>
            </div>
          </div>

          <p className="benefits-heading text-center mt-4">
            Benefits of Penta Now Approved
          </p>

          <div className=" row approved-benefits">
            <div className="row list-benefits">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 text-center benefit-item">
                <div className="card penta-card border-0 shadow">
                  <div className="card-body">
                    <h3 className="benefit-item-heading">Peace of Mind</h3>
                    <p className="benefit-item-p">
                      Every Penta Now Approved vehicle comes with a 1-year or
                      20,000km maintenance warranty, ensuring you're covered for
                      unexpected repairs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 text-center benefit-item">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h3 className="benefit-item-heading">
                      Hassle-Free Ownership
                    </h3>
                    <p className="benefit-item-p">
                      We select only the best pre-owned vehicles for our
                      program, so you can be sure you're getting a reliable and
                      well-maintained car.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 text-center pe-0 benefit-item">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h3 className="benefit-item-heading">Cream of the Crop</h3>
                    <p className="benefit-item-p">
                      Explore hassle-free Vehicle Financing - Our experts are
                      ready to tailor the perfect financing plan to drive your
                      dreams forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="paragraph-end">
            Drive away with confidence. Choose Penta Now Approved Today!
          </p>
        </div>
      </div>
    </>
  );
};

export default PentaBenefits;
