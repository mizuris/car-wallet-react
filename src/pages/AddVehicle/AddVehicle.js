import React, { useState } from "react";
import VehicleAddForm from "../../components/NewVehicle/VehicleAddForm";

function AddVehicle() {
  const [vehicleList, setVehicleList] = useState([]);

  const addVehicle = (vehicle) => {
    const newVehicle = [vehicle, ...vehicleList];
    setVehicleList(newVehicle);
  };

  return (
    <div className="container d-flex align-items-center page-section">
      <VehicleAddForm onSubmit={addVehicle} />
    </div>
  );
}

export default AddVehicle;
