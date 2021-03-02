import React, { useState } from "react";
import AddVehicleForm from "../AddForm/AddVehicleForm";

function VehicleList() {
  const [vehicleList, setVehicleList] = useState([]);

  const addVehicle = (vehicle) => {
    const newVehicle = [vehicle, ...vehicleList];
    setVehicleList(newVehicle);
    console.log(newVehicle);
  };
  return (
    <>
      {vehicleList.length !== 0 ? (
        vehicleList.map((vehicle) => {
          return (
            <li key={vehicle.id}>
              <span>{vehicle.brand}</span>
              <span>{vehicle.model}</span>
              <span>{vehicle.driver}</span>
            </li>
          );
        })
      ) : (
        <AddVehicleForm onSubmit={addVehicle} />
      )}
    </>
  );
}

export default VehicleList;
