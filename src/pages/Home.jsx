import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Consult from "../components/Consult";
import ContactLocationForm from "../components/ContactLocationForm";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="site-wrap" id="home-section">
            <Header />
            <Hero />
            <Offers />
            <Consult />
            <ContactLocationForm />
            <Footer />
        </div>
    );
};

export default Home;