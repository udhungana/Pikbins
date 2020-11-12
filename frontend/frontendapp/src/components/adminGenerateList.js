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

const AdminGenerateList = () => {
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

  const data = ["Tom", "Hardy", "Cillian", "Murphy", "James", "Bond"];
  return (
    <div>
      <BrandHeader />
      <div className="row">
        <SideBarNav />
        {/* add table/other content in each page after this */}
        <div>
          {listM.map((driver, index) => {
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
                  {driver.fName} {driver.lName}
                  <Button color="success" style={{ marginLeft: 80 }}>
                    Generate Task
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
