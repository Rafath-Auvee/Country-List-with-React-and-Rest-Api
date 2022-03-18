import React from 'react';
import './Country.css'
const Country = (props) => {
    
    const {name, population, region, area, flags} = props.country
    return (
        <div>
             
            <div className="mainbody">
                <img src={flags.png} className="flag" alt="" srcset="" />   
                <h3>{name.common}</h3>
                <h3>{population}</h3>
                <h3>{region}</h3>
                <h3>{area}</h3>
            </div>
        </div>
    );
};

export default Country;