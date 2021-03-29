import React from "react";
import Section from "../components/Reusable/Section";
import { useHistory } from "react-router";
import FillSvg from "../assets/animatedSvg/FillSvg";
import { Image } from "react-bootstrap";
import heading_img from "../assets/images/heading_img.svg";

export default function Home() {
  const history = useHistory();
  const navigateToVehicles = () => history.push("/my-vehicles");

  return (
    <>
      <Section
        background="third"
        headerText="Start using wallet now!"
        paragraphText="Simply fill out the form and control your vehicles list, or
        check you current wallet if you already have your cars added!"
        onClick={navigateToVehicles}
        btnText="Go to your wallet"
        imgOrder="1"
        textOrder="2"
      >
        <FillSvg />
      </Section>

      <Section
        background="black"
        headerText="Keep track of your cars"
        paragraphText="Easily manage your vehicles. You can freely edit, remove 
        and add cars to your list."
        imgOrder="2"
        textOrder="1"
      >
        <Image className="section-img" src={heading_img} />
      </Section>

      <Section
        background="third"
        headerText="Keep track of your cars"
        paragraphText="CarWallet is an app that helps you manage fleet. 
          You can check up on your drivers from anywhere in the world."
        imgOrder="1"
        textOrder="2"
      >
        <Image className="section-img" src={heading_img} />
      </Section>
    </>
  );
}
