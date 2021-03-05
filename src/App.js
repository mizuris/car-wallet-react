import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyFleet from "./pages/MyFleet/MyFleet";
import FleetConfig from "./pages/FleetConfig/FleetConfig";
import Profile from "./pages/Profile/Profile";
import DriverContextProvider from "./contexts/DriverContext";

function App() {
  return (
    <div className="App">
      <DriverContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fleet-my" component={MyFleet} />
            <Route exact path="/fleet-config" component={FleetConfig} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </DriverContextProvider>
    </div>
  );
}

export default App;
