import {useState} from 'react';
import DisplayCount from './DisplayCount';
import UpdateCount from './UpdateCount';
import CounterContext from './CounterContext';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Counter useContext Example</h2>
            <CounterContext.Provider value={{count, setCount}}>
                <DisplayCount />
                <UpdateCount />
            </CounterContext.Provider>
        </>
    );
};

export default Counter;
