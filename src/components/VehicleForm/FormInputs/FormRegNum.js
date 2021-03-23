import React from "react";
import TextInput from "../FormComponents/TextInput";

function FormRegNum({ newVehicle, updateValue }) {
  return (
    <>
      <TextInput
        id="registrationNum"
        label="Registartion number"
        value={newVehicle.registrationNum}
        placeholder="Enter registration number"
        isValid={newVehicle.registrationNum.length >= 2}
        errorText="Enter correct registatrion number"
        maxLength="15"
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormRegNum;
