import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormModel({ newVehicle, updateValue, validateInput, handleError }) {
  return (
    <>
      <TextInput
        classFor="form"
        id="model"
        label="Model"
        value={newVehicle.model}
        placeholder="Enter model"
        isValid={newVehicle.model.length >= 2}
        errorText="Enter correct model"
        onChange={(e) =>
          validateInput.test(e.target.value)
            ? handleError(null)
            : updateValue(e)
        }
      />
    </>
  );
}

export default FormModel;
