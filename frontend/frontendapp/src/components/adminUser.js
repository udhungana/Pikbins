import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import logo from "../assets/logo.png";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const AdminUser = () => {
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);
  console.log("hello");
  axios
    .get("/getSchedule", {
      headers: { Authorization: `Bearer ${token["mr-token"]}` },
    })
    .then((response) => {
      console.log(response);
    });
  const data = ["Tom", "Hardy", "Cillian", "Murphy", "James", "Bond"];

  return (
    <div>
      <p
        style={{
          borderBottom: "5px solid green",
          marginBottom: 0,
        }}
      >
        <img src={logo} width="40" height="40" /> {"  "}Pick Bins Admin
      </p>
      <div className="row">
        <Nav vertical pills style={navDesign}>
          <NavItem>
            <NavLink href="/adminHome" style={textStl}>
              Admin Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/adminDriver" style={textStl}>
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/adminUser" style={textStl}>
              Drivers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/adminGenerateList" style={textStl}>
              Generate List
            </NavLink>
          </NavItem>
        </Nav>
        {/* add table/other content in each page after this */}
        <div>
          {data.map((driver, index) => {
            return (
              <ListGroup
                key={index}
                style={{
                  margin: 20,
                }}
              >
                <ListGroupItem>{driver}</ListGroupItem>
              </ListGroup>
            );
          })}
        </div>
        {/* add table/other content in each page  upto here */}
      </div>
    </div>
  );
};
export default AdminUser;

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
};
