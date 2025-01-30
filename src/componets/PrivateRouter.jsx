import React, { useContext } from 'react'
import {UserContext}  from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRouter({children}) {
    const {isAuthicated}=useContext(UserContext)
  
    if (isAuthicated==true){
       return <Navigate to="/book"/>
    }
    else {
        return <Navigate to="/login"/>
    }
        return (children )
}
