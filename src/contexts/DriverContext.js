import React, { createContext, useState } from "react";

export const DriverContext = createContext();

function DriverContextProvider(props) {
  const [drivers, setDrivers] = useState([
    {
      id: "",
      name: "",
      surname: "",
      isWorking: false,
      vehicle: {
        brand: "",
        model: "",
        maxRange: "",
        fuelConsumpiton: "",
        lastTank: Date.now(),
      },
    },
  ]);

  const addDriver = (
    name,
    surname,
    brand,
    model,
    maxRange,
    fuelConsumpiton
  ) => {
    setDrivers([
      ...drivers,
      {
        id: Math.floor(Math.random() * 100),
        name,
        surname,
        vehicle: { brand, model, maxRange, fuelConsumpiton },
      },
    ]);
  };

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
