import React from "react";
import "../styles/ContactUsForm.css";

const ContactUsForm = () => {
  return (
    <>
      <div className="container contact-form">
        
        <form className="contact-us-form">
        <h3 className="fill-in-details">Fill in your details below and a dedicated consultant will contact you</h3>
          <div className="row mb-3 name-surname">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <label htmlFor="firstName" className="sell-form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control contact-us-input"
                  id="firstName"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <label htmlFor="lastName" className="sell-form-label">Your Surname</label>
                <input
                  type="text"
                  className="form-control contact-us-input"
                  id="lastName"
                  placeholder="Enter Your Surname"
                />
              </div>
            </div>
          </div>
          <div className="form-group col-12 mb-3">
            <label htmlFor="cellNumber" className="sell-form-label">Your Cell Number</label>
            <input
              type="number"
              className="form-control contact-us-input"
              id="phoneNumber"
              placeholder="Enter Your Cell Number"
            />
          </div>
          <div className="form-group col-12 mb-3">
            <label htmlFor="emailAddress" className="sell-form-label">Your Email Address</label>
            <input
              type="email"
              className="form-control contact-us-input"
              id="emailAddress"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="form-group col-12 mb-3">
            <label htmlFor="branch" className="sell-form-label">Please select branch</label>
            <select
              id="branchFilter"
              className="filter-branch filter form-control"
            >
              <option value="Centurion">Centurion</option>
              <option value="Lynnwood">Lynnwood</option>
              <option value="Gezina">Gezina</option>
              <option value="Klerksdorp">Klerksdorp</option>
              <option value="Brits">Brits</option>
              <option value="Mokopane">Mokopane</option>
            </select>
          </div>
          <div className="form-group col-12 mb-3">
            <label htmlFor="enquiry" className="sell-form-label">Enquiry</label>
            <input
              type="text"
              className="form-control contact-us-input"
              id="enquiry"
              placeholder="Enquiry details..."
            />
          </div>
          <div className="form-group w-100 mt-5">
            <button type="button mt-2 send-message-button" className="btn btn-primary btn-lg btn-block rounded">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
