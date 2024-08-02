import React from "react";
import Header from "../components/Header";
// import hero from "../assets/hero1.jpg";
// import Selling from "../components/Selling";
import SellCarForm from "../components/SellCarForm";

const SellCar = () => {
  return (
    <>
    
    <Header />
      
      {/* <div
        className="hero inner-page mb-5"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="container">
          <div className="row align-items-end ">
            <div className="col-lg-5">
              <div className="intro">
                <h1>
                  <strong>Sell A Car</strong>
                </h1>
                <div className="custom-breadcrumbs">
                  <a href="index.html">Home</a> <span className="mx-2">/</span>{" "}
                  <strong>Sell A Car</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Selling /> */}
      <SellCarForm />
    </>
  );
};

export default SellCar;
