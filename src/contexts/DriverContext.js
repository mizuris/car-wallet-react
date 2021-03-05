import React, { createContext, useState } from "react";

export const DriverContext = createContext();

function DriverContextProvider(props) {
  //Set drivers array holding drivers objects
  const [drivers, setDrivers] = useState([
    {
      id: 0,
      name: "John",
      surname: "Doe",
      isWorking: false,
      vehicle: {
        brand: "Ford",
        model: "Focus",
        maxRange: 700,
        fuelConsumption: 8.5,
      },
    },
  ]);

  //Declare function allowing to add drivers to context 'drivers' array
  const addDriver = (
    name,
    surname,
    brand,
    model,
    maxRange,
    fuelConsumption
  ) => {
    setDrivers([
      ...drivers,
      {
        id: Math.floor(Math.random() * 100),
        name,
        surname,
        isWorking: false,
        vehicle: { brand, model, maxRange, fuelConsumption },
      },
    ]);
  };

  //Declare function to remove certain drivers form array
  const removeDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };

  return (
    <DriverContext.Provider value={{ drivers, addDriver, removeDriver }}>
      {props.children}
    </DriverContext.Provider>
  );
}

export default DriverContextProvider;
