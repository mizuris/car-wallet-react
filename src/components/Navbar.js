import React, { useState } from "react";
import "./Navbar.scss";
import "../variables.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { NavbarData } from "./NavbarData";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "../pages/Home";
import MyFleet from "../pages/MyFleet";
import FleetConfig from "../pages/FleetConfig";
import Profile from "../pages/Profile";

export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const showSideMenu = () => setSideMenu(!sideMenu);

  return (
    <Router>
      <IconContext.Provider value={{ color: "#056EF0" }}>
        <div className="side-navbar">
          <Link to="#!" className="menu-bars">
            <FaIcons.FaBars onClick={showSideMenu} />
          </Link>
        </div>
        <nav className={sideMenu ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideMenu}>
            <li className="navbar-toggle">
              <Link to="#!" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fleet-my" exact component={MyFleet} />
        <Route path="/fleet-config" exact component={FleetConfig} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}
