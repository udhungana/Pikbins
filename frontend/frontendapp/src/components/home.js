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
                                <NavLink style={{ color: "green" }} href="#">Dashboard</NavLink>
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
                <h1>Hey </h1>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default Home;