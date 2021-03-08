import React, { createContext, useState } from "react";

export const VehicleContext = createContext();

function VehicleContextProvider(props) {
  //Set vehicles array holding drivers objects
  const [photo, setPhoto] = useState(null);
  const [vehicles, setVehicles] = useState([
    {
      id: 0,
      brand: "Honda",
      model: "Accord",
      prodYear: 2012,
      bodyType: "Sedan",
      registrationNum: "XYZ 98791",
      tankCapacity: 60,
      fuelConsumption: 8,
      fuelType: "Petrol",
      photo: photo,
    },
  ]);

  //Declare function allowing to add vehicles
  const addVehicle = (
    brand,
    model,
    prodYear,
    bodyType,
    registrationNum,
    tankCapacity,
    fuelConsumption,
    fuelType,
    photo
  ) => {
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
        photo,
      },
    ]);
  };

  //Declare function to remove certain vehicle form array
  const removeVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  const getPhoto = (url) => {
    setPhoto(url);
  };

  return (
    <VehicleContext.Provider
      value={{ vehicles, addVehicle, removeVehicle, getPhoto }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
}

export default VehicleContextProvider;
