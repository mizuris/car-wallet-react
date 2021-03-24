import React, { useContext, useState } from "react";
import { VehicleContext } from "../../../contexts/VehicleContext";
import { Modal, Button, Row, Col } from "react-bootstrap";

import ModalInput from "./ModalInput";

// import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
// import * as RiIcons from "react-icons/ri";
import { Container } from "@material-ui/core";

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
        <Container>
          <Row>
            <div className="modal-text">
              <FaIcons.FaCar className="modal-icon" />
              Vehicle details
            </div>
          </Row>
          <Row>
            <Col xs={6}>
              <ModalInput
                label="Brand"
                value={vehicleEditData.brand}
                name="brand"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
            <Col xs={6}>
              <ModalInput
                label="Model"
                value={vehicleEditData.model}
                name="model"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <ModalInput
                label="Registration number"
                value={vehicleEditData.registrationNum}
                name="registrationNum"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
            <Col xs={4}>
              <ModalInput
                label="Body type"
                value={vehicleEditData.bodyType}
                name="bodyType"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
            <Col xs={4}>
              <ModalInput
                type="number"
                label="Production year"
                value={vehicleEditData.prodYear}
                name="prodYear"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
          </Row>
          <Row>
            <div className="modal-text">
              <FaIcons.FaGasPump className="modal-icon" />
              Fuel details
            </div>
          </Row>
          <Row>
            <Col xs={4}>
              <ModalInput
                label="Fuel type"
                value={vehicleEditData.fuelType}
                name="fuelType"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
            <Col xs={4}>
              <ModalInput
                label="Tank capacity"
                value={vehicleEditData.tankCapacity}
                name="tankCapacity"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
            <Col xs={4}>
              <ModalInput
                label="Avg. fuel consumption"
                value={vehicleEditData.fuelConsumption}
                name="fuelConsumption"
                onChange={(e) => changeVehicleData(e)}
              />
            </Col>
          </Row>
        </Container>
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
