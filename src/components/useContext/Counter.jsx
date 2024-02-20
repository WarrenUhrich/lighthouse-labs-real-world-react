import React, { useState } from 'react';
import CounterCount from './CounterCount';
import CounterUpdate from './CounterUpdate';

import CountContext from './CountContext';
import CounterBigUpdate from './CounterBigUpdate';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Counter <code>useContext</code> Example</h2>
            <CountContext.Provider value={{count, setCount}}>
                <CounterCount />
                <br />
                <CounterUpdate />
                <br />
                <CounterBigUpdate />
            </CountContext.Provider>
        </>
    );
};

export default Counter;
