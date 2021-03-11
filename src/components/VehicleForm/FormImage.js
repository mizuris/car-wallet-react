import React from "react";
import { Col } from "react-bootstrap";
import car from "../../assets/images/car.svg";

function FormImage(props) {
  return (
    <Col md={props.col}>
      <div className="form-image-container">
        <h2>Add vehicle</h2>
        <img className="form-image" src={car} alt="#" />
      </div>
    </Col>
  );
}

export default FormImage;
