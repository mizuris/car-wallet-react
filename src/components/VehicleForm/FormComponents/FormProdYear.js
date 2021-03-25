import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormProdYear({ newVehicle, updateValue }) {
  return (
    <>
      <TextInput
        classFor="form"
        type="number"
        min={1868}
        max={2021}
        id="prodYear"
        label="Year of production"
        value={newVehicle.prodYear}
        placeholder="Enter year of production"
        errorText="Year cannot be lower than 1868 and greater than 2021"
        isValid={
          newVehicle.prodYear.length === 4 &&
          newVehicle.prodYear <= 2021 &&
          newVehicle.prodYear >= 1868
        }
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormProdYear;
