import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";

/**
 * this is a templete function used in all admin screen used in side navigation.
 * Header with pickbins logo and logout button is added by each admin options.
 */

const BrandHeader = () => {
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);

  const logoutClicked = () => {
    deleteToken(["mr-token"]);
  };

  useEffect(() => {
    if (!token["mr-token"]) window.location.href = "/";
  }, [token]);

  return (
    <div className="row">
      <p
        style={{
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
      <p
        style={{
          marginRight: 30,
          borderBottom: "3px solid green",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Button
          style={{ color: "red", backgroundColor: "white" }}
          onClick={logoutClicked}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </Button>
      </p>
    </div>
  );
};

export default BrandHeader;
