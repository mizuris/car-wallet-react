import React, { useState } from "react";
import Button from "../components/Button";

export default function MyFleet() {
  const fleet = [];
  const [vehicle, setVehicle] = useState(fleet);
  const addNewVehicle = () => {
    fleet.push(setVehicle("iveco"));
  };

  return (
    <div className="container d-flex align-items-center page-section">
      My fleet: {vehicle}
      <input
        type="text"
        onSubmit={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button
        value="Add new car"
        cName="btn-danger"
        onClick={() => addNewVehicle()}
      />
    </div>
  );
}
