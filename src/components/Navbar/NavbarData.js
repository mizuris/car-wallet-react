import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "My vehicles",
    path: "/my-vehicles",
    icon: <FaIcons.FaCar />,
    className: "nav-text",
  },
  {
    title: "Add vehcile",
    path: "/add-vehicle",
    icon: <IoIcons.IoMdAddCircle />,
    className: "nav-text",
  },
];
