import React from "react";
import "../variables.scss";
import "./Home.scss";
import Heading from "../components/Heading";

export default function Home() {
  const heading = "save time and money";

  return (
    <div className="container-fluid">
      <Heading />
    </div>
  );
}
