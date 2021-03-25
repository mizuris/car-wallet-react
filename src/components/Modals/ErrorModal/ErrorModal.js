import React from "react";
import { Modal, Button } from "react-bootstrap";

function ErrorModal({ showErrorModal, hideErrorModal }) {
  return (
    <Modal keyboard={true} show={showErrorModal} size="sm">
      <Modal.Header>
        <Modal.Title id="form-modal-sm">Check your input</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <span className="form-modal-warning">No special signs allowed.</span>{" "}
        <br />{" "}
        <span className="form-modal-exceptions">
          Exceptions: '/', '-', ',', ':',  '.'.
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={hideErrorModal}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
