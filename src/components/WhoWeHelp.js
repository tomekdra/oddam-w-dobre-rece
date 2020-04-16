import React from "react";
import {Link, NavLink, Route, Switch} from "react-router-dom";
import Fundations from "./WhoWeHelp/Fundations";
import Organizations from "./WhoWeHelp/Organizations";
import Local from "./WhoWeHelp/Local";

const WhoWeHelp = () => {

    return (
        <div className={"who-we-help"}>
            <h2>Komu pomagamy</h2>
            <div className={"decoration"}/>
            <NavLink to={"/Fundation"}>Fundacje</NavLink>
            <NavLink to={"/Organization"}>Organizacje</NavLink>
            <NavLink to={"/Local"}>Locals</NavLink>


                <Switch>
                    <Route exact path="/Fundation" component={Fundations}/>
                    <Route path="/Organization" component={Organizations}/>
                    <Route path="/Local" component={Local}/>
                </Switch>

        </div>
    )
}

export default WhoWeHelp;