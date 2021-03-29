import React from "react";
import { Button } from "react-bootstrap";

export default function Section(props) {
  return (
    <div className={`container-fluid bg-${props.background}`}>
      <section className="section-container">
        <div
          style={{ order: props.imgOrder }}
          className="section-img-container"
        >
          {props.children}
        </div>
        <div
          style={{ order: props.textOrder }}
          className="section-text-container"
        >
          <h1>{props.headerText}</h1>
          <p>{props.paragraphText}</p>
          {props.btnText ? (
            <Button
              size="sm"
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
      </section>
    </div>
  );
}
