import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Book() {
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()

            useEffect(() => {
                const fetchHandle = async () => {
                    try {
                        setLoading(true); 
                        const res = await axios.get("https://linen-heavy-valley.glitch.me/books");
                        setBooks(res.data.books);
                        console.log(res.data);
                    } catch (error) {
                        console.log(error);
                    } finally {
                        setLoading(false); 
                    }
                };
        
                fetchHandle();
            }, []);


        const handleViewHandle=(id)=>{
            navigate(`/booksDetails/${id}`)
        }
        

  return (
    <div>
        <h2>Welcome to Books Page</h2>

        { loading? <p>Loading </p> : books.map((element)=>(
            <div key={element.id}>
            <h3>{element.name}</h3>
            <h5>{element.category}</h5>
            <h3>{element.price}</h3>
            <button onClick={()=>handleViewHandle(element.id)}>View Details</button>

            </div>
        ))}
      
    </div>
  )
}
