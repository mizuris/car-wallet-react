import React from "react";
import { useHistory } from "react-router";
import { Image } from "react-bootstrap";
import Section from "../components/Section/Section";
import SectionImage from "../components/Section/SectionImage";
import SectionText from "../components/Section/SectionText";
import Footer from "../components/Footer/Footer";
import heading_img from "../assets/images/heading_img.svg";
import FillSvg from "../assets/animatedSvg/FillSvg/FillSvg";
import MobileSvg from "../assets/animatedSvg/MobileSvg/MobileSvg";

export default function Home() {
  const history = useHistory();
  const navigateToVehicles = () => history.push("/my-vehicles");
  const navigateToForm = () => history.push("/add-vehicle");

  return (
    <>
      <Section background="third">
        <SectionImage>
          <FillSvg />
        </SectionImage>
        <SectionText
          onClick={navigateToVehicles}
          btnText="Add first vehicle"
          btnVariant="primary"
        >
          <h1>
            Start using <strong>CarWallet</strong> now!
          </h1>
          <p>
            Simply fill out the form. Add brand, model, fuel details and photo
            of your car. Fill your garage with cars you own, or those you just
            like!
          </p>
        </SectionText>
      </Section>

      <Section background="black">
        <SectionText>
          <h1>Keep control</h1>
          <p>
            <strong>CarWallet</strong> allows you to freely add new cars, edit
            and delete them. You can check fuel details and compare your
            vehicles - which one is the most or the least economic.
          </p>
        </SectionText>
        <SectionImage>
          <Image className="section-img" src={heading_img} alt="Example" />
        </SectionImage>
      </Section>

      <Section background="third">
        <SectionImage>
          <MobileSvg />
        </SectionImage>
        <SectionText
          onClick={navigateToForm}
          btnText="Go to your wallet"
          btnVariant="primary"
        >
          <h1>Use everywhere</h1>
          <p>
            <strong>CarWallet</strong> is responsive, so you can use it on your
            smartphone, tablet or desktop. Take this app wherever and whenever
            you want.
          </p>
        </SectionText>
      </Section>

      <Footer />
    </>
  );
}
