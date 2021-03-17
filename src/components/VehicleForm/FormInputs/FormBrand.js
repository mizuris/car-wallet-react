import React from "react";
import FormTextInput from "../FormComponents/FormTextInput";

function FormBrand({ newVehicle, updateValue }) {
  return (
    <>
      <FormTextInput
        id="brand"
        label="Brand"
        value={newVehicle.brand}
        placeholder="Enter brand"
        isValid={newVehicle.brand.length >= 2}
        errorText="Enter correct brand"
        onChange={(e) => {
          updateValue(e);
        }}
      />
    </>
  );
}

export default FormBrand;
