import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/test">O co chodzi?</Link></li>
                <li><Link to="/Home">O nas</Link></li>
                <li><Link>Fundacje i organizacje</Link></li>
                <li><Link>Kontakt</Link></li>
            </ul>
        </nav>
    )
};

export default Menu;