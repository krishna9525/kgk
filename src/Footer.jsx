import React, { useEffect,useState } from 'react'

const Footer = () => {

const [country,setCountry]=useState([])



useEffect(()=>{
    const getcountry=async()=>{
        const res =await fetch("http://localhost/devopsdeveloper/country")
    const getCon=await res.json()
    setCountry(await getCon)
    }
    getcountry()
})





  return (
    <div>Footer</div>
  )
}

export default Footer