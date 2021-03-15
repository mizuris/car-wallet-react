import React from "react";
import VehiclePhoto from "./VehiclePhoto";
import VehicleCardLeft from "./VehicleCardLeft";
import VehicleCardRight from "./VehicleCardRight";

//Icon imports
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

function Vehicle({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="edit">
        <RiIcons.RiEdit2Fill />
      </div>
      <div className="remove">
        <MdIcons.MdRemoveCircle />
      </div>
      <VehiclePhoto photo={vehicle.photo} alt={`${vehicle.brand} ${vehicle.model}`} />
      <div className="vehicle-card-body">
        <VehicleCardLeft
          brand={vehicle.brand}
          model={vehicle.model}
          prodYear={vehicle.prodYear}
          registrationNum={vehicle.registrationNum}
          bodyType={vehicle.bodyType}
          fuelType={vehicle.fuelType}
        />

        <VehicleCardRight
          brand={vehicle.brand}
          model={vehicle.model}
          prodYear={vehicle.prodYear}
          tankCapacity={vehicle.tankCapacity}
          fuelConsumption={vehicle.fuelConsumption}
        />
      </div>
    </div>
  );
}

export default Vehicle;
