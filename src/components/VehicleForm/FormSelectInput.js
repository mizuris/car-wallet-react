import React from "react";
import { Form, Col } from "react-bootstrap";

function FormSelectInput(props) {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control value={props.value} as="select" onChange={props.onChange}>
        {props.types.map((type) => {
          return <option key={type}>{type}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
}

export default FormSelectInput;