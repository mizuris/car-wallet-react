import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { VehicleContext } from "../../contexts/VehicleContext";
import ModalInput from "./ModalInput";

function VehicleModal({ vehicle, show, hide }) {
  const { editVehicle } = useContext(VehicleContext);
  const editData = { brand: "noje", model: "brande" };
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
          <ModalInput name="brand" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            editVehicle(vehicle.id, editData);
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VehicleModal;
