import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
import { Nav, NavItem, NavLink, Table, Button, Text } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";
import { ListGroup, ListGroupItem, Card } from "reactstrap";

/**
 * Here in this page first drivers are catagorized with customers based on city.
 * For example driver 1 is assigned to collect city of Irving then customers with city Irving is assigned to driver 1
 * Here catagorized is done for only the driver working in a particular week by admin.
 * Catagorizing driver based on city need to be done before Generating task list for driver.
 */
function AdminAssignedList() {
  const [dlist, setDlist] = useState([]);
  const [ulist, setUlist] = useState([]);
  // const [showCatagory, setShowCatagory] = useState(false);
  // const [catagorizedDriver, setCatagorizedDriver] = useState([]);
  // const [containsAlready, setContainsAlready] = useState(false);
  // const [count, setCount] = useState(0);
  // const [notDisabled, setNotDisabled] = useState([false]);
  const [categorizeClicked, setCategorizeClicked] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const catagorizeUsers = (driverID, first, last) => {
    setFirst(first);
    setLast(last);
    console.log("driver id");
    console.log(driverID);
    console.log("driver first");
    console.log(first);
    console.log("driver last");
    console.log(last);
    axios
      .post("/categorizeCustomer", { driverID: driverID })
      .then((response) => {
        console.log(response.data);
        setUlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setCategorizeClicked(true);

    //   var i;
    //   let newClick = [...notDisabled];
    //   newClick[index] = true;
    //   setNotDisabled(newClick);
    //   setShowCatagory(true);

    //   if (catagorizedDriver.length === 0 && count === 0) {
    //     setCatagorizedDriver([...catagorizedDriver, index]);
    //     console.log(catagorizedDriver);
    //     setCount(count + 1);
    //   } else {
    //     for (i = 0; i < catagorizedDriver.length; i++) {
    //       if (catagorizedDriver[i] === index) {
    //         setContainsAlready(true);
    //       }
    //     }
    //     if (!containsAlready) {
    //       setCatagorizedDriver([...catagorizedDriver, index]);
    //       console.log(catagorizedDriver);
    //       setCount(count + 1);
    //     }
    //   }
    // };

    // const adminUserClicked = () => {
    //   console.log("hello");
    //   axios.get("/getCustomer").then((response) => {
    //     console.log(response);
    //   });
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
            {dlist.map((d, index) => (
              <tr key={index}>
                <td>
                  {d.fName} {d.lName}
                </td>
                <td>
                  <Button
                    color="success"
                    style={{ margin: 0 }}
                    //disabled={notDisabled[index] ? true : false}
                    onClick={() => catagorizeUsers(d._id, d.fName, d.lName)}
                  >
                    Catagorize
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        {categorizeClicked ? (
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
                  Customers of {first} {last}
                </th>
              </tr>
            </thead>
            <tbody>
              {ulist.map((u, index) => (
                <tr key={index}>
                  <td>{u}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}
export default AdminAssignedList;

{
  /* <div className="mbsc-grid" style={{ marginLeft: 190 }}>
        {showCatagory ? (
          <div className="row">
            {catagorizedDriver.map((data) => {
              return (
                <div>
                  <Card style={{ margin: 20 }}>
                    <p>{dlist[data].driver}</p>
                    <ListGroup
                      style={{
                        margin: 20,
                      }}
                    >
                      {ulist[data].user.map((uData) => {
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
