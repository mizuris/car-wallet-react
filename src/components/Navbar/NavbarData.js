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
    title: "My fleet",
    path: "/fleet-my",
    icon: <FaIcons.FaCar />,
    className: "nav-text",
  },
  {
    title: "Configure fleet",
    path: "/fleet-config",
    icon: <IoIcons.IoMdAddCircle />,
    className: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
];
