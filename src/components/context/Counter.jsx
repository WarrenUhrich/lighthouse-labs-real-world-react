import { useState } from 'react';
import CountContext from './CountContext';

import CountDisplay from './CountDisplay';
import CountUpdater from './CountUpdater';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter</h1>
            <CountContext.Provider value={{count, setCount}}>
                <CountDisplay />
                <CountUpdater />
            </CountContext.Provider>
        </>
    );
};

export default Counter;
