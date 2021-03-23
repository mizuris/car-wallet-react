import React, { useContext, useState } from "react";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { Modal, Button } from "react-bootstrap";

import ModalInput from "./ModalInput";
import SelectInput from "../../VehicleForm/FormComponents/SelectInput";

import { bodyTypes } from "../../VehicleForm/FormInputs/FormBodyType";

import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

function VehicleModal({ vehicle, show, hide }) {
  const { editVehicle } = useContext(VehicleContext);
  const [vehicleEditData, setVehicleEditData] = useState(vehicle);
  const vehicleBeforeEdit = Object.assign(vehicle);

  const changeVehicleData = (e) => {
    setVehicleEditData({ ...vehicleEditData, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          className="d-flex align-items-center"
          id="contained-modal-title-vcenter"
        >
          Edit your vehicle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-details">
          <div className="modal-details-inner">
            <ModalInput
              label="Brand"
              value={vehicleEditData.brand}
              name="brand"
              onChange={(e) => changeVehicleData(e)}
            />
            <ModalInput
              label="Model"
              value={vehicleEditData.model}
              name="model"
              onChange={(e) => changeVehicleData(e)}
            />
          </div>
          <div className="modal-details-inner">
            <ModalInput
              label="Reg. num."
              value={vehicleEditData.registrationNum}
              name="registrationNum"
              onChange={(e) => changeVehicleData(e)}
            />
          </div>
          <div className="modal-details-inner">
            <ModalInput
              label={<FaIcons.FaRegCalendarAlt className="types-icon" />}
              type="number"
              value={vehicleEditData.prodYear}
              name="prodYear"
              onChange={(e) => changeVehicleData(e)}
            />
            <ModalInput
              label={<FaIcons.FaCar className="types-icon" />}
              type="select"
              name="bodyType"
              value={vehicleEditData.bodyType}
              onChange={(e) => changeVehicleData(e)}
            />
          </div>
        </div>
        <div className="modal-details">
          <div className="modal-details-inner">
            <ModalInput
              label={<GiIcons.GiJerrycan className="types-icon" />}
              type="number"
              name="tankCapacity"
              value={vehicleEditData.tankCapacity}
              onChange={(e) => changeVehicleData(e)}
            />
            <ModalInput
              label={<RiIcons.RiGasStationLine className="types-icon" />}
              name="fuelConsumption"
              value={vehicleEditData.fuelConsumption}
              onChange={(e) => changeVehicleData(e)}
            />
            <ModalInput
              label={<FaIcons.FaGasPump className="types-icon" />}
              name="fuelType"
              value={vehicleEditData.fuelType}
              onChange={(e) => changeVehicleData(e)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setVehicleEditData(vehicleBeforeEdit);
            hide();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            editVehicle(vehicleEditData);
            hide();
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VehicleModal;
