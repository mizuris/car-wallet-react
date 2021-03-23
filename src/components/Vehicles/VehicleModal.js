import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { VehicleContext } from "../../contexts/VehicleContext";

function VehicleModal({ vehicle, show, hide }) {
  const { editVehicle } = useContext(VehicleContext);
  const [vehicleEditData, setVehicleEditData] = useState(vehicle);

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
            value={vehicleEditData.brand}
            onChange={(e) =>
              setVehicleEditData({
                ...vehicleEditData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setVehicleEditData();
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
