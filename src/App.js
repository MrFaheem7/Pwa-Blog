import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
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
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './components/firebase';


function App() {
  const app = initializeApp(firebaseConfig);
  const [route,setRoute]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
  const auth = getAuth(app);
  
    const unsubcribe=onAuthStateChanged(auth,(user)=>{
        user? (console.log('islogin')):(console.log('notLogin'))
        user?(setRoute(true)):setRoute(false)
        user? navigate('/home'):navigate('/login')
    })
    return ()=>unsubcribe();
},[])
  const [user, setUser] = useState('')
  useEffect(() => {

    requestPermission();

  }, [])


  // useEffect(() => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, 'mmn@icroooosoooooft.com', 'password@microsoft.com').then((userCredentials) => {
  //     const user = userCredentials.user;
  //     setUser(user)
  //   }).catch((error) => {
  //     console.log('Error', error);
  //   }, []);
  // })
  const requestPermission = () => {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route element={<LogIn />} path='/login' />
       {route&& <Route  element={<NavBar />} >
          <Route index element={<Home />} path='/home' />
          <Route element={<Users />} path='/users' />
          <Route element={<About />} path='/about' />
        </Route>
}
      </Routes>
    </div >
  );
}

export default App;
