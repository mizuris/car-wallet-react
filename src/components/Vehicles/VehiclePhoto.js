import React from "react";
import { Image } from "react-bootstrap";

function VehiclePhoto(props) {
  return (
    <div className="vehicle-card-img-container">
      <Image src={props.photo} alt={props.alt} />
    </div>
  );
}

export default VehiclePhoto;
