import React from "react";
import Section from "../components/Reusable/Section";
import heading_img from "../assets/images/heading_img.svg";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const navigateToVehicles = () => history.push("/my-vehicles");

  return (
    <div className="container-fluid home-container">
      <Section
        src={heading_img}
        alt="Top section"
        headerText="Keep track of your cars"
        paragraphText="CarWallet is an app that helps you manage fleet. You can check up on your drivers from anywhere in the world"
        onClick={navigateToVehicles}
        btnText="Go to your wallet"
      />
    </div>
  );
}
