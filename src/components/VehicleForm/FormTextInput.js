import React from "react";
import { Form } from "react-bootstrap";

function FormTextInput(props) {
  return (
    <div className="form-input-container">
      <Form.Label className="form-label">{props.label}</Form.Label>
      <Form.Control
        className="form-input"
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default FormTextInput;
