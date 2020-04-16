import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/Login" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;
