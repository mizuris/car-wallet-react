import React from "react";

function ModalInput(props) {
  return (
    <>
      <input
        className="modal-input"
        name={props.name}
        id={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default ModalInput;
