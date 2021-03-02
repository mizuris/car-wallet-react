import React, { useState } from "react";
import VehicleInput from "./VehicleInput";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addVehicle } from "../../redux/Wallet/VehiclesActions";

function VehicleAddForm({ addVehicle }) {
  const [vehicleInputResult, setVehicleInputResult] = useState({
    id: "",
    brand: "",
    model: "",
    driver: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setVehicleInputResult({
      id: Math.floor(Math.random() * 10000),
      brand: vehicleInputResult.brand,
      model: vehicleInputResult.model,
      driver: vehicleInputResult.driver,
    });
    addVehicle(vehicleInputResult);
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   brand: vehicleInputResult.brand,
    //   model: vehicleInputResult.model,
    //   driver: vehicleInputResult.driver,
    // });
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

const mapStateToProps = (state) => {
  return {
    vehicle: state.wallet.vehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addVehicle: (vehicle) => dispatch(addVehicle(vehicle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleAddForm);
