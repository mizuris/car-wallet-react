import React from "react";
import { useHistory } from "react-router";
import Section from "../components/Section/Section";
import SectionImage from "../components/Section/SectionImage";
import SectionText from "../components/Section/SectionText";
import Footer from "../components/Footer/Footer";
import FillSvg from "../assets/animatedSvg/FillSvg";
import heading_img from "../assets/images/heading_img.svg";
import { Image } from "react-bootstrap";

export default function Home() {
  const history = useHistory();
  const navigateToVehicles = () => history.push("/my-vehicles");

  return (
    <>
      <Section background="third">
        <SectionImage>
          <FillSvg />
        </SectionImage>
        <SectionText
          onClick={navigateToVehicles}
          btnText="Go to your wallet"
          btnVariant="primary"
        >
          <h1>Use everywhere</h1>
          <p>
            CarWallet is responsive, so you can use it on your smartphone,
            tablet or desktop. Take this app wherever and whenever you want.
          </p>
        </SectionText>
      </Section>

      <Section background="black">
        <SectionText>
          <h1>Start using CarWallet now!</h1>
          <p>
            Simply fill out the form and control your vehicles list, or check
            you current wallet if you already have your cars added! Enter your
            car details, add photo, keep track of your whole fleet.
          </p>
        </SectionText>
        <SectionImage>
          <Image className="section-img" src={heading_img} alt="Example" />
        </SectionImage>
      </Section>

      <Section background="third">
        <SectionImage>
          <FillSvg />
        </SectionImage>
        <SectionText
          onClick={navigateToVehicles}
          btnText="Go to your wallet"
          btnVariant="primary"
        >
          <h1>Use everywhere</h1>
          <p>
            CarWallet is responsive, so you can use it on your smartphone,
            tablet or desktop. Take this app wherever and whenever you want.
          </p>
        </SectionText>
      </Section>
      
      <Footer />
    </>
  );
}
