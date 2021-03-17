import React from "react";
import FormSelectInput from "../FormComponents/FormSelectInput";

function FormFuelType({ newVehicle, updateValue }) {
  return (
    <>
      <FormSelectInput
        id="fuelType"
        label="Select fuel type"
        value={newVehicle.fuelType}
        types={["Petrol", "Diesel", "LPG"]}
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormFuelType;
