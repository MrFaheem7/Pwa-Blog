import React from 'react'
import './Logout.css'
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getAuth, signOut } from 'firebase/auth';

const LogoutButton = ({ name }) => {
  const navigate = useNavigate()
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const logout = () => {
    signOut(auth).then((res) => {
      console.log(res, 'res')
      navigate("/")
    })
  }

  return (
    <div><button className='button' onClick={() => logout()}>{name} </button></div>
  )
}

export default LogoutButton