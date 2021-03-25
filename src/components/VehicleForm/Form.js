import React, { useContext, useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

//Data storing imports
import { VehicleContext } from "../../contexts/VehicleContext";
import { storage } from "../../firebase/firebase";

//Form components
import FormFileInput from "react-bootstrap/esm/FormFileInput";
import FormImage from "./FormComponents/FormImage";
import FormProgressBar from "./FormComponents/FormProgressBar";
import ErrorModal from "../Modals/ErrorModal/ErrorModal";

//FormInputs
import FormThumbnail from "./FormComponents/FormThumbnail";
import FormBrand from "./FormComponents/FormBrand";
import FormModel from "./FormComponents/FormModel";
import FormProdYear from "./FormComponents/FormProdYear";
import FormBodyType from "./FormComponents/FormBodyType";
import FormRegNum from "./FormComponents/FormRegNum";
import FormTankCap from "./FormComponents/FormTankCap";
import FormFuelCons from "./FormComponents/FormFuelCons";
import FormFuelType from "./FormComponents/FormFuelType";

//Regular expression to validate if input is a number
export const validateInput = /[!@#$%^&*()_+=[\]{};"\\|<>?~]/;

function VehicleForm() {
  //Get function to add new vehicle
  const { addNewVehicle } = useContext(VehicleContext);
  const history = useHistory();

  //Set initail state
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
  const [newVehicle, setNewVehicle] = useState(INITIAL_STATE);

  //Reusable function to save data from inputs
  const updateValue = (e) => {
    setNewVehicle({ ...newVehicle, [e.target.id]: e.target.value });
  };

  //Modal state if wrong input occurs
  const [showErrorModal, setShowErrorModal] = useState(false);
  const handleError = (input) => {
    if (!input) {
      setShowErrorModal(true);
    }
  };

  //Check if user filled all inputs to enable submit
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (
      newVehicle.brand &&
      newVehicle.model &&
      newVehicle.prodYear <= 2021 &&
      newVehicle.prodYear >= 1886 &&
      newVehicle.registrationNum &&
      newVehicle.tankCapacity &&
      newVehicle.tankCapacity.length <= 3 &&
      newVehicle.fuelConsumption <= newVehicle.tankCapacity &&
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
      }, 1000);
  };

  //Submit handler
  const handleSubmit = async (e) => {
    //Prevent reloading page
    e.preventDefault();

    //Send data to context
    await addNewVehicle(newVehicle);

    //Reset input values
    setNewVehicle(INITIAL_STATE);
    setUrl("");
    history.push("/my-vehicles");
  };

  return (
    <div className="form-container">
      <ErrorModal
        showErrorModal={showErrorModal}
        hideErrorModal={() => setShowErrorModal(false)}
      />
      <Row>
        <Col lg={6} md={12}>
          <FormImage />
        </Col>
        <Col lg={6} md={12}>
          <div className="form-fields" name="form">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col md={12}>
                  <FormBrand
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                    validateInput={validateInput}
                    handleError={handleError}
                  />
                </Col>
                <Col md={12}>
                  <FormModel
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                    validateInput={validateInput}
                    handleError={handleError}
                  />
                </Col>
              </Form.Row>

              <Form.Row>
                <Col md={6}>
                  <FormProdYear
                    newVehicle={newVehicle}
                    updateValue={updateValue}
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
                    validateInput={validateInput}
                    handleError={handleError}
                  />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={4}>
                  <FormTankCap
                    newVehicle={newVehicle}
                    updateValue={updateValue}
                  />
                </Col>

                <Col md={4}>
                  <FormFuelCons
                    newVehicle={newVehicle}
                    updateValue={updateValue}
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
                  <FormFileInput
                    ref={fileRef}
                    name="photo"
                    style={{ display: "none" }}
                    label="Add photo"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                  <div className="form-buttons">
                    <Button
                      className="pick-button"
                      style={{ display: photo ? "none" : "block" }}
                      onClick={() => fileRef.current.click()}
                      variant="primary"
                    >
                      <span className="button-text">Pick photo</span>
                    </Button>
                    <Button
                      className="upload-button"
                      style={{ display: photo ? "block" : "none" }}
                      variant="outline-primary"
                      onClick={handleUpload}
                    >
                      <span className="button-text">Upload photo</span>
                    </Button>
                  </div>
                  {photo && !url ? (
                    <div className="upload-notification">
                      <FaIcons.FaArrowAltCircleUp /> Now upload photo
                    </div>
                  ) : (
                    ""
                  )}

                  <FormProgressBar progress={progress} />
                  <FormThumbnail photo={photo} progress={progress} url={url} />
                </Col>
              </Form.Row>
              <Button
                className="form-submit-btn"
                variant="primary"
                type="submit"
                disabled={!canSubmit}
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
