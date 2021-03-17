import React from "react";
import FormSelectInput from "../FormComponents/FormSelectInput";

function FormBodyType({ newVehicle, updateValue }) {
  return (
    <>
      <FormSelectInput
        id="bodyType"
        label="Select body type"
        value={newVehicle.bodyType}
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
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormBodyType;
