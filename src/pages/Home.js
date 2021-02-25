import React from "react";
import "../variables.scss";
import "./Home.scss";
import Heading from "../components/Heading";

export default function Home() {
  const heading = "save time and money";

  return (
    <div className="container-fluid">
      <Heading />
      <div className="container section">
        <div className="heading-container">
          <h1 className="heading">{heading.toUpperCase()}</h1>
          <p className="heading-text">
            Car<b>Wallet</b> helps you organize your fleet, control drivers and
            their work time. You are able to manage your personel from any place
            in the world!
          </p>
        </div>
        <div className="login-container">
          <p>Forgot your password?</p>
          <p>Don't have an account? Register now</p>
        </div>
      </div>
    </div>
  );
}
