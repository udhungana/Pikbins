import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
// import { Sidenav, Nav, Icon, Button } from "rsuite";
import { Nav, NavItem, NavLink, Table } from "reactstrap";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import { ListGroup, ListGroupItem } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";
function AdminHome() {

  const [mappableFields, setMappableFields] = useState([]);

  useEffect(() => {
    axios
      .get("/getDriver")
      .then((response) => {
        console.log(response)
        setMappableFields(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const adminUserClicked = () => {
  //   console.log("hello");
  //   axios.get("/getCustomer").then((response) => {
  //     console.log(response);
  //   });
  // };

  return (
    <div>
      <BrandHeader />
      <div className="row">
        <SideBarNav />
        {/* add table/other content in each page after this */}
        <Table
          striped
          style={{
            flex: 0.9,
            marginLeft: 20,
            marginTop: 2,
            border: "1px solid #C0C0C0",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th>Address</th>
              <th>Driver</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mappableFields.map((d, index) => (
              <tr key={index}>
                <td>{d.street}</td>
                <td>{d.fName} {d.lName}</td>
                <td>0</td>
              </tr>
            ))}
          </tbody>
        </Table>
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
  marginTop: 10,
};
