import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Vehicle from "./Vehicle";

function VehicleList(props) {
  const [vehicles] = useState(props.vehicles);
  const history = useHistory();

  return vehicles.length ? (
    vehicles.map((vehicle) => {
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
    })
  ) : (
    <div className="empty">
      <h2>No vehicless added</h2>
      <Button variant="danger" onClick={() => history.push("/fleet-config")}>
        Add vehicle
      </Button>
    </div>
  );
}

export default VehicleList;
