import React from "react";
import { Form } from "react-bootstrap";

function FormSelectInput(props) {
  return (
    <div className="form-input-container">
      <Form.Label className="form-label">{props.label}</Form.Label>
      <Form.Control
        id={props.id}
        value={props.value}
        as="select"
        onChange={props.onChange}
      >
        {props.types.map((type) => {
          return <option key={type}>{type}</option>;
        })}
      </Form.Control>
    </div>
  );
}

export default FormSelectInput;
