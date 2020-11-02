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
import SideBarNav from "./sidebarNav";

const AdminGenerateList = () => {
  const data = ["Tom", "Hardy", "Cillian", "Murphy", "James", "Bond"];
  return (
    <div>
      <p
        style={{
          // borderBottom: "5px solid green",
          borderRight: "1px solid #C0C0C0",
          marginBottom: 0,
          height: 80,
          width: 185,
        }}
      >
        <img style={{ marginTop: 5 }} src={logo} width="80" height="80" />
      </p>
      <div className="row">
        <SideBarNav />
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
                <ListGroupItem
                  style={{
                    width: 500,
                    justifyContent: "left",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  {driver}
                  <Button color="success" style={{ marginLeft: 80 }}>
                    Generate
                  </Button>
                </ListGroupItem>
              </ListGroup>
            );
          })}
        </div>
        {/* add table/other content in each page  upto here */}
      </div>
    </div>
  );
};
export default AdminGenerateList;

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
