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
import BrandHeader from "./brandHeader";

const AdminUser = () => {
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);
  const [listM, setlistM] = useState([]);

  useEffect(() => {
    axios
      .get("/getCustomer")
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
      <div className="row" style={{ display: "flex" }}>
        <SideBarNav />

        {/* add table/other content in each page after this */}

        <div className="row" style={{ flex: 1, marginLeft: 20 }}>
          {listM.map((user, index) => (
            <ListGroup
              key={index}
              style={{
                margin: 20,
                width: 300,
              }}
            >
              <ListGroupItem>
                <strong>Name:</strong> {user.fName} {user.lName}
                <br />
                <strong>Address:</strong> {user.street}
                <br />
                <strong>Email:</strong> {user.email}
              </ListGroupItem>
            </ListGroup>
          ))}
          {/* add table/other content in each page  upto here */}
        </div>
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
