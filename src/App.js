import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeLandingPage from "./Components/HomePage/HomeLandingPage";

function App() {
  return (
    
      <div className="App">
          
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path="/homePage" component={HomeLandingPage} />
          </Switch>
        </div>
      
    
  );
}

export default App;
