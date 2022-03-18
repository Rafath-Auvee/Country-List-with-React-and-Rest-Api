import React from 'react';
import './Country.css'
const Country = (props) => {
    
    const {name, population, region, area} = props.country
    return (
        <div>
             
            <div className="mainbody">   
                <h3>{name.common}</h3>
                <h3>{population}</h3>
                <h3>{region}</h3>
                <h3><bold>{area}</bold></h3>
            </div>
        </div>
    );
};

export default Country;