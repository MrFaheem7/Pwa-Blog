import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/home'>NavBar</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                            <Nav.Link><Link to='/about'>Abooout</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />

        </div>
    )
}

export default NavBar