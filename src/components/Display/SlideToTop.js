import React from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";

function SlideToTop() {

  return (
    <Link smooth={true} to="top" className={`mobile-arrow-to-top`}>
      <FaIcons.FaArrowAltCircleUp className={`arrow-to-top-icon`} />
    </Link>
  );
}

export default SlideToTop;
