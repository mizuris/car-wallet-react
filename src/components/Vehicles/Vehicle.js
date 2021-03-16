import React, { useContext, useState } from "react";
import VehiclePhoto from "./VehiclePhoto";
import VehicleCardLeft from "./VehicleCardLeft";
import VehicleCardRight from "./VehicleCardRight";
import { VehicleContext } from "../../contexts/VehicleContext";

//Icon imports
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

function Vehicle({ vehicle }) {
  const { removeVehicle } = useContext(VehicleContext);
  const [display, setDisplay] = useState({ left: true, right: false });

  return (
    <div className="vehicle-card">
      <div className="edit">
        <RiIcons.RiEdit2Fill className="interaction-icon" />
      </div>
      <div className="remove" onClick={() => removeVehicle(vehicle.id)}>
        <MdIcons.MdRemoveCircle className="interaction-icon" />
      </div>
      <div
        className={`slide-details`}
        onClick={() =>
          setDisplay({ left: !display.left, right: !display.right })
        }
      >
        <IoIcons.IoMdArrowDroprightCircle className="interaction-icon" />
      </div>
      <VehiclePhoto
        photo={vehicle.photo}
        alt={`${vehicle.brand} ${vehicle.model}`}
      />
      <div className="vehicle-card-body">
        <VehicleCardLeft
          className={`card-left`}
          display={display.left ? "flex" : "none"}
          brand={vehicle.brand}
          model={vehicle.model}
          prodYear={vehicle.prodYear}
          registrationNum={vehicle.registrationNum}
          bodyType={vehicle.bodyType}
          fuelType={vehicle.fuelType}
        />

        <VehicleCardRight
          className={`card-right`}
          display={display.right ? "flex" : "none"}
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
