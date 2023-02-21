import { useContext } from "react";
import CounterContext from "./CounterContext";

const UpdateCount = () => {
    const { setCount } = useContext(CounterContext); 

    const handleClick = () => {
        setCount(prev => Number(prev) + 1);
    };

    return (
        <button onClick={handleClick}>
           Count + 1!
        </button>
    );
};

export default UpdateCount;
