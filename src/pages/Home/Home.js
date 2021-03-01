import React from "react";
import "../../variables.scss";
import "./Home.scss";
import Section from "../../components/Section";
import heading_img from "../../assets/images/heading_img.svg";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const navigateToFleet = () => history.push("/fleet-my");
  return (
    <div className="page-section">
      <Section
        bgColor="blue"
        imgWrapClassName="heading-img-container"
        imgClassName="heading-img"
        imgSrc={heading_img}
        alt="Heading img"
        textWrapClassName="heading-text-container"
        textHeaderClassName="heading-text-header"
        texhParClassName="heading-text"
        btnValue="Try it biatch"
        btnClassName="btn-danger"
        btnOnClick={navigateToFleet}
        headerText="Tejk kontrol"
        parText="Dys ys som rendom tejks"
      />
    </div>
  );
}
