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
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";

/**
 * Admin Generate List generate the optimal path to take to go to each address of customer to pickup waste.
 * After finishing catagorizing the list using assigned list tab, this function creates task list for driver to finish.
 *
 */

function AdminGenerateList() {
  const [showTask, setShowTask] = useState(false);
  const [generatedDriver, setGeneratedDriver] = useState([]);
  const [containsAlready, setContainsAlready] = useState(false);
  const [count, setCount] = useState(0);
  const [notDisabled, setNotDisabled] = useState([false]);

  const [dlist, setDlist] = useState([]);
  const [ulist, setUlist] = useState([]);
  const [generatedClicked, setGeneratedClicked] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  /**
   *
   * @param {token} driverID
   * @param {string} first
   * @param {string} last
   */
  /**
   *
   * Generates
   */
  const generateTasks = (driverID, first, last) => {
    setFirst(first);
    setLast(last);
    console.log("driver id");
    console.log(driverID);
    console.log("driver first");
    console.log(first);
    console.log("driver last");
    console.log(last);
    axios
      .post("/generateTask", { driverID: driverID })
      .then((response) => {
        console.log(response.data.path);
        setUlist(response.data.path);
      })
      .catch((error) => {
        console.log(error);
      });
    setGeneratedClicked(true);

    // var i;
    // let newClick = [...notDisabled];
    // newClick[index] = true;
    // setNotDisabled(newClick);

    // setShowTask(true);

    // if (generatedDriver.length === 0 && count === 0) {
    //   setGeneratedDriver([...generatedDriver, index]);
    //   console.log(generatedDriver);
    //   setCount(count + 1);
    // } else {
    //   for (i = 0; i < generatedDriver.length; i++) {
    //     if (generatedDriver[i] === index) {
    //       setContainsAlready(true);
    //     }
    //   }
    //   if (!containsAlready) {
    //     setGeneratedDriver([...generatedDriver, index]);
    //     console.log(generatedDriver);
    //     setCount(count + 1);
    //   }
    // }
  };

  useEffect(() => {
    axios
      .get("/getDriver")
      .then((response) => {
        console.log(response);
        setDlist(response.data);
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
              <th>Driver Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dlist.map((d, index) => (
              <tr key={index}>
                <td>
                  {d.fName} {d.lName}
                </td>
                <td>
                  <Button
                    color="success"
                    style={{ margin: 0 }}
                    onClick={() => generateTasks(d._id, d.fName, d.lName)}
                  >
                    GenerateTask
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        {generatedClicked ? (
          <Table
            striped
            style={{
              width: 200,
              marginLeft: 200,
              marginTop: 2,
              border: "1px solid #C0C0C0",
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                <th>
                  Optimal list of {first} {last}
                </th>
              </tr>
            </thead>
            <tbody>
              {ulist.map((u, index) => (
                <tr key={index}>
                  <td>{u.address}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}
export default AdminGenerateList;

{
  /* <div className="mbsc-grid" style={{ marginLeft: 190 }}>
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
      </div> */
}
