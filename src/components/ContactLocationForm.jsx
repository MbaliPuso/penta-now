import React from "react";
import '../styles/ContactLocationForm.css';

const LocationForm = () => {
  return (
    <>
      <div className="row contact-location">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <div className="small-contact">Contact Us</div>
          <h2 className="contact-p">Buying or Selling A Used Vehicle?. Talk To Us Today!</h2>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <form>
            <div className="row mb-3 name-surname">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="form-group">
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
              <input
                type="number"
                class="form-control"
                id="phoneNumber"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div class="form-group col-12 mb-3">
              <input
                type="email"
                class="form-control"
                id="emailAddress"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div class="form-group col-12 mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message"></textarea>  
            </div>
            <div className="agree-text">By clicking on te Sign Up button, you agree to Penta Now <a href="/" style={{ color: '#1642b9', textDecoration: 'none' }}>terms and conditions</a></div>
            <div className="col-5">
                <button type="button mt-2 send-message-button">
                    Send Message
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LocationForm;
