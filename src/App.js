import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import * as React from 'react'
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import SignUp from './components/signUp';


import { getMessaging, getToken, onMessage } from "firebase/messaging";

import LogIn from './components/logIn';
import NavBar from './NavBar';


function App() {
  const [user, setUser] = useState('')
  useEffect(() => {

    requestPermission();

  }, [])


  let Object = {
    session: {
      outerArray: [{
        checkMe: {
          innerArray: [{
            updateMe: 'upDATE'
          }]
        }
      }]
    }
  }
  Object.session.outerArray.forEach((array) => {
    array.checkMe.innerArray.forEach((arr) => {
      arr.updateMe = "Updateddddd"
    })
  })

  console.log("object:", Object)

  const requestPermission = () => {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  }

  return (
    <div className="App" >

      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route element={<LogIn />} path='/login' />
        <Route element={<NavBar />} >
          <Route index element={<Home />} path='/home' />
          <Route element={<Users />} path='/users' />
          <Route element={<About />} path='/about' />
        </Route>

      </Routes>
    </div >
  );
}

export default App;
