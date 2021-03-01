import React from "react";

function VehicleInput(props) {
  return (
    <>
      <label className="form-label" htmlFor={props.name}>
        {props.name}
      </label>
      <input
        className="form-input"
        type="text"
        required
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default VehicleInput;
