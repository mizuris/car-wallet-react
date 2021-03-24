import React from "react";

function ModalSelect(props) {
  const options = props.options;
  return (
    <div className="modal-input-container">
      {props.label ? (
        <label className="modal-input-label" htmlFor={props.name}>
          {props.label}
        </label>
      ) : (
        ""
      )}
      <select onChange={props.onChange} className="modal-input">
        <option className="modal-input-select-initial" value={props.value}>
          {props.value}
        </option>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ModalSelect;
