import React, { useState } from "react";
import { Form } from "react-bootstrap";

function FormTextInput(props) {
  const isValid = props.isValid;
  const [error, setError] = useState({
    text: "",
    style: "",
  });

  return (
    <div className="form-input-container">
      <Form.Label className="form-label">{props.label}</Form.Label>
      <div className="form-input-inner">
        <Form.Control
          className={`form-input ${error.style}`}
          type="text"
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          maxLength={props.maxLength}
          onBlur={() =>
            isValid
              ? setError({ text: "", style: "is-valid" })
              : setError({
                  text: props.errorText,
                  style: "is-not-valid",
                })
          }
        />
        <span className="error-text">{error.text ? error.text : null}</span>
      </div>
    </div>
  );
}

export default FormTextInput;
