import React, { useState } from "react";
import "./Navbar.scss";
import "../variables.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { NavbarData } from "./NavbarData";

export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const showSideMenu = () => setSideMenu(sideMenu);

  return (
    <>
      <IconContext.Provider value={{ color: "#056EF0" }}>
        <div className="side-navbar">
          <FaIcons.FaBars onClick={showSideMenu} />
        </div>
        <nav className={sideMenu ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideMenu}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose />
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
