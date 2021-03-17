import React from "react";
import FormTextInput from "../FormComponents/FormTextInput";

function FormTankCap({ newVehicle, updateValue, validateNumber }) {
  return (
    <>
      <FormTextInput
        id="tankCapacity"
        label="Tank capacity"
        value={newVehicle.tankCapacity}
        placeholder="Enter tank capacity"
        maxLength="4"
        isValid={newVehicle.tankCapacity.length}
        errorText="Enter correct tank capacity"
        onChange={(e) => {
          if (e.target.value === "" || validateNumber.test(e.target.value)) {
            updateValue(e);
          } else {
            alert("Input must be a number!");
          }
        }}
      />
    </>
  );
}

export default FormTankCap;
