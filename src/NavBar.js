import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, } from 'react-router-dom';
import LogoutButton from './components/LogoutButton';
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/home'>NavBar</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                        </Nav>
                        <LogoutButton style={{ }} name={'LogOut'}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />

        </div>
    )
}

export default NavBar