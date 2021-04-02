import React, { createContext, useState, useEffect } from "react";

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
      tankCapacity: 65,
      fuelConsumption: 11,
      fuelType: "Petrol",
      photo:
        photo ||
        "https://firebasestorage.googleapis.com/v0/b/carwallet-react.appspot.com/o/photos%2Fhonda-accord-type-s.jpeg?alt=media&token=fa7e52d0-8d59-4f45-b221-771f4a996424",
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
        tankCapacity: vehicle.tankCapacity,
        fuelConsumption: vehicle.fuelConsumption,
        fuelType: vehicle.fuelType,
        photo: vehicle.photo,
      },
    ]);
  };

  //Declare function to edit specific vehicle data
  const editVehicle = (vehicle) => {
    const index = vehicles.findIndex((query) => query.id === vehicle.id);
    const newVehicles = [...vehicles];
    newVehicles[index] = vehicle;
    setVehicles(newVehicles);
  };

  //Declare function to remove certain vehicle form array
  const removeVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
  };

  useEffect(() => {
    const localData = localStorage.getItem("vehicles-list");
    if (localData) {
      setVehicles(JSON.parse(localData));
    }
  }, [setVehicles])

  useEffect(() => {
    localStorage.setItem("vehicles-list", JSON.stringify(vehicles));
  })

  return (
    <VehicleContext.Provider
      value={{ vehicles, addNewVehicle, removeVehicle, editVehicle }}
    >
      {props.children}
    </VehicleContext.Provider>
  );
}

export default VehicleContextProvider;
