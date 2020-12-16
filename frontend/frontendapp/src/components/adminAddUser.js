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
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Alert,
} from "reactstrap";
import logo from "../assets/logo.png";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import SideBarNav from "./sidebarNav";
import BrandHeader from "./brandHeader";

const AddUser = () => {
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
  const [isClicked, setIsClicked] = useState(false);
  const [alertView, setAlertView] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const [token, setToken] = useCookies(["mr-token"]);

  //   useEffect(() => {
  //     axios
  //       .get("/getCustomer")
  //       .then((response) => {
  //         setlistM(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

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
          isDriver: true,
          isAdmin: false,
        })
        .then((response) => {
          console.log(response.data.token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <BrandHeader />
      <div className="row" style={{ display: "flex" }}>
        <SideBarNav />

        {/* add table/other content in each page after this */}

        <Form className="signup-form">
          <div>
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
                    placeholder="Zip "
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
                  Driver Has Been Added! You can go to Drivers Tab to see new
                  driver.
                </Alert>
              )
            ) : (
              <Alert color="danger">All fields are required</Alert>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};
export default AddUser;

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
};
