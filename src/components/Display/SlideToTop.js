import React, { useState } from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";

function SlideToTop() {
  //add event listener to get scroll value
  const [isVisible, setIsVisible] = useState(false);
  let currentScroll = 0;
  window.addEventListener("scroll", (e) => {
    currentScroll = window.scrollY;
    currentScroll > 200 ? setIsVisible(true) : setIsVisible(false);
  });

  return (
    <Link
      smooth={true}
      to="top"
      className={`mobile-arrow-to-top ${isVisible ? "" : "is-hidden"}`}
    >
      <FaIcons.FaArrowAltCircleUp className={`arrow-to-top-icon`} />
    </Link>
  );
}

export default SlideToTop;
