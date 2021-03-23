import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { VehicleContext } from "../../contexts/VehicleContext";

function VehicleModal({ vehicle, show, hide }) {
  const { editVehicle } = useContext(VehicleContext);
  const [vehicleEditData, setVehicleEditData] = useState(vehicle);
  const vehicleBeforeEdit = Object.assign(vehicle);

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
        <input
          name="brand"
          className="modal-input"
          value={vehicleEditData.brand}
          onChange={(e) =>
            setVehicleEditData({
              ...vehicleEditData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          name="model"
          className="modal-input"
          value={vehicleEditData.model}
          onChange={(e) =>
            setVehicleEditData({
              ...vehicleEditData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          name="registrationNum"
          className="modal-input"
          value={vehicleEditData.registrationNum}
          onChange={(e) =>
            setVehicleEditData({
              ...vehicleEditData,
              [e.target.name]: e.target.value,
            })
          }
        />
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
