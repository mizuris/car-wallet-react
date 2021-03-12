import "./FormStyles.scss";
import React, { useContext, useState, useRef } from "react";
import {
  Form,
  Button,
  Card,
  Col,
  Row,
  ProgressBar,
  Image,
} from "react-bootstrap";

//Data storing imports
import { VehicleContext } from "../../contexts/VehicleContext";
import { storage } from "../../firebase/firebase";

//Form components
import FormImage from "./FormImage";
import FormTextInput from "./FormTextInput";
import FormSelectInput from "./FormSelectInput";
import FormFileInput from "react-bootstrap/esm/FormFileInput";

function VehicleForm() {
  //Get function to add new vehicle
  const { addVehicle } = useContext(VehicleContext);

  //Declare states to set in form
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [prodYear, setProdYear] = useState("");
  const [bodyType, setBodyType] = useState("Sedan");
  const [registrationNum, setRegistrationNum] = useState("");
  const [tankCapacity, setTankCapacity] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [fuelType, setFuelType] = useState("Petrol");

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
            setPhoto(url);
          });
      }
    );
    progress === 100 &&
      setTimeout(() => {
        setProgress(0);
      }, 200);
  };

  //Submit handler
  const handleSubmit = async (e) => {
    //Prevent reloading page
    e.preventDefault();

    //Send data to context
    addVehicle(
      brand,
      model,
      prodYear,
      bodyType,
      registrationNum,
      tankCapacity,
      fuelConsumption,
      fuelType,
      photo
    );

    //Clear inputs after submit
    setBrand("");
    setProdYear("");
    setBodyType("");
    setRegistrationNum("");
    setTankCapacity("");
    setModel("");
    setFuelType("");
    setFuelConsumption("");
    setPhoto("");
    setUrl(null);
    setProgress(0);
  };

  return (
    <div className="form-container d-flex justify-content-between ml-auto mr-auto">
      <Row>
        <FormImage col={6} />
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <FormTextInput
                    id="brand"
                    label="Brand"
                    value={brand}
                    placeholder="Enter brand"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  <FormTextInput
                    id="model"
                    label="Model"
                    value={model}
                    placeholder="Enter model"
                    onChange={(e) => setModel(e.target.value)}
                  />
                </Form.Row>

                <Form.Row>
                  <FormTextInput
                    id="year"
                    label="Year of production"
                    value={prodYear}
                    placeholder="Enter year of production"
                    onChange={(e) => setProdYear(e.target.value)}
                  />
                  <FormSelectInput
                    id="bodyType"
                    label="Select body type"
                    value={bodyType}
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
                    onChange={(e) => setBodyType(e.target.value)}
                  />
                </Form.Row>

                <FormTextInput
                  id="registrationNumber"
                  label="Registartion number"
                  value={registrationNum}
                  placeholder="Enter registration number"
                  onChange={(e) => setRegistrationNum(e.target.value)}
                />

                <Form.Row>
                  <FormTextInput
                    id="tankCap"
                    label="Tank capacity"
                    value={tankCapacity}
                    placeholder="Enter tank capacity"
                    onChange={(e) => setTankCapacity(e.target.value)}
                  />

                  <FormTextInput
                    id="fuelConsumption"
                    label="Fuel consumption"
                    value={fuelConsumption}
                    placeholder="Enter avg. fuel consumption"
                    onChange={(e) => setFuelConsumption(e.target.value)}
                  />

                  <FormSelectInput
                    id="fuelType"
                    label="Select fuel type"
                    value={fuelType}
                    types={["Petrol", "Diesel", "LPG"]}
                    onChange={(e) => setFuelType(e.target.value)}
                  />
                </Form.Row>

                <Form.Group as={Col}>
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
                  <Button onClick={() => fileRef.current.click()} disabled={photo}>Pick photo</Button>
                  <Button disabled={progress} onClick={handleUpload}>
                    Upload photo
                  </Button>

                  {/* show progress bar when loading */}
                  {progress !== 0 && progress !== 100 && (
                    <ProgressBar
                      animated
                      now={progress}
                      label={`${progress}%`}
                    />
                  )}

                  {/* show thumbnail when loaded */}
                  {photo && progress === 100 && (
                    <Image
                      thumbnail
                      style={{ maxWidth: "200px" }}
                      src={url}
                      alt="thumbnail"
                    />
                  )}

                </Form.Group>

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
