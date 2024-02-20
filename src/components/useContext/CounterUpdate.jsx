import React, { useContext } from 'react';
import CountContext from './CountContext';

const CounterUpdate = () => {
    const context = useContext(CountContext);

    const handleClick = () => {
        context.setCount(prev => prev + 1);
    };

    return (
        <>
            Click here to update count:
            <button onClick={handleClick}>
                Add One to Count
            </button>
        </>
    );
};

export default CounterUpdate;
