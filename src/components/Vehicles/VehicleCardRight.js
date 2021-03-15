import React, { useState } from "react";
import * as GgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

function VehicleCardRight(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-right">
      <div className="card-right-heading">
        <h4>
          <strong>Details</strong>
        </h4>
      </div>
      <div className="card-right-text">
        <GiIcons.GiJerrycan /> Tank cap.:{" "}
        <strong>{props.tankCapacity} liters</strong>
      </div>
      <div className="card-right-text">
        <RiIcons.RiGasStationLine /> Avg. fuel cons.:{" "}
        <strong>{props.fuelConsumption} l/100km</strong>
      </div>
      <div className="card-right-text">
        <RiIcons.RiPinDistanceFill /> Avg. dist. per tank:{" "}
        <strong>
          {(props.tankCapacity / props.fuelConsumption).toFixed(0) * 100} km
        </strong>
      </div>
      <div>
        <a
          className="link"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href={`http://www.google.com/search?q=${props.brand}+${props.model}+${props.prodYear}`}
          target="blank"
        >
          For more click here{" "}
          <GgIcons.CgLink className={isHovered ? "hovered" : "link-icon"} />
        </a>
      </div>
    </div>
  );
}

export default VehicleCardRight;
