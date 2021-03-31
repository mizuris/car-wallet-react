import React, { useContext } from "react";
import { VehicleContext } from "../contexts/VehicleContext";

//Components
import Vehicle from "../components/Vehicles/Vehicle";
import VehicleEmpty from "../components/Vehicles/VehicleEmpty";

function MyVehicles() {
  const { vehicles } = useContext(VehicleContext);

  return (
    <>
      {vehicles.length ? (
        vehicles.map((vehicle) => {
          return <Vehicle key={vehicle.id} vehicle={vehicle} />;
        })
      ) : (
        <VehicleEmpty />
      )}
      <div className="bg-img-headlights"></div>
    </>
  );
}

export default MyVehicles;
