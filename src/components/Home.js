import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import HeaderThreeColumns from "./HeaderThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Home = () => {

    return (
        <>
            <Navigation/>
            <Header/>
            <HeaderThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home;