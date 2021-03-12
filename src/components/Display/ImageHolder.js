import React from "react";

export default function ImageHolder({ wrapCName, imgCName, src, alt }) {
  return (
    <div className={wrapCName}>
      <img className={imgCName} alt={alt} src={src} />
    </div>
  );
}
