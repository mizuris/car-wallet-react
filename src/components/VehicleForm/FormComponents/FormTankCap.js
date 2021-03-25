import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormTankCap({ newVehicle, updateValue }) {
  return (
    <>
      <TextInput
        classFor="form"
        type="number"
        id="tankCapacity"
        label="Tank capacity"
        value={newVehicle.tankCapacity}
        placeholder="Enter tank capacity"
        isValid={
          newVehicle.tankCapacity.length && newVehicle.tankCapacity.length <= 3
        }
        errorText="Enter correct tank capacity"
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormTankCap;
