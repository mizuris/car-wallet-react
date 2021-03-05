import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DriverContext } from "../../contexts/DriverContext";

function DriverForm() {
  //Get function to add new driver
  const { addDriver } = useContext(DriverContext);

  //Declare states to set in form
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [maxRange, setMaxRange] = useState();
  const [fuelConsumption, setFuelConsumption] = useState();

  const handleSubmit = (e) => {
    //Prevent reloading page
    e.preventDefault();

    //Send data to context
    addDriver(name, surname, brand, model, maxRange, fuelConsumption);

    //Clear inputs after submit
    setName("");
    setSurname("");
    setBrand("");
    setModel("");
    setMaxRange("");
    setFuelConsumption("");
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Second name</Form.Label>
        <Form.Control
          value={surname}
          type="text"
          placeholder="Enter surname"
          onChange={(e) => setSurname(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Car brand</Form.Label>
        <Form.Control
          value={brand}
          type="text"
          placeholder="Enter brand"
          onChange={(e) => setBrand(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Car model</Form.Label>
        <Form.Control
          value={model}
          type="text"
          placeholder="Enter model"
          onChange={(e) => setModel(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Car max range</Form.Label>
        <Form.Control
          value={maxRange}
          type="text"
          placeholder="Enter car range"
          onChange={(e) => setMaxRange(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Car fuel consumption</Form.Label>
        <Form.Control
          value={fuelConsumption}
          type="text"
          placeholder="Enter fuel consumption"
          onChange={(e) => setFuelConsumption(e.target.value)}
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DriverForm;
