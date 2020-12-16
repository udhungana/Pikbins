import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
// import { Sidenav, Nav, Icon, Button } from "rsuite";
import { Nav, NavItem, NavLink, Table, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faTruck,
  faList,
  faClipboardList,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const SideBarNav = () => {
  return (
    <Nav vertical style={navDesign}>
      <NavItem>
        <NavLink href="/adminHome" style={textStl}>
          <FontAwesomeIcon icon={faHome} />
          {"   "}
          Admin Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminUser" style={textStl}>
          <FontAwesomeIcon icon={faUser} />
          {"   "}
          Users
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminDriver" style={textStl}>
          <FontAwesomeIcon icon={faTruck} />
          {"   "}
          Drivers
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminGenerateList" style={textStl}>
          <FontAwesomeIcon icon={faList} />
          {"   "}
          Generate List
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminAssignedList" style={textStl}>
          <FontAwesomeIcon icon={faClipboardList} />
          {"   "}
          Assigned List
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/adminAddUser" style={textStl}>
          <FontAwesomeIcon icon={faUserPlus} />
          {"   "}
          Add New Driver
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
  marginTop: 4,
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
  display: "flex",
  justifyContent: "left",
  alignItems: "flex-start",
  width: 200,
  border: "1px solid #C0C0C0",
  backgroundColor: "white",
  marginTop: 0,
};
