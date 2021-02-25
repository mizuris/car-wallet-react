import React from "react";
import Button from "./Button";
import ImageHolder from "./ImageHolder";
import heading_img from "../assets/images/heading_img.svg";
import "./Heading.scss";

export default function Heading() {
  return (
    <div className="container d-flex align-items-center page-section">
      <ImageHolder
        wrapCName="heading-img-container"
        imgCName="heading-img"
        src={heading_img}
        alt="Heading image"
      />
      <div className="heading-text-container text-center">
        <h1 className="heading-text-header">Take control</h1>
        <p className="heading-text">
          With
          <span className="brand-name">
            Car<b>Wallet</b>
          </span>
          you can manage your fleet and drivers <b>everywhere</b> and{" "}
          <b>everytime</b>. Take few steps discover limitless access!
        </p>
      <Button value="Try now!" cName="btn-start" />
      </div>
    </div>
  );
}
