import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
// import { Sidenav, Nav, Icon, Button } from "rsuite";
import { Nav, NavItem, NavLink, Table } from "reactstrap";

const SideBarNav = () => {
  return (
    <Nav vertical pills style={navDesign}>
      <NavItem>
        <NavLink href="/adminHome" style={textStl}>
          Admin Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminUser" style={textStl}>
          Users
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminDriver" style={textStl}>
          Drivers
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminGenerateList" style={textStl}>
          Generate List
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SideBarNav;

const textStl = {
  color: "green",
  backgroundColor: "white",
  width: 190,
  margin: 4,
  borderBottom: "1px solid #C0C0C0",
};

const brandStl = {
  color: "green",
  backgroundColor: "white",
  width: 190,
  margin: 5,
  marginTop: 0,
};

const navDesign = {
  alignItems: "flex-start",
  justifyContent: "left",
  width: 200,
  height: 700,
  backgroundColor: "white",
  borderRight: "1px solid #C0C0C0",
  marginTop: 10,
};
