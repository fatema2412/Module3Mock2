import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from '../context/AuthContext'


export default function Navbar() {
    const {Check,isAuthicated,logOut} =useContext(UserContext)
    const navigate=useNavigate()

  return (
<nav>
    <Link to="/"> Home </Link>
    <Link to="/book"> Books </Link>
    {/* <Link to="/login"> LogIn </Link> */}
    {isAuthicated ?  <button onClick={logOut}>LogOut</button> :
    <button onClick={Check}> LogIn</button> }


</nav>
)
}
