import React from "react";
import { NavLink} from "react-router-dom";

const MenuLogin = () => {

    return (
        <div className={"menu-login"}>
            <NavLink to="/Login" className={"button"}>Zaloguj </NavLink>
            <NavLink to="/" className={"button"}>Załóż konto</NavLink>

        </div>
    )
}

export default MenuLogin;