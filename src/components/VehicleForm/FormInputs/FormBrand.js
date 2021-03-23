import React from "react";
import TextInput from "../FormComponents/TextInput";

function FormBrand({ newVehicle, updateValue }) {
  return (
    <>
      <TextInput
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
