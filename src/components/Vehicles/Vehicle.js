import React from "react";
import { Col, Row } from "react-bootstrap";

//icons imports
import * as FaIcons from "react-icons/fa";
import * as GgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

function Vehicle(props) {
  return (
    <div className="vehicle-card">
      <div className="edit">
        <RiIcons.RiEdit2Fill />
      </div>
      <div className="remove">
        <MdIcons.MdRemoveCircle />
      </div>
      <div className="vehicle-card-img-container">
        <img src={props.photo} alt={`${props.brand} ${props.model}`} />
      </div>
      <div className="vehicle-card-body">
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

        <div className="vehicle-card-body-right">
          <h2>
            <strong>Details</strong>
          </h2>
          <div>
            <GgIcons.CgAssign /> Tank cap.: {props.tankCapacity} l
          </div>
          <div>
            <RiIcons.RiGasStationLine /> Avg. fuel cons.:{" "}
            {props.fuelConsumption} l/100km
          </div>
          <RiIcons.RiPinDistanceFill /> Avg. dist. per tank:{" "}
          {(props.tankCapacity / props.fuelConsumption).toFixed(0) * 100} km
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
