import React from "react";
import { Form } from "react-bootstrap";

function ModalSelect(props) {
  return (
    <div className={`${props.classFor}-input-container`}>
      {props.label ? (
        <Form.Label className={`${props.classFor}-input-label`}>
          {props.label}
        </Form.Label>
      ) : (
        ""
      )}

      <Form.Control
        className={`${props.classFor}-input`}
        name={props.name}
        id={props.name}
        value={props.value}
        as="select"
        onChange={props.onChange}
      >
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Form.Control>
    </div>
  );
}

export default ModalSelect;
