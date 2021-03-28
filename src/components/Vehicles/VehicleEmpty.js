import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

function VehicleEmpty() {
  const history = useHistory();
  return (
    <div className="empty">
      <h2>
        No vehicles added <FaIcons.FaSadTear />
      </h2>
      <Button variant="danger" onClick={() => history.push("/add-vehicle")}>
        Add vehicle
      </Button>
    </div>
  );
}

export default VehicleEmpty;
