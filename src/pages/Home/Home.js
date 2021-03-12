import React from "react";
import "./Home.scss";
import Section from "../../components/Display/Section";
import heading_img from "../../assets/images/heading_img.svg";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const navigateToFleet = () => history.push("/fleet-my");
  const parText =
    "CarWallet is an app that helps you manage fleet. You can check up on your drivers from anywhere in the world";
  const headerText = "Keep it close";

  return (
    <div className="container-fluid page-section d-flex align-items-center">
      <Section
        bgColor="blue"
        imgWrapClassName="heading-img-container"
        imgClassName="heading-img"
        imgSrc={heading_img}
        alt="Heading img"
        textWrapClassName="heading-text-container text-center"
        textHeaderClassName="heading-text-header"
        textParClassName="heading-text"
        btnValue="Try now"
        btnClassName="btn-danger"
        btnOnClick={navigateToFleet}
        headerText={headerText}
        parText={parText}
      />
    </div>
  );
}
