import React, { useState } from "react";
import { Form } from "react-bootstrap";

function TextInput(props) {
  const isValid = props.isValid;
  const [error, setError] = useState({
    text: "",
    style: "",
  });

  return (
    <div className={`${props.classFor}-input-container`}>
      <Form.Label className={`${props.classFor}-input-label`}>
        {props.label}
      </Form.Label>
      <div className={`${props.classFor}-input-inner`}>
        <Form.Control
          className={`${props.classFor}-input ${error.style}`}
          type={props.type ? props.type : "text"}
          min={props.min}
          max={props.max}
          id={props.id}
          step={props.step ? props.step : "any"}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          maxLength={props.type ? props.maxLength || "4" : "15"}
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

export default TextInput;
