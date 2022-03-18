
import React, { useState, useEffect } from 'react';
import Country from "../Country/Country";
import "./Countries.css"
const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
  return (
    <div>
        <h1>Hello from Countries {countries.length} </h1>
        <div className="parameters">
            <h2>Flag</h2>
            <h2>Country Name</h2>
            <h2>Population</h2>
            <h2>Region</h2>
            <h2>Area</h2>
        </div>
      
        {
            countries.map(country=> <Country country={country} key={country.cca3}></Country> )
        }
    </div>
  )
}

export default Countries
