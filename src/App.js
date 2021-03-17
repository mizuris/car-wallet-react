import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//Styles
import "./App.scss";

//Pages
import Home from "./pages/Home/Home";
import MyFleet from "./pages/MyFleet/MyFleet";
import FleetConfig from "./pages/FleetConfig/FleetConfig";
import Profile from "./pages/Profile/Profile";

//Context providers
import VehicleContextProvider from "./contexts/VehicleContext";
import SlideToTop from "./components/Display/SlideToTop";

function App() {
  return (
    <div className="App" name="top">
      <VehicleContextProvider>
        <Router>
          <Navbar />
          <SlideToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fleet-my" component={MyFleet} />
            <Route exact path="/fleet-config" component={FleetConfig} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </VehicleContextProvider>
    </div>
  );
}

export default App;
