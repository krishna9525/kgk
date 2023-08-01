import React, { useState } from 'react'
import count from "./count.json"

const Navbar = () => {


    const [countryid, setCountryid] = useState("")

    const [state, setState] = useState([])

    const [stateid, setStateid] = useState('')
    const[data, setData] = useState([])






    const handleCountry = (e) => {
        const getCountry = e.target.value
        console.log(getCountry)
        const getSateDate = count.find(country => country.country_id === getCountry).states
        setState(getSateDate)
        setCountryid(getCountry)
    }


    const handleState = (e) => {

        const stateidd = e.target.value
        setStateid(stateidd)
        console.log(stateidd)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("get country Id " + countryid + "And" + stateid)
    }








    return (
        <div className='home-page'>
            <h2>Select Country State And City</h2>

            <form action="" onSubmit={handleSubmit}>
                <div className='country'>
                    <label htmlFor="">Country</label> <br />
                    <select name="country" className="form-control p-2" onChange={(e) => handleCountry(e)} >
                        <option value="">--Select Country--</option>
                        {count?.map((getcountry, index) => {

                            return (
                                <option value={getcountry.country_id} key={index}>
                                    {getcountry.country_name}
                                </option>
                            );
                        })}
                    </select>
                </div>



                <div className='state'>
                    <label htmlFor="">State</label> <br />
                    <select name="states" id="" className='form-control' onChange={(e) => handleState(e)}>
                        <option value="">--Select state--</option>
                        {state.map((getState, index) => {
                            return (
                                <option value={getState.state_id} key={index}>
                                    {getState.state_name}
                                </option>
                            );
                        })}
                    </select>
                </div>


                <br />


                <div className='btn'>
                    <button type="submit">Submit</button>

                </div>
                <div  className='text-center'>
                <table border={1} style={{width:"500px", margin:"50px auto" ,textAlign:"center"}}>
                    <thead>
                        <th style={{padding:"10px 100px"}}>Country</th>
                        <th style={{padding:"10px 100px"}}>State</th>
                        <th style={{padding:"10px 100px"}}>City</th>
                    </thead>
                </table>
                </div>








            </form>
        </div>

    )
}

export default Navbar