import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
// import { Sidenav, Nav, Icon, Button } from "rsuite";
import { Nav, NavItem, NavLink, Table, Button, Text } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";
import { ListGroup, ListGroupItem, Card } from "reactstrap";

function AdminAssignedList() {
  var array = [
    {
      driver: "Utsav",
      user: ["aad", "bbd", "ccd", "eed"],
    },
    {
      driver: "Himal",
      user: ["aaf", "bbf", "ccf", "eef"],
    },
    {
      driver: "Bipul",
      user: ["aag", "bbg", "ccg", "eeg"],
    },
    {
      driver: "Suyash",
      user: ["aam", "bbm", "ccm", "eem"],
    },
    {
      driver: "Pujan",
      user: ["aao", "bbo", "cco", "eeo"],
    },
  ];

  const [showCatagory, setShowCatagory] = useState(false);
  const [catagorizedDriver, setCatagorizedDriver] = useState([]);
  const [containsAlready, setContainsAlready] = useState(false);
  const [count, setCount] = useState(0);
  const [notDisabled, setNotDisabled] = useState([false]);

  const catagorizeUsers = (index) => {
    var i;
    let newClick = [...notDisabled];
    newClick[index] = true;
    setNotDisabled(newClick);
    setShowCatagory(true);

    if (catagorizedDriver.length === 0 && count === 0) {
      setCatagorizedDriver([...catagorizedDriver, index]);
      console.log(catagorizedDriver);
      setCount(count + 1);
    } else {
      for (i = 0; i < catagorizedDriver.length; i++) {
        if (catagorizedDriver[i] === index) {
          setContainsAlready(true);
        }
      }
      if (!containsAlready) {
        setCatagorizedDriver([...catagorizedDriver, index]);
        console.log(catagorizedDriver);
        setCount(count + 1);
      }
    }
  };

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
              <th>Driver</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {array.map((data, index) => (
              <tr key={index}>
                <td>{data.driver}</td>
                <td>
                  <Button
                    color="success"
                    style={{ margin: 0 }}
                    disabled={notDisabled[index] ? true : false}
                    onClick={() => catagorizeUsers(index)}
                  >
                    Catagorize
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mbsc-grid" style={{ marginLeft: 190 }}>
        {showCatagory ? (
          <div className="row">
            {catagorizedDriver.map((data) => {
              return (
                <div>
                  <Card style={{ margin: 20 }}>
                    <p>{array[data].driver}</p>
                    <ListGroup
                      style={{
                        margin: 20,
                      }}
                    >
                      {array[data].user.map((uData) => {
                        return (
                          <ListGroupItem
                            style={{
                              width: 200,
                              justifyContent: "left",
                              alignItems: "flex-start",
                              alignContent: "flex-start",
                            }}
                          >
                            {uData}
                          </ListGroupItem>
                        );
                      })}
                    </ListGroup>
                  </Card>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default AdminAssignedList;

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
