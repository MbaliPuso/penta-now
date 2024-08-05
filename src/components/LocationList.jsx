import React from "react";
import direction from '../assets/getdirection.png';
import '../styles/LocationList.css';

const LocationList = () => {
  return (
    <>
      <div className="location-container">
        <div className="introduction">
          <div className="location-small-text">Our Locations</div>
          <h2 className="location-description">Visit A Branch <br /> Near You.</h2>
        </div>
        <div className="row">
            <div className="card w-80 directions-card card-body col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-transparent">
                <h3 className="branch-name">Centurion</h3>
                <p className="branch-address">3 Lenchen Ave, Centurion Central, Centurion, 0014</p>
                <p className="branch-number">Call : <a href="tel:0846398663" style={{ color: '#ffffff' }}>084 639 8663</a></p>
                <p className="email-address">Email : <a href="mailto:centurion@now.co.za" style={{ color: '#ffffff' }}>centurion@now.co.za</a></p>
                <a href="https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014">
                <img src={direction} alt="Get direction to Centurion penta" className="get-directions-image" />
                </a>
            </div>
            <div className="card w-80 directions-card card-body col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-transparent">
                <h3 className="branch-name">Gezina</h3>
                <p className="branch-address">103 SteveBiko Road, Wonderboom South, Gauteng</p>
                <p className="branch-number">Call : <a href="tel:0834885391" style={{ color: '#ffffff' }}>084 639 8663</a></p>
                <p className="email-address">Email : <a href="mailto:gezina@now.co.za" style={{ color: '#ffffff' }}>centurion@now.co.za</a></p>
                <a href="https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014">
                <img src={direction} alt="Get direction to Centurion penta" className="get-directions-image" />
                </a>
            </div>
            <div className="card directions-card card-body col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-transparent">
                <h3 className="branch-name">Brits</h3>
                <p className="branch-address">73 Spoorweg, Brits, North West Province, South Africa</p>
                <p className="branch-number">Call : <a href="tel:0794880244" style={{ color: '#ffffff' }}>079 488 0244</a></p>
                <p className="email-address">Email : <a href="mailto:centurion@now.co.za" style={{ color: '#ffffff' }}>brits@now.co.za</a></p>
                <a href="https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014">
                <img src={direction} alt="Get direction to Centurion penta" className="get-directions-image" />
                </a>
            </div>
        </div>
        <div className="row">
        <div className="card directions-card card-body col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-transparent border-outline">
                <h3 className="branch-name">Mokopane</h3>
                <p className="branch-address">102 Thabo Mbeki Drive, Mokopane Drive, Limpopo, 0601</p>
                <p className="branch-number">Call : <a href="tel:0790536663" style={{ color: '#ffffff' }}>079 053 6663</a></p>
                <p className="email-address">Email : <a href="mailto:mokopane@now.co.za" style={{ color: '#ffffff' }}>mokopane@now.co.za</a></p>
                <a href="https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014">
                <img src={direction} alt="Get direction to Centurion penta" className="get-directions-image" />
                </a>
            </div>
            <div className="card directions-card card-body col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-transparent">
                <h3 className="branch-name">Klerksdorp</h3>
                <p className="branch-address">70 Buffelsfoorn Rd, Wilkoppies, Klerksdorp, 2571</p>
                <p className="branch-number">Call : <a href="tel:0836283195" style={{ color: '#ffffff' }}>083 628 3195</a></p>
                <p className="email-address">Email : <a href="mailto:klerksdorp@now.co.za" style={{ color: '#ffffff' }}>klerksdorp@now.co.za</a></p>
                <a href="https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014">
                <img src={direction} alt="Get direction to Centurion penta" className="get-directions-image" />
                </a>
            </div>
            <div className="card directions-card card-body col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-transparent">
                <h3 className="branch-name">Lynnwood</h3>
                <p className="branch-address">Cnr Simon Vermooten, Lynnwood Rd, Lynnwood, Pretoria, 0081</p>
                <p className="branch-number">Call : <a href="tel:0834885391" style={{ color: '#ffffff' }}>083 488 5391</a></p>
                <p className="email-address">Email : <a href="mailto:lynwood@now.co.za" style={{ color: '#ffffff' }}>lynwood@now.co.za</a></p>
                <a href="https://www.google.com/maps?rlz=1C1CHBF_enZA1047ZA1047&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGBQYrwEYxwEYhwIYgAQyBwgCEAAYgAQyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=za&sa=X&geocode=KVOZVWHNZZUeMVf6_2C1NYGS&daddr=3+Lenchen+Ave,+Centurion+Central,+Centurion,+0014">
                <img src={direction} alt="Get direction to Centurion penta" className="get-directions-image" />
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default LocationList;
