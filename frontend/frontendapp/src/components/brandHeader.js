import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Nav, NavItem, NavLink, Table, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faUser,
//   faTruck,
//   faList,
// } from "@fortawesome/free-solid-svg-icons";

const BrandHeader = () => {
  return (
    <div className="row">
      <p
        style={{
          // borderBottom: "5px solid green",
          borderRight: "1px solid #C0C0C0",
          marginBottom: 0,
          height: 80,
          width: 200,
        }}
      >
        <img style={{ marginTop: 5 }} src={logo} width="80" height="80" />
      </p>
      <p
        style={{
          alignItems: "center",
          color: "green",
          fontSize: 30,
          height: 80,
          borderBottom: "3px solid green",
          flex: 1,
        }}
      >
        Pick Bins Admin
      </p>
    </div>
  );
};

export default BrandHeader;
