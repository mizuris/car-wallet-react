import "./FormStyles.scss";
import React, { useContext, useState, useRef } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";

//Data storing imports
import { VehicleContext } from "../../contexts/VehicleContext";
import { storage } from "../../firebase/firebase";

//Form components
import FormImage from "./FormImage";
import FormTextInput from "./FormTextInput";
import FormSelectInput from "./FormSelectInput";
import FormFileInput from "react-bootstrap/esm/FormFileInput";
import FormProgressBar from "./FormProgressBar";
import FormThumbnail from "./FormThumbnail";

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
  const handleSubmit = async (e) => {
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
          <Card className="bg-dark" name="top">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Col md={12}>
                    <FormTextInput
                      id="brand"
                      label="Brand"
                      value={newVehicle.brand}
                      placeholder="Enter brand"
                      onChange={(e) => {
                        updateValue(e);
                      }}
                    />
                  </Col>
                  <Col md={12}>
                    <FormTextInput
                      id="model"
                      label="Model"
                      value={newVehicle.model}
                      placeholder="Enter model"
                      onChange={(e) => updateValue(e)}
                    />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <FormTextInput
                      id="prodYear"
                      label="Year of production"
                      value={newVehicle.prodYear}
                      placeholder="Enter year of production"
                      onChange={(e) => updateValue(e)}
                    />
                  </Col>
                  <Col md={6}>
                    <FormSelectInput
                      id="bodyType"
                      label="Select body type"
                      value={newVehicle.bodyType}
                      types={[
                        "Sedan",
                        "Liftback",
                        "Hatchback",
                        "Combi",
                        "SUV",
                        "Van",
                        "Coupe",
                        "Cabriolet",
                        "Pickup",
                      ]}
                      onChange={(e) => updateValue(e)}
                    />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={12}>
                    <FormTextInput
                      id="registrationNum"
                      label="Registartion number"
                      value={newVehicle.registrationNum}
                      placeholder="Enter registration number"
                      onChange={(e) => updateValue(e)}
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col md={4}>
                    <FormTextInput
                      id="tankCapacity"
                      label="Tank capacity"
                      value={newVehicle.tankCapacity}
                      placeholder="Enter tank capacity"
                      onChange={(e) => updateValue(e)}
                    />
                  </Col>

                  <Col md={4}>
                    <FormTextInput
                      id="fuelConsumption"
                      label="Fuel consumption"
                      value={newVehicle.fuelConsumption}
                      placeholder="Enter avg. fuel consumption"
                      onChange={(e) => updateValue(e)}
                    />
                  </Col>
                  <Col md={4}>
                    <FormSelectInput
                      id="fuelType"
                      label="Select fuel type"
                      value={newVehicle.fuelType}
                      types={["Petrol", "Diesel", "LPG"]}
                      onChange={(e) => updateValue(e)}
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
                      progress={progress}
                      photo={photo}
                      src={photo}
                      onChange={(e) => setPhoto(e.target.files[0])}
                    />
                    <div className="form-buttons">
                      <Button
                        onClick={() => fileRef.current.click()}
                        variant={progress ? "outline-primary" : "primary"}
                      >
                        <span className="button-text">Pick photo</span>
                      </Button>
                      <Button
                        variant={progress ? "primary" : "outline-primary"}
                        onClick={handleUpload}
                      >
                        <span className="button-text">Upload photo</span>
                      </Button>
                    </div>

                    <FormProgressBar progress={progress} />
                    <FormThumbnail
                      photo={photo}
                      progress={progress}
                      url={url}
                    />
                  </Col>
                </Form.Row>

                <Button
                  className="form-submit-btn"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default VehicleForm;
