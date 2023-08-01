import React, { useEffect, useState } from 'react'
import axios from "axios"


const Home = () => {
    const [countryid, setCountryid] = useState('');
    const [stateid, setStateid]= useState('');

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity]= useState([]);


    useEffect(() => {
        const getCountry = async () => {
            const response = await axios.get("https://restcountries.com/v3.1/all")
            console.log(response)
            setCountry(response)
        }
        getCountry()
    }, [])

    const handlecountry = (event) => {
        const getCountryid = event.target.value;
        setCountryid(getCountryid)

    }




    useEffect(() => {
        const getState = async () => {
            const resState = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(resState)
            setState(resState)
        }
        getState()
    },[countryid])

    const handleState=(event)=>{
        const getStateid=event.target.value;
        setStateid(getStateid)


    }



    useEffect( ()=>{
        const getcity= async()=>{   
            const rescity= await axios.get(`https://jsonplaceholder.typicode.com/posts`);
           setCity(rescity)
          
        }
    getcity();
    },[stateid]);




    return (
        <div className='home-page'>
            <h2>Select Country State And City</h2>


            <div className='country'>
                <label htmlFor="">Country</label>
                <select name="" id="" onChange={(e) => handlecountry(e)}>
                    <option value="">--Select Country--</option>
                    {

                    }

                </select>
            </div>



            <div className='state'>
                <label htmlFor="">State</label>
                <select name="" id="" onChange={(e)=>handleState(e)}>
                    <option value="">--Select State--</option>
                    {

                    }

                </select>

            </div>

            <div className='city'>
                <label htmlFor="">City</label>
                <select name="" id="">
                    <option value="">--Select City--</option>

                    {

                    }
                </select>

            </div>



            <div className='btn'>
                <button type="submit">Submit</button>

            </div>


        </div>


    )
}

export default Home