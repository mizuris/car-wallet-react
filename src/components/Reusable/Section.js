import React from "react";
import { Button, Image } from "react-bootstrap";

export default function Section(props) {
  return (
    <section className="section-container">
      <div className="section-img-container">
        <Image src={props.src} className="section-img" />
      </div>
      <div className="section-text-container">
        <h1>{props.headerText}</h1>
        <p>{props.paragraphText}</p>
        <Button
          size="sm"
          variant="warning"
          className="section-button"
          onClick={props.onClick}
        >
          {props.btnText}
        </Button>
      </div>
    </section>
  );
}
