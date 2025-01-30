import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home' 
import Book from './pages/Book'
import Login from './pages/Login'
import PrivateRouter from './componets/PrivateRouter'
import BookDetails from './pages/BookDetails'


 export function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      
      <Route path="/book" element={<Book/>}> </Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/booksDetails/:id" element={<BookDetails/>}></Route>

    </Routes>
</>
  )
}

export default App
