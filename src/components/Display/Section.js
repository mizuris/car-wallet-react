import React from "react";
import Button from "./Button";
import ImageHolder from "./ImageHolder";

export default function Section(props) {
  return (
    <div className={`container d-flex align-items-center ${props.bgColor}`}>
      <ImageHolder
        wrapCName={props.imgWrapClassName}
        imgCName={props.imgClassName}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
      <div className={props.textWrapClassName}>
        <h1 className={props.textHeaderClassName}>{props.headerText}</h1>
        <p className={props.textParClassName}>{props.parText}</p>
        <Button
          value={props.btnValue}
          cName={props.btnClassName}
          onClick={props.btnOnClick}
        />
      </div>
    </div>
  );
}
