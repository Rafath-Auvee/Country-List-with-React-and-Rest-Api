
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
            <h1>Country Name</h1>
            <h1>Population</h1>
            <h1>Area</h1>
        </div>
      
        {
            countries.map(country=> <Country name={country.name.common} population={country.population} area={country.area}></Country> )
        }
    </div>
  )
}

export default Countries
