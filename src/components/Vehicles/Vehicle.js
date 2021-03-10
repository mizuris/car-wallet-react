import React from "react";
import { Col, Row } from "react-bootstrap";

function Vehicle(props) {
  return (
    <div className="vehicle-card">
      <h5>{props.brand}</h5>
      <h5>{props.model}</h5>
      <h5>{props.prodYear}</h5>
      <h5>{props.fuelType}</h5>
      <h5>{props.bodyType}</h5>
      <h5>{props.fuelConsumption}</h5>
    </div>
  );
}

export default Vehicle;
