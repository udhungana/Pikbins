import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
// import { Sidenav, Nav, Icon, Button } from "rsuite";
import { Nav, NavItem, NavLink, Table } from "reactstrap";
import Divider from "@material-ui/core/Divider";

function AdminHome() {
  var array = [
    { address: "John", driver: "lol", status: "done" },
    { address: "murphy", driver: "love", status: "done" },
    { address: "eltom", driver: "awol", status: "done" },
    { address: "sailesh", driver: "hate", status: "pending" },
  ];

  const [mappableFields, setMappableFields] = useState([]);

  useEffect(() => {
    if (array && array.length > 0) {
      setMappableFields(Object.getOwnPropertyNames(array[0]));
    }
  }, [array]);

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
        <Table
          striped
          style={{ flex: 0.9, margin: 20, border: "1px solid #C0C0C0" }}
        >
          <thead>
            <tr>
              <th>Address</th>
              <th>Driver</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {array.map((data, index) => (
              <tr key={index}>
                {mappableFields.map((header, idx) => (
                  <td key={idx}>{data[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        {/* add table/other content in each page  upto here */}
      </div>
    </div>
  );
}
export default AdminHome;

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
