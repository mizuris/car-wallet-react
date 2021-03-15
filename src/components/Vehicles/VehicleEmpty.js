import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function VehicleEmpty() {
  const history = useHistory();
  return (
    <div className="empty">
      <h2>No vehicles added</h2>
      <Button variant="danger" onClick={() => history.push("/fleet-config")}>
        Add vehicle
      </Button>
    </div>
  );
}

export default VehicleEmpty;
