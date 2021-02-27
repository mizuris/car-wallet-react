import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./NavbarData";
import Home from "../../pages/Home/Home";
import MyFleet from "../../pages/MyFleet/MyFleet";
import FleetConfig from "../../pages/FleetConfig/FleetConfig";
import Profile from "../../pages/Profile/Profile";
import Tooltip from "@material-ui/core/Tooltip";
import "./Navbar.scss";
import "../../variables.scss";

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
          <div className="brand-name-container">
            <span className="brand-name-nav">
              <Link to="/">
                Car<b>Wallet</b>
              </Link>
            </span>
          </div>
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
