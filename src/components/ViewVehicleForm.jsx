import React from "react";

const ViewVehicleForm = () => {
    return (
        <>
        <form className="contact-view-form">
        <h3 className="fill-in-details">Fill in your details below and a dedicated consultant will contact you</h3>
          <div className="row mb-3 name-surname">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group">
                <label htmlFor="firstName">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="form-group">
                <label htmlFor="lastName">Your Surname</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter Your Surname"
                />
              </div>
            </div>
          </div>
          <div class="form-group col-12 mb-3">
            <label htmlFor="cellNumber">Your Cell Number</label>
            <input
              type="number"
              class="form-control"
              id="phoneNumber"
              placeholder="Enter Your Cell Number"
            />
          </div>
          <div class="form-group col-12 mb-3">
            <label htmlFor="emailAddress">Your Email Address</label>
            <input
              type="email"
              class="form-control"
              id="emailAddress"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div class="form-group w-100 mt-5">
            <button type="button mt-2 send-message-button" className="btn btn-primary btn-lg btn-block rounded">Send Message</button>
          </div>
        </form>
        </>
    );
};

export default ViewVehicleForm;