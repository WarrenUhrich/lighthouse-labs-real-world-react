import { useContext } from "react";
import CounterContext from "./CounterContext";

const DisplayCount = () => {
    const context = useContext(CounterContext); 

    return (
        <p>
            Clicked {context.count} times!
        </p>
    );
};

export default DisplayCount;
