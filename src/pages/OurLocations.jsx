import React from "react";
import Header from "../components/Header";
import LocationList from "../components/LocationList";
import ContactLocationForm from '../components/ContactLocationForm';
import Footer from '../components/Footer';

const OurLocations = () => {
    return (
        <>
        <Header />
        <LocationList />
        <ContactLocationForm />
        <Footer />
        </>
    );
};

export default OurLocations;