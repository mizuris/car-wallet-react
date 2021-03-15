import React from "react";
import Vehicle from "./Vehicle";
import VehicleEmpty from "./VehicleEmpty";

function VehicleList({ vehicles }) {
  return vehicles.length ? (
    vehicles.map((vehicle) => {
      return <Vehicle key={vehicle.id} vehicle={vehicle} />;
    })
  ) : (
    <VehicleEmpty />
  );
}

export default VehicleList;
