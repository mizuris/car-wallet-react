import React from "react";
import SelectInput from "../../Inputs/SelectInput";

function FormFuelType({ newVehicle, updateValue }) {
  return (
    <>
      <SelectInput
        classFor="form"
        id="fuelType"
        label="Select fuel type"
        value={newVehicle.fuelType}
        types={["Petrol", "Hybrid", "Diesel", "LPG"]}
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormFuelType;
