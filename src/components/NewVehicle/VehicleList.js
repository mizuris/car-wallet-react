import React, { useState } from "react";
import VehicleAddForm from "./VehicleAddForm";

function VehicleList() {
  const [vehicleList, setVehicleList] = useState([]);

  const addVehicle = (vehicle) => {
    const newVehicle = [vehicle, ...vehicleList];
    setVehicleList(newVehicle);
    console.log(newVehicle);
    console.log(vehicleList);
  };
  return (
    <>
      {vehicleList.map((vehicle) => {
        return (
          <div className="container d-flex align-items-center page-section">
            <li key={vehicle.id}>
              <p>{vehicle.brand}</p>
              <p>{vehicle.model}</p>
              <p>{vehicle.driver}</p>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default VehicleList;
