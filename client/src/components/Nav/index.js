import React from "react";
import {Navbar, Nav} from "react-bootstrap";

function TopNav(){
    return(
        <Navbar>
            <Navbar.Brand>Google Books App</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default TopNav;