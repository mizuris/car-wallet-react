import "./FormStyles.scss";
import React, { useContext, useState, useRef, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

//Data storing imports
import { VehicleContext } from "../../contexts/VehicleContext";
import { storage } from "../../firebase/firebase";

//Form components
import FormImage from "./FormComponents/FormImage";
import FormFileInput from "react-bootstrap/esm/FormFileInput";
import FormProgressBar from "./FormComponents/FormProgressBar";

//FormInputs
import FormThumbnail from "./FormComponents/FormThumbnail";
import FormBrand from "./FormInputs/FormBrand";
import FormModel from "./FormInputs/FormModel";
import FormProdYear from "./FormInputs/FormProdYear";
import FormBodyType from "./FormInputs/FormBodyType";
import FormRegNum from "./FormInputs/FormRegNum";
import FormTankCap from "./FormInputs/FormTankCap";
import FormFuelCons from "./FormInputs/FormFuelCons";
import FormFuelType from "./FormInputs/FormFuelType";
import FormPhotoUpload from "./FormComponents/FormFileInput";

function VehicleForm() {
  //Get function to add new vehicle
  const { addNewVehicle } = useContext(VehicleContext);

  const INITIAL_STATE = {
    id: Math.floor(Math.random() * 100),
    brand: "",
    model: "",
    prodYear: "",
    bodyType: "Sedan",
    registrationNum: "",
    tankCapacity: "",
    fuelConsumption: "",
    fuelType: "Petrol",
    photo: null,
  };

  //Set initail state
  const [newVehicle, setNewVehicle] = useState(INITIAL_STATE);

  //Reusable function to save data from inputs
  const updateValue = (e) => {
    setNewVehicle({ ...newVehicle, [e.target.id]: e.target.value });
  };

  //Regular expression to validate if input is a number
  const validateNumber = /^[0-9.\b]+$/;

  //Check if user filled all inputs to enable submit
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (
      newVehicle.brand &&
      newVehicle.model &&
      newVehicle.prodYear.length === 4 &&
      newVehicle.prodYear <= 2021 &&
      newVehicle.prodYear >= 1886 &&
      newVehicle.registrationNum &&
      newVehicle.tankCapacity &&
      newVehicle.fuelConsumption &&
      newVehicle.photo
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [canSubmit, newVehicle]);

  //Photo related states
  const [url, setUrl] = useState("");
  const [photo, setPhoto] = useState(null);
  const [progress, setProgress] = useState(0);
  const fileRef = useRef();

  //Photo upload handler
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
          .then((url) => {
            setUrl(url);
            setNewVehicle({ ...newVehicle, photo: url });
          });
      }
    );
    progress === 100 &&
      setTimeout(() => {
        setProgress(null);
      }, 200);
  };

  //Submit handler
  const handleSubmit = (e) => {
    //Prevent reloading page
    e.preventDefault();

    //Send data to context
    addNewVehicle(newVehicle);

    //Reset input values
    setNewVehicle(INITIAL_STATE);
  };

  return (
    <div className="form-container d-flex justify-content-between ml-auto mr-auto">
      <Row>
        <Col md={12} lg={6}>
          <FormImage />
        </Col>
        <Col md={12} lg={6}>
          <div className="form-fields" name="top">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col md={12}>
                  <FormBrand
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                  />
                </Col>
                <Col md={12}>
                  <FormModel
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                  />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col md={6}>
                  <FormProdYear
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                    validateNumber={validateNumber}
                  />
                </Col>
                <Col md={6}>
                  <FormBodyType
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                  />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col md={12}>
                  <FormRegNum
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={4}>
                  <FormTankCap
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                    validateNumber={validateNumber}
                  />
                </Col>

                <Col md={4}>
                  <FormFuelCons
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                    validateNumber={validateNumber}
                  />
                </Col>
                <Col md={4}>
                  <FormFuelType
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                  />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col md={12}>
                  <FormPhotoUpload
      
                    progress={progress}
                    photo={photo}
                    url={url}
                    onChange={(e) => setPhoto(e.target.files[0])}
                    onClick={() => fileRef.current.click()}
                  />

                  <div className="form-buttons">
                    <Button
                      onClick={() => fileRef.current.click()}
                      variant={photo ? "outline-primary" : "primary"}
                    >
                      <span className="button-text">Pick photo</span>
                    </Button>
                    <Button
                      variant={photo ? "primary" : "outline-primary"}
                      onClick={handleUpload}
                    >
                      <span className="button-text">Upload photo</span>
                    </Button>
                  </div>
                  {/* <FormFileInput
                    ref={fileRef}
                    name="photo"
                    style={{ display: "none" }}
                    label="Add photo"
                    // progress={progress}
                    // photo={photo}
                    // src={photo}
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                  <div className="form-buttons">
                    <Button
                      onClick={() => fileRef.current.click()}
                      variant={photo ? "outline-primary" : "primary"}
                    >
                      <span className="button-text">Pick photo</span>
                    </Button>
                    <Button
                      variant={photo ? "primary" : "outline-primary"}
                      onClick={handleUpload}
                    >
                      <span className="button-text">Upload photo</span>
                    </Button>
                  </div>

                  <FormProgressBar progress={progress} />
                  <FormThumbnail photo={photo} progress={progress} url={url} /> */}
                </Col>
              </Form.Row>
              <Button
                className="form-submit-btn"
                variant="primary"
                type="submit"
                disabled={!canSubmit}
                handleUpload={handleUpload}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default VehicleForm;
