import React from "react";
import FormTextInput from "../FormComponents/FormTextInput";

function FormFuelCons({ newVehicle, updateValue, validateNumber }) {
  return (
    <>
      <FormTextInput
        id="fuelConsumption"
        label="Fuel consumption"
        value={newVehicle.fuelConsumption}
        placeholder="Enter avg. fuel consumption"
        maxLength="4"
        isValid={newVehicle.fuelConsumption.length}
        errorText="Enter correct value. For example 6.8"
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

export default FormFuelCons;
