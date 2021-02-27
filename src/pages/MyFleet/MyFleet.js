import React from "react";
import VehicleList from "../../components/AddForm/VehicleList";

export default function MyFleet() {
  const showList = false;
  return (
    <div className="container d-flex align-items-center page-section">
      {showList ? <VehicleList /> : <h3>No cars added yet.</h3>}
    </div>
  );
}
