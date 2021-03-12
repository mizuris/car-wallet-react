import React from "react";
import * as FaIcons from "react-icons/fa";

function VehicleCardLeft(props) {
  return (
    <div className="vehicle-card-body-left">
      <h2>
        <strong>{props.brand}</strong> {props.model}
      </h2>
      <h5>{props.registrationNum}</h5>
      <div>Year of production: {props.prodYear}</div>
      <div>
        <FaIcons.FaCar /> {props.bodyType}
      </div>
      <div>
        <FaIcons.FaGasPump /> {props.fuelType}
      </div>
    </div>
  );
}

export default VehicleCardLeft;
