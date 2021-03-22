import React, { createContext, useState } from "react";

export const VehicleContext = createContext();

function VehicleContextProvider(props) {
  //Set vehicles array holding drivers objects
  const [photo] = useState(null);
  const [vehicles, setVehicles] = useState([
    {
      id: Math.floor(Math.random() * 100),
      brand: "Honda",
      model: "Accord",
      prodYear: 2012,
      bodyType: "Sedan",
      registrationNum: "XYZ 98791",
      tankCapacity: 60,
      fuelConsumption: 8,
      fuelType: "Petrol",
      photo:
        photo ||
        "https://firebasestorage.googleapis.com/v0/b/carwallet-react.appspot.com/o/photos%2Fhonda.jpg?alt=media&token=dcca1cde-ed10-4004-9ddf-0085e1a9b815",
    },
  ]);

  //Declare function allowing to add vehicles
  const addNewVehicle = (vehicle) => {
    setVehicles([
      ...vehicles,
      {
        id: Math.floor(Math.random() * 100),
        brand: vehicle.brand,
        model: vehicle.model,
        prodYear: parseInt(vehicle.prodYear),
        bodyType: vehicle.bodyType,
        registrationNum: vehicle.registrationNum,
        tankCapacity: parseInt(vehicle.tankCapacity),
        fuelConsumption: parseInt(vehicle.fuelConsumption),
        fuelType: vehicle.fuelType,
        photo: vehicle.photo,
      },
    ]);
  };

  const editVehicle = (vehicle) => {
    const index = vehicles.indexOf(vehicle);
  };

  //Declare function to remove certain vehicle form array
  const removeVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  return (
    <VehicleContext.Provider
      value={{ vehicles, addNewVehicle, removeVehicle, editVehicle }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
}

export default VehicleContextProvider;
