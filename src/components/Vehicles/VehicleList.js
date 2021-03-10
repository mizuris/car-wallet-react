import React, { useState } from "react";
import Vehicle from "./Vehicle";

function VehicleList(props) {
  const [vehicles, setVehicles] = useState(props.vehicles);

  return vehicles.map((vehicle) => {
    return (
      <div key={vehicle.id}>
        <Vehicle
          brand={vehicle.brand}
          model={vehicle.model}
          registrationNum={vehicle.registrationNum}
          prodYear={vehicle.prodYear}
          bodyType={vehicle.bodyType}
          fuelType={vehicle.fuelType}
          fuelConsumption={vehicle.fuelConsumption}
          tankCapacity={vehicle.tankCapacity}
          photo={vehicle.photo}
        />
      </div>
    );
  });
}

export default VehicleList;
