import React, { useContext, useState } from 'react'
import axios from "axios"
import { UserContext } from  '../context/AuthContext'

export default function Login() {
    const [data,setData]=useState({username:"",password:""})
    const {Check }=useContext(UserContext)
    const handleInput=(e)=>{
     const {name,value}=e.target
    setData({...data,[name]:value})
    }
 
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post ("https://linen-heavy-valley.glitch.me/login",data)
        .then((res)=> {
        console.log(res.data)
        const value=res.data.token
        Check(value)
        })
        .catch ((err)=> console.log(err))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text"
         placeholder="Enter UserName"
          onChange={handleInput}
        value={data.username}
        name="username" />
            <input type="text"
         placeholder="Enter Password"
          onChange={handleInput}
        value={data.password}
        name="password" />
        <input type="submit" value="Login"/>

    </form>
      
    </>
  )
}
