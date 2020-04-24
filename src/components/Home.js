import React from "react";
import Header from "./header/Header";
import HeaderThreeColumns from "./header/HeaderThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./contactus/ContactUs";

const Home = () => {

    return (
        <>
            <Header/>
            <HeaderThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <ContactUs/>
        </>
    )
}

export default Home;