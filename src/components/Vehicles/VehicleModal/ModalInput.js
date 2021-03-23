import React from "react";

function VehicleModalInput(props) {
  return (
    <>
      {props.label ? (
        <label className="modal-input-label" htmlFor={props.name}>
          {props.label}
        </label>
      ) : (
        ""
      )}
      <input
        type={props.type ? [props.type] : "text"}
        className="modal-input"
        maxLength={props.type ? "4" : "15"}
        value={props.value}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
      />
    </>
  );
}

export default VehicleModalInput;
