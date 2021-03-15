import React from "react";
import { ProgressBar } from "react-bootstrap";

function FormProgressBar({ progress }) {
  return (
    progress !== 0 &&
    progress !== 100 && (
      <ProgressBar animated now={progress} label={`${progress}%`} />
    )
  );
}

export default FormProgressBar;
