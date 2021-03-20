import React, { useState } from "react";
import * as GgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

function VehicleCardRight(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={props.className} style={{ display: props.display }}>
      <div className="card-right-heading">
        <h6>
          <strong>Fuel economy</strong>
        </h6>
      </div>
      <div className="card-right-text-holder">
        <div className="card-right-text">
          <GiIcons.GiJerrycan className="types-icon" /> <span className="types-text">Tank cap.:</span>{" "}
          <strong>{props.tankCapacity} liters</strong>
        </div>
        <div className="card-right-text">
          <RiIcons.RiGasStationLine className="types-icon" />{" "}
          <span className="types-text">Avg. fuel cons.:</span>{" "}
          <strong>{props.fuelConsumption} l/100km</strong>
        </div>
        <div className="card-right-text">
          <RiIcons.RiPinDistanceFill className="types-icon" />{" "}
          <span className="types-text">Avg. dist. per tank:</span>{" "}
          <strong>
            {(props.tankCapacity / props.fuelConsumption).toFixed(0) * 100} km
          </strong>
        </div>
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
