import React, { useEffect, useState } from "react";
import "./driver.css";
import TodoItem from "./listItem";
import axios from "axios";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import logo from "../assets/logo.png";

function Driver() {
  const [logout, setLogout] = useState(false);
  const [todos, setTodos] = useState([]);
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);
  const [isOpen, setIsOpen] = useState(false);

  const logoutClicked = () => {
    deleteToken(["mr-token"]);
    setLogout(true);
    //console.log(logout);
  };

  useEffect(() => {
    // Run! Like go get some data from an API.
    if (logout == false && token["mr-token"]) {
      axios
        .get("/getTask", {
          headers: { Authorization: `Bearer ${token["mr-token"]}` },
        })
        .then((response) => {
          console.log(response);
          setTodos(response.data.path);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.location.href = "/";
    }
  }, [logout, token]);

  const deleteItem = (addr) => {
    //console.log("delete clicked");
    //console.log(addr);
    setTodos(todos.filter((item) => item.address !== addr));

    //updating location of driver
    axios
      .post(
        "/updateDriverLocation",
        { current_location: addr },
        { headers: { Authorization: `Bearer ${token["mr-token"]}` } }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="app">
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ color: "green" }} href="#">
          <img src={logo} width="30" height="30" />
            PickBins
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: "green" }} nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu style={{ color: "green" }} right>
                <DropdownItem style={{ color: "green" }}>
                  Contacts
                  </DropdownItem>
                <DropdownItem style={{ color: "green" }}>
                  About
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem style={{ color: "red" }}>Help</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button
            style={{ color: "red", backgroundColor: "white" }}
            onClick={logoutClicked}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </Button>
        </Collapse>
      </Navbar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="todo-list" style={{ flex: 1 }}>
          <h1 style={{ color: "green" }}>Pickup Locations List</h1>
          <p
            style={{
              flex: 0.1,
            }}
          >
          </p>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              deleteItem={() => deleteItem(todo.address)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Driver;
