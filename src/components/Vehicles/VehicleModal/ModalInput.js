import React from "react";

function ModalInput(props) {
  return (
    <div className="modal-input-container">
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
        step={props.type === "number" ? props.step : "any"}
        maxLength={props.type ? "4" : "15"}
        value={props.value}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

export default ModalInput;
