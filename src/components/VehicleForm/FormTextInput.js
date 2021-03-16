import React from "react";
import { Form } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";

function FormTextInput(props) {
  return (
    <div className="form-input-container">
      <Form.Label className="form-label">{props.label}</Form.Label>
      <div className="form-input-inner">
        <Form.Control
          className="form-input"
          type="text"
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          maxLength={props.maxLength}
        />
        <AiIcons.AiFillCheckCircle
          className="form-input-tick"
          style={{ display: props.isValid ? "block" : "none" }}
        />
      </div>
    </div>
  );
}

export default FormTextInput;
