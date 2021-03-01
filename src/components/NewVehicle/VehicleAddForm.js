import React, { useState } from "react";
import VehicleInput from "./VehicleInput";
import { Link } from "react-router-dom";

function VehicleAddForm(props) {
  const [vehicleInputResult, setVehicleInputResult] = useState({
    id: "",
    brand: "",
    model: "",
    driver: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      brand: vehicleInputResult.brand,
      model: vehicleInputResult.model,
      driver: vehicleInputResult.driver,
    });

    setVehicleInputResult({ id: "", brand: "", model: "", driver: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <VehicleInput
        name="brand"
        onSubmit={submitHandler}
        placeholder="Enter brand name"
        onChange={(e) =>
          setVehicleInputResult({
            ...vehicleInputResult,
            brand: e.target.value,
          })
        }
        value={vehicleInputResult.brand}
      />
      <VehicleInput
        name="brand"
        onSubmit={submitHandler}
        placeholder="Enter model name"
        onChange={(e) =>
          setVehicleInputResult({
            ...vehicleInputResult,
            model: e.target.value,
          })
        }
        value={vehicleInputResult.model}
      />
      <VehicleInput
        name="brand"
        onSubmit={submitHandler}
        placeholder="Enter driver's name"
        onChange={(e) =>
          setVehicleInputResult({
            ...vehicleInputResult,
            driver: e.target.value,
          })
        }
        value={vehicleInputResult.driver}
      />
      <Link to="/my-fleet">
        <input type="submit" name="submit" />
      </Link>
    </form>
  );
}

export default VehicleAddForm;
