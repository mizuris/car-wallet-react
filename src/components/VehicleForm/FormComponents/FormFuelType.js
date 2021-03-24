import React from "react";
import SelectInput from "../../Inputs/SelectInput";

function FormFuelType({ newVehicle, updateValue }) {
  return (
    <>
      <SelectInput
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
