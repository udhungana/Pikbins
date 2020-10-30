import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import logo from "../assets/logo.png";
import axios from "axios";
import { Sidenav, Nav, Icon, Button } from "rsuite";

function adminHome() {
  const dashClicked = () => {
    window.location.href = "/adminHome";
  };
  const driverClicked = () => {
    window.location.href = "/adminDriver";
  };

  const userClicked = () => {
    window.location.href = "/adminUser";
  };

  const generateClicked = () => {
    window.location.href = "/adminGenerateList";
  };

  return (
    <div style={{ width: 250 }}>
      <Sidenav activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              eventKey="1"
              icon={<Icon icon="dashboard" />}
              onSelect={dashClicked()}
            >
              Home
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={<Icon icon="truck" />}
              onSelect={driverClicked()}
            >
              Driver
            </Nav.Item>
            <Nav.Item
              eventKey="3"
              icon={<Icon icon="user-circle" />}
              onSelect={userClicked()}
            >
              User
            </Nav.Item>
            <Nav.Item
              eventKey="4"
              icon={<Icon icon="list-alt" />}
              onSelect={generateClicked()}
            >
              GenerateList
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
export default adminHome;
