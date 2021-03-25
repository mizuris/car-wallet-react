import React, { useContext, useState } from "react";
import VehiclePhoto from "./VehiclePhoto";
import VehicleCardLeft from "./VehicleCardLeft";
import VehicleCardRight from "./VehicleCardRight";
import VehicleModal from "../Modals/VehicleModal/VehicleModal";
import { VehicleContext } from "../../contexts/VehicleContext";

//Icon imports
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

function Vehicle({ vehicle }) {
  const { removeVehicle } = useContext(VehicleContext);
  const [display, setDisplay] = useState({ left: true, right: false });
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <VehicleModal
        vehicle={vehicle}
        show={showModal}
        hide={() => setShowModal(false)}
      />
      <div className="vehicle-card">
        <RiIcons.RiEdit2Fill
          className="edit interaction-icon"
          onClick={() => setShowModal(true)}
        />
        <MdIcons.MdRemoveCircle
          onClick={() => removeVehicle(vehicle.id)}
          className="remove interaction-icon"
        />
        <IoIcons.IoMdArrowDroprightCircle
          onClick={() =>
            setDisplay({ left: !display.left, right: !display.right })
          }
          className="slide-details interaction-icon"
        />

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
    </>
  );
}

export default Vehicle;
