import React from 'react';
import './Country.css'
const Country = (props) => {
    
    return (
        <div>
            <div className="mainbody">   
                <h2>{props.name}</h2>
                <h2>{props.population}</h2>
                <h2><bold>{props.area}</bold></h2>
            </div>
        </div>
    );
};

export default Country;