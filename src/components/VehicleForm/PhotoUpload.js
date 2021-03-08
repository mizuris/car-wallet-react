import React, { useContext, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { VehicleContext } from "../../contexts/VehicleContext";
import { storage } from "../../firebase/firebase";

function PhotoUpload(props) {
  const [photo, setPhoto] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const { getPhoto } = useContext(VehicleContext);

  const handleUpload = () => {
    const uploadTask = storage.ref(`photos/${photo.name}`).put(photo);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("photos")
          .child(photo.name)
          .getDownloadURL()
          .then((url) => setUrl(url));
      }
    );

    getPhoto(url);
  };

  return (
    <>
      <Form.Group as={Col}>
        <Form.Label htmlFor="photo">Add photo</Form.Label>
        <input
          type="file"
          name="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <progress value={progress} max="100" />
        <Button onClick={handleUpload}>Upload photo</Button>
        {photo && progress === 100 && (
          <img style={{ maxWidth: "200px" }} src={url} alt="#" />
        )}
      </Form.Group>
    </>
  );
}

export default PhotoUpload;
