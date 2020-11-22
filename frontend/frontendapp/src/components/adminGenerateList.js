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
  Table,
} from "reactstrap";
import logo from "../assets/logo.png";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";

function AdminGenerateList() {
  var array = [
    {
      driver: "Utsav",
      addresses: [
        "1001 courtside dr.",
        "2000 fine st.",
        "300 line rd.",
        "400 count dr.",
      ],
    },
    {
      driver: "Himal",
      addresses: [
        "700 side dr.",
        "1000 wine st.",
        "400 blue rd.",
        "500 counter dr.",
      ],
    },
    {
      driver: "Bipul",
      addresses: [
        "1213 code dr.",
        "1500 shine st.",
        "9000 vine rd.",
        "800 perma dr.",
      ],
    },
    {
      driver: "Suyash",
      addresses: [
        "109 square dr.",
        "101 hike st.",
        "3001 fire rd.",
        "990 shout dr.",
      ],
    },
    {
      driver: "Pujan",
      addresses: [
        "1114 faun dr.",
        "2113 longstaff st.",
        "762 Never rd.",
        "454 last dr.",
      ],
    },
  ];
  //const [listM, setlistM] = useState([]);

  const [showTask, setShowTask] = useState(false);
  const [generatedDriver, setGeneratedDriver] = useState([]);
  const [containsAlready, setContainsAlready] = useState(false);
  const [count, setCount] = useState(0);
  const [notDisabled, setNotDisabled] = useState([false]);

  const generateTasks = (index) => {
    var i;
    let newClick = [...notDisabled];
    newClick[index] = true;
    setNotDisabled(newClick);

    setShowTask(true);

    if (generatedDriver.length === 0 && count === 0) {
      setGeneratedDriver([...generatedDriver, index]);
      console.log(generatedDriver);
      setCount(count + 1);
    } else {
      for (i = 0; i < generatedDriver.length; i++) {
        if (generatedDriver[i] === index) {
          setContainsAlready(true);
        }
      }
      if (!containsAlready) {
        setGeneratedDriver([...generatedDriver, index]);
        console.log(generatedDriver);
        setCount(count + 1);
      }
    }
  };

  // useEffect(() => {
  //   axios
  //     .get("/getDriver")
  //     .then((response) => {
  //       setlistM(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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
              <th>Driver Name</th>
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
                    onClick={() => generateTasks(index)}
                  >
                    GenerateTask
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* add table/other content in each page  upto here */}
      </div>
      <div className="mbsc-grid" style={{ marginLeft: 190 }}>
        {showTask ? (
          <div className="row">
            {generatedDriver.map((data) => {
              return (
                <div>
                  <Card style={{ margin: 20 }}>
                    <p>{array[data].driver}</p>
                    <ListGroup
                      style={{
                        margin: 20,
                      }}
                    >
                      {array[data].addresses.map((uData) => {
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
export default AdminGenerateList;
