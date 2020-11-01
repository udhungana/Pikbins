import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Col, Row, Alert } from "reactstrap";
import "./form.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";

function Auth() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [isDriver, setIsDriver] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [alertView, setAlertView] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const [token, setToken] = useCookies(["mr-token"]);

  const loginClicked = () => {
    axios
      .post("/user/login", {
        email,
        password,
      })
      .then((response) => {
        setToken("mr-token", response.data.token);
        console.log("mr-token");
        console.log(response.data.token);
        setIsDriver(response.data.isDriver);
        console.log("isDriver");
        console.log(response.data.isDriver);
        console.log(isDriver);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const registerClicked = () => {
    if (
      first_name === "" &&
      last_name === "" &&
      address === "" &&
      city === "" &&
      zip_code === "" &&
      country === "" &&
      email === "" &&
      username === "" &&
      password === "" &&
      password2 === ""
    ) {
      setAlertView(false);
    } else if (password !== password2) {
      setPasswordView(true);
      setAlertView(true);
    } else {
      setAlertView(true);
      setPasswordView(false);

      axios
        .post("/user/signup", {
          first_name,
          last_name,
          address,
          city,
          zip_code,
          country,
          email,
          username,
          password,
          password2,
          isDriver: false,
        })
        .then((response) => {
          console.log(response.data.token);
          loginClicked();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (token["mr-token"]) window.location.href = "/home";
  }, [token]);

  return (
    <Form className="login-form">
      {isLoginView ? (
        <div>
          <img src={logo} height="150" width="150" />
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Email*"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="Password"
              placeholder="Password*"
              name="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </FormGroup>
          <Button
            color="success"
            className="btn-lg btn-block"
            onClick={loginClicked}
          >
            Login
          </Button>
          <span>
            <p>or</p>
          </span>
          <p style={{ color: "green" }} onClick={() => setIsLoginView(false)}>
            Create new account
          </p>
        </div>
      ) : (
        <div>
          <img src={logo} height="150" width="150" />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  id="First_Name"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(evt) => setFirstname(evt.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="text"
                  name="last_name"
                  id="Last_Name"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(evt) => setLastname(evt.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input
              type="text"
              name="address"
              id="Address"
              placeholder="Address eg:1234 Main St"
              value={address}
              onChange={(evt) => setAddress(evt.target.value)}
            />
          </FormGroup>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Input
                  type="text"
                  name="city"
                  id="City"
                  placeholder="City"
                  value={city}
                  onChange={(evt) => setCity(evt.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="zip_code"
                  id="Zip_Code"
                  placeholder="Zip eg:12345"
                  value={zip_code}
                  onChange={(evt) => setZip(evt.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Input
                  type="text"
                  name="country"
                  id="Country"
                  placeholder="Country"
                  value={country}
                  onChange={(evt) => setCountry(evt.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="username"
                  name="username"
                  id="Username"
                  placeholder="Username"
                  value={username}
                  onChange={(evt) => setUsername(evt.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  type="password"
                  name="password2"
                  id="Password2"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={(evt) => setPassword2(evt.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            color="success"
            type="button"
            className="btn-lg btn-block"
            onClick={registerClicked}
          >
            Register
          </Button>
          {alertView ? (
            passwordView ? (
              <Alert color="danger">Password not matched</Alert>
            ) : (
              <Alert color="success">
                Now you are good to go to login page. Click Login here!
              </Alert>
            )
          ) : (
            <Alert color="danger">All fields are required</Alert>
          )}

          <span>
            <p>or</p>
          </span>
          <p style={{ color: "green" }} onClick={() => setIsLoginView(true)}>
            Login here!
          </p>
        </div>
      )}
    </Form>
  );
}

export default Auth;
