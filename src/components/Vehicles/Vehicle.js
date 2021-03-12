import React from "react";
import VehiclePhoto from "./VehiclePhoto";
import VehicleCardLeft from "./VehicleCardLeft";
import VehicleCardRight from "./VehicleCardRight";

//Icon imports
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
      <VehiclePhoto photo={props.photo} alt={`${props.brand} ${props.model}`} />
      <div className="vehicle-card-body">
        <VehicleCardLeft
          brand={props.brand}
          model={props.model}
          prodYear={props.prodYear}
          registrationNum={props.registrationNum}
          bodyType={props.bodyType}
          fuelType={props.fuelType}
        />

        <VehicleCardRight
          brand={props.brand}
          model={props.model}
          prodYear={props.prodYear}
          tankCapacity={props.tankCapacity}
          fuelConsumption={props.fuelConsumption}
        />
      </div>
    </div>
  );
}

export default Vehicle;
