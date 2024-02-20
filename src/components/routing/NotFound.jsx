import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <>
            <h2>
                404 Not Found
            </h2>
            <button onClick={handleClick}>
                Click Here to Go Home!
            </button>
        </>
    );
};

export default NotFound;
