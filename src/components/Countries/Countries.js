
import React, { useState, useEffect } from 'react';
const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
  return (
    <div>
      <h1>Main</h1>
    </div>
  )
}

export default Countries
