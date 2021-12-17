import React,{Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import logo from './logo192.png'

export default class Header extends Component{
    render() {
        return(
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href = "/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className = "mr-auto">
                            <Nav.Link>My</Nav.Link>
                            <Nav.Link>first</Nav.Link>
                            <Nav.Link>React_js</Nav.Link>
                            <Nav.Link>page</Nav.Link>
                        </Nav>
                        {/*<Form inline>*/}
                        {/*    <FormControl*/}
                        {/*        type="text"*/}
                        {/*        placeholder="Search"*/}
                        {/*        className={"mr-sm-2"}*/}
                        {/*    />*/}
                        {/*    <Button variant="outline-info">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}