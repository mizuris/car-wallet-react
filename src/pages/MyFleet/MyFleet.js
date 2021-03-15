import React, { useContext } from "react";
import { VehicleContext } from "../../contexts/VehicleContext";
import VehicleList from "../../components/Vehicles/VehicleList";
import "./MyFleet.scss";

function MyFleet() {
  const { vehicles } = useContext(VehicleContext);
  console.log(vehicles)

  return (
    <>
      <div className="page-section container-fluid index">
        <VehicleList vehicles={vehicles} />
      </div>
    </>
  );
}

export default MyFleet;
