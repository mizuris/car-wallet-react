import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormBrand({ newVehicle, updateValue, validateInput, handleError }) {
  return (
    <TextInput
      classFor="form"
      id="brand"
      label="Brand"
      value={newVehicle.brand}
      placeholder="Enter brand"
      isValid={newVehicle.brand.length >= 2}
      errorText="Enter correct brand"
      onChange={(e) =>
        validateInput.test(e.target.value) ? handleError(null) : updateValue(e)
      }
    />
  );
}

export default FormBrand;
