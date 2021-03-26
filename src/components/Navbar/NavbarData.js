import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="navbar-icon" />,
    className: "nav-text",
  },
  {
    title: "My vehicles",
    path: "/my-vehicles",
    icon: <FaIcons.FaCar className="navbar-icon" />,
    className: "nav-text",
  },
  {
    title: "Add vehicle",
    path: "/add-vehicle",
    icon: <IoIcons.IoMdAddCircle className="navbar-icon" />,
    className: "nav-text",
  },
];
