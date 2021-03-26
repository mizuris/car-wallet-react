import React from "react";

export default function ImageHolder(props) {
  return (
    <div className={props.imgContainerClassName}>
      <img className={props.imgClassName} alt={props.alt} src={props.src} />
    </div>
  );
}
