import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetails() {
    const [data,setData]=useState()
    const [loading,setLoading]=useState(true)

    const {id}=useParams()
   useEffect(()=>{
    const fetchData= async()=>{
        try{
        setLoading(true)
    const res =  await axios.get(`https://linen-heavy-valley.glitch.me/books/${id}`)
         setData(res.data)
        }
        catch(err){
         console.log (err)}
        finally{
            setLoading(false)
        }

    }
    fetchData()
   },[id])

  return (
    <>
       { loading ? (<p>Loading..</p> ):
    (                 data && (
        <>
            <h2>{data.category}</h2>
            <h4>{data.publishingYear}</h4>
        </>
) ) }
 </>
  )
}
