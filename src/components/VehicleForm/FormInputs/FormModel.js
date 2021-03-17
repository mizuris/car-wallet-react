import React from "react";
import FormTextInput from "../FormComponents/FormTextInput";

function FormModel({ newVehicle, updateValue }) {
  return (
    <>
      <FormTextInput
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
