import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CarListings from "../components/CarListings";
import Offers from "../components/Offers";
import Consult from "../components/Consult";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="site-wrap" id="home-section">
            <Header />
            <Hero />
            <CarListings />
            <Offers />
            <Consult />
            <Footer />
        </div>
    );
};

export default Home;