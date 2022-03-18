// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Country from "./components/Country/Country";

function App() {
  
  return (
    <div className="App">
      {/* <LoadContries></LoadContries> */}
      <Country></Country>
    </div>
  );
}

// function LoadContries(){
//   const [countries, setcountries] = useState([])

//   useEffect(() => {
    
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setcountries(data))

    
//   }, [])
  
  
  
  
//   return(
//     <div>
//       <h1>All Countries Chart List</h1>
//       <h3>Avaliable Countries: {countries.length} </h3>
      
//       {
//         countries.map(country => <p> <Country name={country.name.common} population={country.population}></Country> </p> )
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

// export default App;
