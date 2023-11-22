import React from 'react'
import { Route } from 'react-router-dom'

const Auth = ({ element, ...rest }) => {
    const isAuthenticated=()=>{
       
    }
    return (
        <Route {...rest} element={isAuthenticated() ? element : <Navigate to="/login" />} />
    )
}

export default Auth