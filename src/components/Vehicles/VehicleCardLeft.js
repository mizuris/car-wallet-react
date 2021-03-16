import React from "react";
import * as FaIcons from "react-icons/fa";

function VehicleCardLeft(props) {
  const display = props.display;
  
  return (
    <div className={props.className} style={{ display: display }}>
      <div className="card-left-heading">
        <h6>
          <strong>{props.brand}</strong> {props.model}
        </h6>
      </div>
      <span className="reg-num">{props.registrationNum}</span>

      <div className="types">
        <div className="types-holder">
          <FaIcons.FaRegCalendarAlt className="types-icon" /> {props.prodYear}
        </div>
        <div className="types-holder">
          <FaIcons.FaCar className="types-icon" /> {props.bodyType}
        </div>
        <div className="types-holder">
          <FaIcons.FaGasPump className={`types-icon ${props.fuelType}`} />{" "}
          {props.fuelType}
        </div>
      </div>
    </div>
  );
}

export default VehicleCardLeft;
