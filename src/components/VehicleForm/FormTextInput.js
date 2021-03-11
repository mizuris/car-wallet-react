import React from "react";
import { Form, Col } from "react-bootstrap";

function FormTextInput(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Form.Group>
  );
}

export default FormTextInput;