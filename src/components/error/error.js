import React from 'react';
import './error.css';
import icon from './starwars_PNG40.png';

const Error = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error-icon"/>
            <span className="boom">O, NO!</span>
            <span>
                sorry something went wrong
            </span>
            <span>
        (but drones are already flying to the rescue)
            </span>
        </div>
    )
};

export default Error;