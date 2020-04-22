import React from "react";
import Header from "./Header";
import HeaderThreeColumns from "./HeaderThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactUs from "./ContactUs";

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