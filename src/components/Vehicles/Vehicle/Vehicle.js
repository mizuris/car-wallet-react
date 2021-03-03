import React from "react";
import "./Vehicle.scss";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  loadVehicle,
  removeVehicle,
} from "../../../redux/Wallet/VehiclesActions";

function Vehicle({ vehicle, loadVehicle, removeVehicle }) {
  return (
    <div className="vehicle-container">
      <div className="vehicle-heading">
        <p className="vehicle-title">
          {vehicle.id}: {vehicle.brand} {vehicle.model}
        </p>
      </div>
      <div className="vehicle-details">
        <p className="vehicle-details-text">Brand: {vehicle.brand}</p>
        <p className="vehicle-details-text">Model: {vehicle.model}</p>
        <p className="vehicle-details-text">Driver: {vehicle.driver}</p>
      </div>
      <div>
        <Link to={`/fleet-my/${vehicle.id}`}>
          <button onClick={() => loadVehicle(vehicle)}>LOAD VEHICLE</button>
        </Link>
        <button onClick={() => removeVehicle(vehicle.id)}>
          Remove vehicle
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadVehicle: (vehicle) => dispatch(loadVehicle(vehicle)),
    removeVehicle: (id) => dispatch(removeVehicle(id)),
  };
};

export default connect(null, mapDispatchToProps)(Vehicle);
