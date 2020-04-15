import React from "react";
import {Link} from "react-router-dom";

const MenuLogin = () => {

    return (
        <div>
            <Link to="/Login"> Zaloguj</Link>
            <Link>Załóż konto</Link>
        </div>
    )
}

export default MenuLogin;