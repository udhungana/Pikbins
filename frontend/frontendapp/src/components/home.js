import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
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
    NavbarText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from '../assets/logo.png';


const Home = () => {

    const [token, setToken, deleteToken] = useCookies(['mr-token']);

    const [isOpen, setIsOpen] = useState(false);

    const [date, setDate] = useState("Oct 20");

    const [time, setTime] = useState("5 pm");

    const [location, setLocation] = useState("1000 driver st.");

    const [userName, setUserName] = useState("user");


    useEffect(() => {
        console.log(token);
        if (!token['mr-token']) window.location.href = '/';
    }, [token])

    const logoutClicked = () => {
        deleteToken(['mr-token']);
    }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand style={{ color: "green" }} href="#"><img
                        src={logo}
                        width="30"
                        height="30"
                    />PickBins</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink style={{ color: "green" }} href="/driver">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ color: "green" }} href="#">Pickup Record</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{ color: "green" }} nav caret>
                                    Options
              </DropdownToggle>
                                <DropdownMenu style={{ color: "green" }} right>
                                    <DropdownItem style={{ color: "green" }}>
                                        Support
                </DropdownItem>
                                    <DropdownItem style={{ color: "green" }}>
                                        Account
                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem style={{ color: "red" }}>
                                        Reset
                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText style={{ color: "red" }} onClick={logoutClicked}>Logout</NavbarText>
                    </Collapse>
                </Navbar>
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
                                    fontWeight: "bold"
                                }}
                            >
                                <CardText>Time:</CardText>
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
}

export default Home;