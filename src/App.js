import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

/* import pages */
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/sign-up" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
