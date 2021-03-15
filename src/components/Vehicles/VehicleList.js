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
          <Vehicle vehicle={vehicle} />
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
