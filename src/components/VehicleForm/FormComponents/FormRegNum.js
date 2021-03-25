import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormRegNum({ newVehicle, updateValue, validateInput, handleError }) {
  return (
    <>
      <TextInput
        classFor="form"
        id="registrationNum"
        label="Registartion number"
        value={newVehicle.registrationNum}
        placeholder="Enter registration number"
        isValid={newVehicle.registrationNum.length >= 2}
        errorText="Enter correct registatrion number"
        onChange={(e) =>
          validateInput.test(e.target.value)
            ? handleError(null)
            : updateValue(e)
        }
      />
    </>
  );
}

export default FormRegNum;
