import React, { useContext } from 'react';
import CountContext from './CountContext';

const CounterBigUpdate = () => {
    const context = useContext(CountContext);

    const handleClick = () => {
        context.setCount(prev => prev + 5);
    };

    return (
        <>
            Click here to update count:
            <button onClick={handleClick}>
                Add Five to Count
            </button>
        </>
    );
};

export default CounterBigUpdate;
