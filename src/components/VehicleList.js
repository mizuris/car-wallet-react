import React, { useState } from "react";
import AddVehicleForm from "./AddVehicleForm";

function VehicleList() {
  const [vehicleList, setVehicleList] = useState([]);

  const addVehicle = (vehicle) => {
    const newVehicle = [vehicle, ...vehicleList];
    setVehicleList(newVehicle);
  };

  return (
    <div>
      <AddVehicleForm onSubmit={addVehicle} />
    </div>
  );
}

export default VehicleList;
