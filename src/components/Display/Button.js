import React from "react";

export default function Button({ value, onClick, cName }) {
  return (
    <button className={`btn ${cName}`} onClick={() => onClick()}>
      {value}
    </button>
  );
}
