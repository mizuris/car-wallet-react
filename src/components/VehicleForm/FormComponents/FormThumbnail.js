import React from "react";
import { Image } from "react-bootstrap";

function FormThumbnail({ photo, progress, url }) {
  return (
    photo &&
    progress === 100 && (
      <Image
        thumbnail
        style={{ maxWidth: "200px" }}
        src={url}
        alt="thumbnail"
      />
    )
  );
}

export default FormThumbnail;
