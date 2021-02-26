import React, { useState } from "react";
import "./AddCarForm.scss";

export default function AddCarForm() {
  const [vehicle, setVehicle] = useState("");

  return (
    <form>
      <input type="text" placeholder="Car brand"></input>
      <input type="text" placeholder="Car model"></input>
      <input type="text" placeholder="Car driver"></input>
    </form>
  );
}
