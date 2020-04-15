import React from "react";
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Fundations from "./Fundations";
import Organizations from "./Organizations";
import Local from "./Local";

const WhoWeHelp = () => {

    return (
        <>
            <h2>Komu pomagamy</h2>
            <div className={"decoration"}/>
            <Link to={"/Fundations"}>Fundacje</Link>
            <Link to={"/Organization"}>Organizacje</Link>
            <Link to={"/Local"}>Locals</Link>

            <HashRouter>
                <Switch>
                    <Route exact path="/Fundations" component={Fundations}/>
                    <Route path="/Organization" component={Organizations}/>
                    <Route path="/Local" component={Local}/>
                </Switch>
            </HashRouter>
        </>
    )
}

export default WhoWeHelp;