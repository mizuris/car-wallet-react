import React, { createContext, useState } from "react";

export const VehicleContext = createContext();

function VehicleContextProvider(props) {
  //Set vehicles array holding drivers objects
  const [vehicles, setVehicles] = useState([
    {
      id: 0,
      brand: "Honda",
      model: "Accord",
      prodYead: 2012,
      bodyType: "Sedan",
      registrationNum: "XYZ 98791",
      tankCapacity: 60,
      fuelConsumption: 8,
      fuelType: "Gasoline",
    },
  ]);

  //Declare function allowing to add vehicles
  const addVehicle = (brand, model, prodYear, bodyType, registrationNum, tankCapacity, fuelConsumption, fuelType) => {
    setVehicles([
      ...vehicles,
      {
        id: Math.floor(Math.random() * 100),
        brand,
        model,
        prodYear,
        bodyType,
        registrationNum,
        tankCapacity,
        fuelConsumption,
        fuelType,
      },
    ]);
  };

  //Declare function to remove certain vehicle form array
  const removeVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle, removeVehicle }}>
      {props.children}
    </VehicleContext.Provider>
  );
}

export default VehicleContextProvider;
