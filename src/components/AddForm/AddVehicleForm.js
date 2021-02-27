import React, { useState } from "react";

function AddVehicleForm(props) {
  const [vehicleDetails, setVehicleDetails] = useState({
    id: "",
    brand: "",
    model: "",
    driver: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      brand: vehicleDetails.brand,
      model: vehicleDetails.model,
      driver: vehicleDetails.driver,
    });

    setVehicleDetails({ id: "", brand: "", model: "", driver: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2 className="form-header">Add new car to your fleet</h2>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            required
            name="brand"
            placeholder="Enter brand name"
            id="brand"
            onChange={(e) =>
              setVehicleDetails({ ...vehicleDetails, brand: e.target.value })
            }
            value={vehicleDetails.brand}
          />
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            required
            name="model"
            placeholder="Enter model name"
            id="model"
            onChange={(e) =>
              setVehicleDetails({ ...vehicleDetails, model: e.target.value })
            }
            value={vehicleDetails.model}
          />
          <label htmlFor="driver">Driver:</label>
          <input
            type="text"
            required
            name="driver"
            placeholder="Enter driver's name"
            id="driver"
            onChange={(e) =>
              setVehicleDetails({ ...vehicleDetails, driver: e.target.value })
            }
            value={vehicleDetails.driver}
          />
        </div>
        <input type="submit" value="Add to fleet" />
      </div>
    </form>
  );
}

export default AddVehicleForm;
