import React from "react";
import Button from "./Button";
import ImageHolder from "./ImageHolder";
// import "./Section.scss";

export default function Section(props) {
  return (
    <div className={`container d-flex align-items-center page-section ${props.bgColor}`}>
      <ImageHolder
        wrapCName={props.imgWrapClassName}
        imgCName={props.imgClassName}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
      <div className={props.textWrapClassNane}>
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
