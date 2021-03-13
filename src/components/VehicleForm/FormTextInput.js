import React from "react";
import { Form } from "react-bootstrap";

function FormTextInput(props) {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default FormTextInput;