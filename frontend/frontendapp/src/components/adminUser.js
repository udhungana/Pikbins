import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";

/**
 * @param {array} listM - stores all the user info retrieved from backend, which later is displayed using map.
 */

/**
 * Adminuser list all the customer's name, email and addressed displayed in card.
 */
const AdminUser = () => {
  const [listM, setlistM] = useState([]);

  /**
   * gets the customer information from database using axios
   */
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
