import React from "react";
import { Link } from "react-scroll";
import car_form from "../../../assets/images/car-form.svg";
import * as FaIcons from "react-icons/fa";

function FormImage() {
  return (
    <div className="form-image-container">
      <h2>Add vehicle</h2>
      <img className="form-image" src={car_form} alt="#" />
      <Link smooth={true} to="form" className="form-image-arrow">
        <FaIcons.FaArrowAltCircleDown className="arrow-icon" />
      </Link>
    </div>
  );
}

export default FormImage;
