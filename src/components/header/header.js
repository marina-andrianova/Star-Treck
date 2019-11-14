import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    StarDB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a className="nav-link" href="#">People</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Planets</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;