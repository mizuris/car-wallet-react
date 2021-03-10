import React, { useContext } from "react";
import { VehicleContext } from "../../contexts/VehicleContext";
import VehicleList from "../../components/Vehicles/VehicleList";
import "./MyFleet.scss";

function MyFleet() {
  const { vehicles } = useContext(VehicleContext);

  return (
    <VehicleList vehicles={vehicles} />
    );
  }

export default MyFleet;
