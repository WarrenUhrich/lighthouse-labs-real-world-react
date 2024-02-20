import React, { useContext } from 'react';
import CountContext from './CountContext';

const CounterCount = () => {
    const context = useContext(CountContext);

    return (
        <>
            The current number of clicks is:
            &nbsp;
            {context.count}
        </>
    );
};

export default CounterCount;
