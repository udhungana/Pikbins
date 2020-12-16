import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
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
  Card,
  CardText,
  CardBody,
  Button,
} from "reactstrap";
import logo from "../assets/logo.png";
import axios from "axios";

/**
 * This is the home page of the application where therer will be dashboard show
 * @param {Stores token for sessions } token
 * @param {}
 */

const Home = () => {
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);

  const [isOpen, setIsOpen] = useState(false);

  const [date, setDate] = useState();

  const [time, setTime] = useState();

  const [location, setLocation] = useState();

  const [userName, setUserName] = useState();

  const [dashboardClicked, setDashboardClicked] = useState(0);

  useEffect(() => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    setDate(date);

    axios
      .get("/getSchedule", {
        headers: { Authorization: `Bearer ${token["mr-token"]}` },
      })
      .then((response) => {
        console.log(response);
        var time = 0;
        if (today.getMinutes() + response.data.duration >= 60) {
          var hr = Math.floor(
            (today.getMinutes() + response.data.duration) / 60
          );
          var minutes = (today.getMinutes() + response.data.duration) % 60;
          var ampm = hr >= 12 ? "pm" : "am";
          time =
            today.getHours() +
            hr +
            ":" +
            minutes +
            ":" +
            today.getSeconds() +
            ampm;
        } else {
          var ampm = today.getHours() >= 12 ? "pm" : "am";
          time =
            today.getHours() +
            ":" +
            (today.getMinutes() + response.data.duration) +
            ":" +
            today.getSeconds() +
            ampm;
        }

        setTime(time);
        setLocation(response.data.location);
        setUserName(response.data.firstName);
      })
      .catch((error) => {
        console.log(error);
      });

    //console.log(token);
    if (!token["mr-token"]) window.location.href = "/";
  }, [dashboardClicked, token]);

  const logoutClicked = () => {
    deleteToken(["mr-token"]);
  };

  const onDashboardClicked = () => {
    setDashboardClicked((dashboardClicked) => dashboardClicked + 1);
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{ color: "green" }} href="#">
            <img src={logo} width="30" height="30" />
            PickBins
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "green" }}
                  href="#"
                  onClick={onDashboardClicked}
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ color: "green" }} nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu style={{ color: "green" }} right>
                  <DropdownItem style={{ color: "green" }}>
                    Contacts
                  </DropdownItem>
                  <DropdownItem style={{ color: "green" }}>About</DropdownItem>
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

        <p style={{ color: "green", marginTop: 50 }}>
          <strong>Welcome To PICK BINS </strong>
        </p>
        <p style={{ color: "green" }}>
          <strong>Click on Dashboard to refresh time. Thank You! </strong>
        </p>
      </div>
      <div>
        <h1 style={{ color: "green" }}>Hello {userName} </h1>
        <h2 style={{ color: "green" }}>Your next pickup is scheduled for:</h2>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            display: "flex",
          }}
        >
          <Card>
            <CardBody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "bold",
                }}
              >
                <CardText>Date:</CardText>
                <CardText style={{ marginLeft: 60 }}>{date}</CardText>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "bold",
                }}
              >
                <CardText>ETA:</CardText>
                <CardText style={{ marginLeft: 60 }}>{time}</CardText>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "bold",
                }}
              >
                <CardText>Location:</CardText>
                <CardText style={{ marginLeft: 35 }}>{location}</CardText>
              </div>
            </CardBody>
          </Card>
        </div>
        <p style={{ color: "green", fontWeight: "bold" }}>
          Missed Your Pickup?Don't Worry
        </p>
        <p style={{ color: "green", fontWeight: "bold" }}>
          Just Send us Pickup Request
        </p>
        {/* <Button color="success">Request Again</Button> */}
      </div>
    </>
  );
};

export default Home;
