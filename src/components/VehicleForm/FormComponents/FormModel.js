import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormModel({ newVehicle, updateValue }) {
  return (
    <>
      <TextInput
        id="model"
        label="Model"
        value={newVehicle.model}
        placeholder="Enter model"
        isValid={newVehicle.model.length}
        errorText="Enter correct model"
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormModel;
