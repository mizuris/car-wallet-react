import React, { useState } from "react";
import Button from "./Button";
import { TextField } from "@material-ui/core";
import AddCarInputField from "./AddCarInputField";

export default function AddCarForm() {
  const [vehicle, setVehicle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setVehicle((e.target.name = e.target.value));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <AddCarInputField />
      <input
        name={vehicle}
        type="text"
        placeholder="Car brand"
        onChange={handleInputChange}
        ></input>
      <Button cName="btn-success" value="Add" />
      <p>{vehicle ? vehicle : "No cars added yet"}</p>
    </form>
        </>
  );
}
