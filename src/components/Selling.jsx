import React from "react";
import '../styles/Selling.css';
import favicon from '../assets/favicon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";

const Selling = () => {
    return (
        <>
        <div className="sell-car-heading">
        <h2 class="fs-3 mb-0" style={{color:'#2a74e7', fontWeight: 700, fontSize: 'calc(1.46875rem + 2.625vw)' }}>We Offer The Best Deal For Your Used Car...</h2>
        </div>
        
        <div className="offers-card mt-5">
        <ul className="selling-ul">
        <div className="card mb-4">
            <li className="item p-3">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 icon-box">
                    <FontAwesomeIcon icon={faCircleCheck} className="circle-check-icon"/>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 in">
                    <div className="offers-heading">How It Works</div>
                    <div className="small-text">Fill in the form | Bring in your car for evaluation | Get An Offer - It's That Easy</div>
                    </div>
                </div>
            </li>
            </div>
            <div className="card mb-4">

            <li className="item">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 icon-box-image">
                    <img src={favicon} alt="Penta Now logo icon" className="icon" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 in">
                    <div className="offers-heading">Dedicated To Fair Trade</div>
                    <div className="small-text">We offer te best amount for your used vehicle</div>
                    </div>
                </div>
            </li>
            </div>
            <div className="card mb-4">
            <li className="item">
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 icon-box-image">
                    <img src={favicon} alt="Penta Now logo icon" className="icon" />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 in">
                    <div className="offers-heading">Quick, Fast & Easy Process</div>
                    <div className="small-text">We remain committed to bring you the best offer in a hour after vehicle evaluation</div>
                    </div>
                </div>
            </li>
            </div>
        </ul>
        </div>
        </>
    );
};

export default Selling;