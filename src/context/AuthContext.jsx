import React, { createContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export const UserContext=createContext()
export default function AuthContext({children}) {
    const [isAuthicated,setIsAuthicated]=useState(false)
    const navigate= useNavigate()
    const Check=(value)=>{
           if(value){
        setIsAuthicated(true)
        navigate("/book")

        
       }
    }
    const logOut=()=>{
        setIsAuthicated(false)
        navigate("/login")
    }
  return (
    <div>
      <UserContext.Provider  value={{Check,isAuthicated,logOut}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
