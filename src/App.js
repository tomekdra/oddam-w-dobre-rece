import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import MenuLogin from "./components/Menu/MenuLogin";
import Menu from "./components/Menu/Menu";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  return (
    <HashRouter>
        <>
            <MenuLogin/>
            <Menu/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={Login} />
            <Route path="/rejestracja" component={Register} />
            <Route path="/wylogowano" component={Logout} />
          </Switch>
        </>
    </HashRouter>
  );
}

export default App;
