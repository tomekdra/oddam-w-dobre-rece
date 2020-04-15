import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import HeaderThreeColumns from "./components/HeaderThreeColumns";
import FourSteps from "./components/FourSteps";
import AboutUs from "./components/AboutUs";
import WhoWeHelp from "./components/WhoWeHelp";

function App() {
  return (
    <HashRouter>
        <Header />
        <HeaderThreeColumns />
        <FourSteps />
        <AboutUs />
        <WhoWeHelp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/Login" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;
