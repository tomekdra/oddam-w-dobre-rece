import React from "react";
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Fundations from "./WhoWeHelp/Fundations";
import Organizations from "./WhoWeHelp/Organizations";
import Local from "./WhoWeHelp/Local";

const WhoWeHelp = () => {

    return (
        <>
            <h2>Komu pomagamy</h2>
            <div className={"decoration"}/>
            <Link to={"/"}>Fundacje</Link>
            <Link to={"/Organization"}>Organizacje</Link>
            <Link to={"/Local"}>Locals</Link>

            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Fundations}/>
                    <Route path="/Organization" component={Organizations}/>
                    <Route path="/Local" component={Local}/>
                </Switch>
            </HashRouter>
        </>
    )
}

export default WhoWeHelp;