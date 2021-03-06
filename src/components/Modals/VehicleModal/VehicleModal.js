import React, { useContext, useState } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

// data providers
import { VehicleContext } from "../../../contexts/VehicleContext";
import { bodyTypes } from "../../VehicleForm/FormComponents/FormBodyType";
import { validateInput } from "../../VehicleForm/Form";

//components
import TextInput from "../../Inputs/TextInput";
import ModalSelect from "./ModalSelect";
import ErrorModal from "../ErrorModal/ErrorModal";

function VehicleModal({ vehicle, show, hide }) {
  const { editVehicle } = useContext(VehicleContext);
  const [vehicleEditData, setVehicleEditData] = useState(vehicle);

  // error modal state
  const [showErrorModal, setShowErrorModal] = useState(false);
  const handleError = (input) => {
    if (!input) {
      setShowErrorModal(true);
    }
  };

  // clone vehicle object to reset changes on cancel
  const vehicleBeforeEdit = Object.assign(vehicle);

  // select inputs types
  const bodyOptions = bodyTypes;
  const fuelOptions = ["Petrol", "Hybrid", "Diesel", "LPG"];

  const changeVehicleData = (e) => {
    setVehicleEditData({ ...vehicleEditData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ErrorModal
        showErrorModal={showErrorModal}
        hideErrorModal={() => setShowErrorModal(false)}
      />
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
                <TextInput
                  classFor="modal"
                  label="Brand"
                  value={vehicleEditData.brand}
                  name="brand"
                  onChange={(e) =>
                    validateInput.test(e.target.value)
                      ? handleError(null)
                      : changeVehicleData(e)
                  }
                />
              </Col>
              <Col xs={6}>
                <TextInput
                  classFor="modal"
                  label="Model"
                  value={vehicleEditData.model}
                  name="model"
                  onChange={(e) =>
                    validateInput.test(e.target.value)
                      ? handleError(null)
                      : changeVehicleData(e)
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={4}>
                <ModalSelect
                  classFor="modal"
                  label="Body type"
                  value={vehicleEditData.bodyType}
                  name="bodyType"
                  options={bodyOptions}
                  onChange={(e) => changeVehicleData(e)}
                />
              </Col>
              <Col xs={6} lg={4}>
                <TextInput
                  classFor="modal"
                  label="Reg. number"
                  value={vehicleEditData.registrationNum}
                  name="registrationNum"
                  onChange={(e) =>
                    validateInput.test(e.target.value)
                      ? handleError(null)
                      : changeVehicleData(e)
                  }
                />
              </Col>
              <Col xs={6} lg={4}>
                <TextInput
                  classFor="modal"
                  type="number"
                  label="Production year"
                  value={vehicleEditData.prodYear}
                  name="prodYear"
                  onChange={(e) => changeVehicleData(e)}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <div className="modal-text">
                <FaIcons.FaGasPump className="modal-icon" />
                Fuel details
              </div>
            </Row>
            <Row>
              <Col xs={12} lg={4}>
                <ModalSelect
                  classFor="modal"
                  label="Fuel type"
                  value={vehicleEditData.fuelType}
                  name="fuelType"
                  options={fuelOptions}
                  onChange={(e) => changeVehicleData(e)}
                />
              </Col>
              <Col xs={6} lg={4}>
                <TextInput
                  classFor="modal"
                  type="number"
                  label="Tank capacity"
                  value={vehicleEditData.tankCapacity}
                  name="tankCapacity"
                  onChange={(e) => changeVehicleData(e)}
                />
              </Col>
              <Col xs={6} lg={4}>
                <TextInput
                  classFor="modal"
                  type="number"
                  step=".1"
                  label="Avg. fuel cons."
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
    </>
  );
}

export default VehicleModal;
