import React from "react";

function VehicleList() {
  const vehicles = [];

  return (
    <>
      {vehicles.map((vehicle, id) => (
        <ul>
          <li key={id}>
            {vehicle.brand} / {vehicle.model} / {vehicle.driver}
          </li>
        </ul>
      ))}
    </>
  );
}

export default VehicleList;
