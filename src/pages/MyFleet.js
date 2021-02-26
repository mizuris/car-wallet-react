import React, { useState } from "react";
import AddCarForm from "../components/AddCarForm";

export default function MyFleet() {
  return (
    <div className="container d-flex align-items-center page-section">
      <AddCarForm></AddCarForm>
    </div>
  );
}
