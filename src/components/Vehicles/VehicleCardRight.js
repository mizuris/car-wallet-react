import React, { useState } from "react";
import * as GgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

function VehicleCardRight(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="body-right">
      <div className="details">
        <h2>
          <strong>Details</strong>
        </h2>
        <p className="link">
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={`http://www.google.com/search?q=${props.brand}+${props.model}+${props.prodYear}`}
            target="blank"
          >
            For more click here{" "}
            <GgIcons.CgLink className={isHovered ? "hovered" : "link-icon"} />
          </a>
        </p>
      </div>
      <div>
        <GiIcons.GiJerrycan /> Tank cap.: {props.tankCapacity} l
      </div>
      <div>
        <RiIcons.RiGasStationLine /> Avg. fuel cons.: {props.fuelConsumption}{" "}
        l/100km
      </div>
      <RiIcons.RiPinDistanceFill /> Avg. dist. per tank:{" "}
      {(props.tankCapacity / props.fuelConsumption).toFixed(0) * 100} km
    </div>
  );
}

export default VehicleCardRight;
