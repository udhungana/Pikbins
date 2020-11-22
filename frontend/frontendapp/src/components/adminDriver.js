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
import { Table } from "rsuite";
import { ListGroup, ListGroupItem } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";

const AdminDriver = () => {
  const [listM, setlistM] = useState([]);

  useEffect(() => {
    axios
      .get("/getDriver")
      .then((response) => {
        setlistM(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <BrandHeader />
      <div className="row">
        <SideBarNav />
        {/* add table/other content in each page after this */}
        <div
          className="row"
          style={{ flex: 1, alignContent: "flex-start", marginLeft: 20 }}
        >
          {listM.map((driver, index) => (
            <ListGroup
              key={index}
              style={{
                margin: 20,
              }}
            >
              <ListGroupItem>
                <strong>Name:</strong> {driver.fName} {driver.lName}
                <br />
                <strong>Address:</strong> {driver.street}
                <br />
                <strong>Email:</strong> {driver.email}
              </ListGroupItem>
            </ListGroup>
          ))}
          {/* add table/other content in each page  upto here */}
        </div>
        {/* add table/other content in each page  upto here */}
      </div>
    </div>
  );
};
export default AdminDriver;

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
