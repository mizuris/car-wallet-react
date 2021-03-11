import React from "react";
import { Form } from "react-bootstrap";

function FormPhotoUpload(props) {
  return (
    <>
      <Form.Label htmlFor={props.name}>{props.label}</Form.Label>
      <input type="file" name={props.name} onChange={props.onChange} />
    </>
  );
}

export default FormPhotoUpload;
