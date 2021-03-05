import React, { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

export default function FleetConfig() {
  const { addDriver } = useContext(DriverContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [maxRange, setMaxRange] = useState(0);
  const [fuelConsumpiton, setFuelConsumption] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addDriver(name, surname, brand, model, maxRange, fuelConsumpiton);

    setName("");
    setSurname("");
    setBrand("");
    setModel("");
    setMaxRange(0);
    setFuelConsumption("");
  };
  return (
    <div className="container d-flex align-items-center page-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">First name</label>
        <input
          type="text"
          name="name"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="surname">Last name</label>
        <input
          type="text"
          name="surname"
          placeholder="Last name"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <label htmlFor="fuelConsumption">Fuel consumption</label>
        <input
          type="text"
          name="fuelConsumption"
          placeholder="Average fuel consumption"
          value={fuelConsumpiton}
          onChange={(e) => setFuelConsumption(e.target.value)}
        />
        <label htmlFor="maxRange">Max range</label>
        <input
          type="range"
          name="maxRange"
          min="0"
          max="2000"
          value={maxRange}
          onChange={(e) => setMaxRange(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
