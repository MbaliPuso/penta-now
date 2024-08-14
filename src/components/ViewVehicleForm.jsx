import React from "react";

const ViewVehicleForm = () => {
    return (
        <>
        <form className="contact-view-form pt-4 d-block m-auto">
        <h3 className="fill-in-details" style={{ fontSize: '1.75rem' }}>Fill in your details below and a dedicated consultant will contact you</h3>
          <div className="row mb-3 name-surname">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <label className="view-form-label" htmlFor="firstName">Your Name</label>
                <input
                  type="text"
                  className="form-control view-form-input"
                  id="firstName"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <label htmlFor="lastName" className="view-form-label">Your Surname</label>
                <input
                  type="text"
                  className="form-control view-form-input"
                  id="lastName"
                  placeholder="Enter Your Surname"
                />
              </div>
            </div>
          </div>
          <div className="form-group col-12 mb-3">
            <label htmlFor="cellNumber" className="view-form-label">Your Cell Number</label>
            <input
              type="number"
              className="form-control view-form-input"
              id="phoneNumber"
              placeholder="Enter Your Cell Number"
            />
          </div>
          <div className="form-group col-12 mb-3">
            <label htmlFor="emailAddress" className="view-form-label">Your Email Address</label>
            <input
              type="email"
              className="form-control view-form-input"
              id="emailAddress"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="form-group w-100 mt-5">
            <button type="button mt-2 send-message-button" className="btn btn-primary btn-lg btn-block rounded">Send Message</button>
          </div>
        </form>
        </>
    );
};

export default ViewVehicleForm;