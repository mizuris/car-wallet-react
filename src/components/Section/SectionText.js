import React from "react";
import { Button } from "react-bootstrap";

export default function SectionText(props) {
  return (
    <div className="section-text-container">
      {props.children}
      {props.btnText ? (
        <Button
          size={props.btnSize}
          variant={props.btnVariant}
          className="section-button"
          onClick={props.onClick}
        >
          {props.btnText}
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
