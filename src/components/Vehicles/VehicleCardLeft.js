import React from "react";
import * as FaIcons from "react-icons/fa";

function VehicleCardLeft(props) {
  return (
    <div className="body-left">
      <h2>
        <strong>{props.brand}</strong> {props.model}
      </h2>
      <h5 className="reg-num">{props.registrationNum}</h5>
      <div className="types">
        <div className="icon-holder">
          <FaIcons.FaRegCalendarAlt /> {props.prodYear}
        </div>
        <div className="icon-holder">
          <FaIcons.FaCar /> {props.bodyType}
        </div>
        <div className="icon-holder">
          <FaIcons.FaGasPump className={props.fuelType} /> {props.fuelType}
        </div>
      </div>
    </div>
  );
}

export default VehicleCardLeft;
