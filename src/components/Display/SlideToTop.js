import React, { useState } from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";

function SlideToTop() {
  //add event listener to get scroll value
  const [isVisible, setIsVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
  });

  return (
    <Link
      smooth={true}
      to="top"
      className={`mobile-arrow-to-top ${isVisible ? "is-on" : "is-out"}`}
    >
      <FaIcons.FaArrowAltCircleUp className={`arrow-to-top-icon`} />
    </Link>
  );
}

export default SlideToTop;
