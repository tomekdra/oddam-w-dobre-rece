import React from "react";
import { NavLink} from "react-router-dom";
import {Link} from 'react-scroll'

const Menu = () => {

    return (
        <nav>
            <ul className={"menu-content"}>
                <li><NavLink to="/" className={"button"} >Start</NavLink></li>
                <li><Link to="four-steps" className={"button"} smooth={true} duration={1000}>O co chodzi?</Link></li>
                <li><Link to="aboutus" className={"button"} smooth={true} duration={1000}>O nas</Link></li>
                <li><Link to="who-we-help" className={"button"} smooth={true} duration={1000}>Fundacje i organizacje</Link></li>
                <li><Link to="contactus" className={"button"} smooth={true} duration={1000}>Kontakt</Link></li>
            </ul>
        </nav>
    )
};

export default Menu;