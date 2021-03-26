import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./NavbarData";
import Tooltip from "@material-ui/core/Tooltip";

export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const showSideMenu = () => setSideMenu(!sideMenu);

  return (
    <>
      <aside className="side-navbar">
        <Link to="#!" className="menu-bars">
          <FaIcons.FaBars className="navbar-icon" onClick={showSideMenu} />
        </Link>
        <div className="brand-name-container">
          <span className="brand-name-nav">
            <Link to="/">
              Car<b>Wallet</b>
            </Link>
          </span>
        </div>
      </aside>
      <nav className={sideMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideMenu}>
          <li className="navbar-toggle">
            <Link to="#!" className="menu-bars">
              <AiIcons.AiOutlineClose className="navbar-icon" />
            </Link>
          </li>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Tooltip placement="right" title={item.title}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="menu-link">{item.title}</span>
                  </Link>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
