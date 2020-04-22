import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import Login from "./components/Login";
import MenuLogin from "./components/Menu/MenuLogin";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <HashRouter>
        <>
            <MenuLogin/>
            <Menu/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/logowanie" component={Login} />
          </Switch>
        </>
    </HashRouter>
  );
}

export default App;
