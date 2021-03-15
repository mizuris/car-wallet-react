import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Vehicle from "./Vehicle";

function VehicleList({ vehicles }) {
  // const [vehicles] = useState(props.vehicles);
  const history = useHistory();

  return vehicles.length ? (
    vehicles.map((vehicle) => {
      return <Vehicle key={vehicle.id} vehicle={vehicle} />;
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
