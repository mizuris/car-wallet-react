import React from "react";
import TextInput from "../FormComponents/TextInput";

function FormProdYear({ newVehicle, updateValue, validateNumber }) {
  return (
    <>
      <TextInput
        id="prodYear"
        label="Year of production"
        value={newVehicle.prodYear}
        placeholder="Enter year of production"
        errorText="Year cannot be lower than 1868 and greater than 2021"
        maxLength="4"
        isValid={
          newVehicle.prodYear.length === 4 &&
          newVehicle.prodYear <= 2021 &&
          newVehicle.prodYear >= 1868
        }
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

export default FormProdYear;
