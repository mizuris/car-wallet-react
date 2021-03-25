import React from "react";
import { Form } from "react-bootstrap";

function SelectInput(props) {
  return (
    <div className={`${props.classFor}-input-container`}>
      <Form.Label className={`${props.classFor}-input-label`}>
        {props.label}
      </Form.Label>
      <Form.Control
        className={`${props.classFor}-input`}
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

export default SelectInput;
