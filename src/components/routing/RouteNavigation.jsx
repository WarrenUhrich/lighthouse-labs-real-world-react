import React from 'react';
import { Link } from 'react-router-dom';

const RouteNavigation = () => {
    return (

        <nav>
            <h1>Navigation:</h1>
            <ul>
                <li>
                    <Link className="my-class" to="/home">Home Page</Link>
                </li>
                <li>
                    <Link to="/about">About Page</Link>
                </li>
                <li>
                    <Link to="/numbers/3">Number 3</Link>
                </li>
                <li>
                    <Link to="/numbers/15">Number 15</Link>
                </li>
                <li>
                    <Link to="/sdklfjsdklfjsdkl">Broken Link</Link>
                </li>
            </ul>
        </nav>

    );
};

export default RouteNavigation;
