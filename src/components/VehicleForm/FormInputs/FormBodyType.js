import React from "react";
import SelectInput from "../FormComponents/SelectInput";

function FormBodyType({ newVehicle, updateValue }) {
  const bodyTypes = [
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
