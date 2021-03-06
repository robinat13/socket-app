import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./dataview/Home";
import Chat from "./dataview/Chat";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/chat" component={Chat}></Route>
      </Switch>
    </Router>
  );
};

export default App;
