import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { VehicleContext } from "../../contexts/VehicleContext";

function VehicleModal({ vehicle, updateVehicle, show, hide }) {
  const { editVehicle } = useContext(VehicleContext);

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
          <input
            name="brand"
            value={vehicle.brand}
            onChange={(e) =>
              updateVehicle({ ...vehicle, [e.target.name]: e.target.value })
            }
          />
          <input
            name="model"
            value={vehicle.model}
            onChange={(e) =>
              updateVehicle({ ...vehicle, [e.target.name]: e.target.value })
            }
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            editVehicle(vehicle);
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
