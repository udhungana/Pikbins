import React, { useEffect, useState } from "react";
import axios from "axios";
import { Nav, NavItem, NavLink, Table } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";

/**
 * @param {array} mappableFields - stores all driver's information retrieved from backend
 */
/**
 * Admin Home shows information of a driver, its assigned address, and pickup status in each row of table for all driver.
 */
function AdminHome() {
  const [mappableFields, setMappableFields] = useState([]);

  /**
   * retrives drivers information from backend, and stores in mappableFields.
   */
  useEffect(() => {
    axios
      .get("/getDriver")
      .then((response) => {
        console.log(response);
        setMappableFields(response.data);
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
                <td>
                  {d.fName} {d.lName}
                </td>
                <td>pending</td>
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
