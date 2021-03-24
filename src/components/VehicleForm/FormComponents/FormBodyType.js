import React from "react";
import SelectInput from "../../Inputs/SelectInput";

export const bodyTypes = [
  "Sedan",
  "Liftback",
  "Hatchback",
  "Combi",
  "SUV",
  "Van",
  "Coupe",
  "Cabriolet",
  "Pickup",
];

function FormBodyType({ newVehicle, updateValue }) {
  return (
    <>
      <SelectInput
        id="bodyType"
        label="Select body type"
        value={newVehicle.bodyType}
        types={bodyTypes}
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormBodyType;
