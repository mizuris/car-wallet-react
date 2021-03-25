import React from "react";
import TextInput from "../../Inputs/TextInput";

function FormFuelCons({ newVehicle, updateValue }) {
  return (
    <>
      <TextInput
        classFor="form"
        type="number"
        min={0.1}
        max={newVehicle.tankCapacity}
        step="0.1"
        id="fuelConsumption"
        label="Fuel consumption"
        value={newVehicle.fuelConsumption}
        placeholder="Enter avg. fuel consumption"
        isValid={
          newVehicle.fuelConsumption.length >= 1 &&
          newVehicle.fuelConsumption.length <= 4 &&
          newVehicle.fuelConsumption <= newVehicle.tankCapacity
        }
        errorText={
          newVehicle.fuelConsumption >= newVehicle.tankCapacity
            ? "Consumption exceeds capacity"
            : "Enter correct value. For example 6.8"
        }
        onChange={(e) => updateValue(e)}
      />
    </>
  );
}

export default FormFuelCons;
