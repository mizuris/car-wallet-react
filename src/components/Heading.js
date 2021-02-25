import React from "react";
import Button from "./Button";
import ImageHolder from "./ImageHolder";
import "./Heading.scss";

export default function Heading() {
  const logThis = () => console.log("hi");

  return (
    <div className="container d-flex">
      <ImageHolder
        wrapCName="heading-img-container"
        imgCName="heading-img"
        src="someimg.pl"
        alt="Some img"
      />
      <div className="heading-text-container">
        <h1 className="heading-text-header">Header</h1>
        <p className="heading-text">Paragraph</p>
      </div>
      <Button value="Try now!" onClick={logThis} cName="btn-success" />
    </div>
  );
}
