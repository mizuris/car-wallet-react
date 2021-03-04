import React, { createContext, useState } from "react";

export const DriverContext = createContext();

function DriverContextProvider() {
  const [drivers, setDrivers] = useState({
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
  });
  return (
    <div>
      <h1>Somthi</h1>
    </div>
  );
}

export default DriverContextProvider;
