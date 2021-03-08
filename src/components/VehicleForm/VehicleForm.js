import React, { useContext, useState } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { VehicleContext } from "../../contexts/VehicleContext";
import car from "../../assets/images/car.svg";
import PhotoUpload from "./PhotoUpload";

function VehicleForm() {
  //Get function to add new vehicle
  const { addVehicle } = useContext(VehicleContext);

  //Declare states to set in form
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [prodYear, setProdYear] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [registrationNum, setRegistrationNum] = useState("");
  const [tankCapacity, setTankCapacity] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [photo, setPhoto] = useState(null);

  //Submit handler
  const handleSubmit = (e) => {
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
      photo,
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
    setPhoto(null);
  };

  return (
    <div className="form-container d-flex justify-content-between ml-auto mr-auto">
      <Row>
        <Col md={6}>
          <div className="form-image-container">
            <h2>Add vehicle</h2>
            <img className="form-image" src={car} alt="#" />
          </div>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      value={brand}
                      type="text"
                      placeholder="Enter car brand"
                      onChange={(e) => {
                        setBrand(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      value={model}
                      type="text"
                      placeholder="Enter car model"
                      onChange={(e) => {
                        setModel(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formColor">
                    <Form.Label>Year of production</Form.Label>
                    <Form.Control
                      value={prodYear}
                      type="text"
                      placeholder="Eg. 2010"
                      onChange={(e) => {
                        setProdYear(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Body type</Form.Label>
                    <Form.Control
                      value={bodyType}
                      as="select"
                      onChange={(e) => {
                        setBodyType(e.target.value);
                      }}
                    >
                      <option>Hatchback</option>
                      <option>Sedan</option>
                      <option>Liftback</option>
                      <option>Combi</option>
                      <option>SUV</option>
                      <option>Coupe</option>
                      <option>Cabriolet</option>
                      <option>Pickup</option>
                      <option>van</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Registraion numbers</Form.Label>
                  <Form.Control
                    value={registrationNum}
                    type="text"
                    placeholder="Enter number"
                    onChange={(e) => {
                      setRegistrationNum(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formTankCap">
                    <Form.Label>Tank capacity</Form.Label>
                    <Form.Control
                      value={tankCapacity}
                      type="text"
                      placeholder="Eg. 80 liters"
                      onChange={(e) => {
                        setTankCapacity(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formFuelConsumption">
                    <Form.Label>Fuel consumption</Form.Label>
                    <Form.Control
                      value={fuelConsumption}
                      type="text"
                      placeholder="Eg. 8 liters/100km"
                      onChange={(e) => {
                        setFuelConsumption(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formFuelType">
                    <Form.Label>Fuel type</Form.Label>
                    <Form.Control
                      value={fuelType}
                      as="select"
                      onChange={(e) => {
                        setFuelType(e.target.value);
                      }}
                    >
                      <option defaultValue="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="LPG">LPG</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <PhotoUpload />

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
