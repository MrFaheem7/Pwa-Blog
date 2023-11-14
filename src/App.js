import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import * as React from 'react'
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import { firebaseConfig } from './components/firebase';
import { initializeApp, } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


function App() {
  React.useEffect(() => {
    const app = initializeApp(firebaseConfig);
    requestPermission();
    const messaging = getMessaging(app);
    getToken(messaging, { vapidKey: 'BNkmb7wA-ztI25NGOVhV7AEFRtZxYSOgIXdypb29xz5dcE9KO4W6YPlkmYMA__djm6DFOauGY75-vwZIiB3G20w' }).then((currentToken) => {
      if (currentToken) {
        console.log('tokenn:', currentToken)
        localStorage.setItem('tokenn', currentToken)
        localStorage.getItem('tokenn')
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }, [])

  React.useEffect(() => {
    const auth = getAuth();
  }, [])
  function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  }

  return (
    <div className="App">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand><Link to='/'>NavBar</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
              <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Users />} path='/users' />
        <Route element={<About />} path='/about' />
      </Routes>
    </div>
  );
}

export default App;
