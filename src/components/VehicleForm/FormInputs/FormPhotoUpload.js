import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import FormProgressBar from "../FormComponents/FormProgressBar";
import FormThumbnail from "../FormComponents/FormThumbnail";

// (e) => setPhoto(e.target.files[0])

// () => fileRef.current.click()
function FormPhotoUpload(props) {
  const fileRef = useRef();
  return (
    <>
      <input
        type="file"
        name="photo"
        className="file-input"
        ref={fileRef}
        onChange={props.onChange}
      />

      <div className="form-buttons">
        <Button
          onClick={() => fileRef.current.click()}
          variant={props.photo ? "outline-primary" : "primary"}
        >
          <span className="button-text">Pick photo</span>
        </Button>
        <Button
          variant={props.photo ? "primary" : "outline-primary"}
          onClick={props.handleUpload}
        >
          <span className="button-text">Upload photo</span>
        </Button>
      </div>

      <FormProgressBar progress={props.progress} />

      <FormThumbnail
        photo={props.photo}
        progress={props.progress}
        url={props.url}
      />
    </>
  );
}

export default FormPhotoUpload;
