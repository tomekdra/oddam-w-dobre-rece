import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Logout = () => {

    return (
        <div className={"container"}>
            <div className={"logout-container"}>
                <div>
                    <h2>Wylogowanie nastąpiło pomyślnie</h2>
                    <div className={"decoration"}/>
                    <NavLink exact to="/" className={"button border"} >Strona główna</NavLink>
                </div>

            </div>
        </div>
    )
};

export default Logout;