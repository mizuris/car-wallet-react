import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import AddVehicle from "./pages/AddVehicle";
import MyVehicles from "./pages/MyVehicles";

//Context providers
import VehicleContextProvider from "./contexts/VehicleContext";
import SlideToTop from "./components/SlideToTop";

function App() {
  return (
    <div className="App" name="top">
      <VehicleContextProvider>
        <Router>
          <Navbar />
          <SlideToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-vehicles" component={MyVehicles} />
            <Route exact path="/add-vehicle" component={AddVehicle} />
          </Switch>
        </Router>
      </VehicleContextProvider>
    </div>
  );
}

export default App;
