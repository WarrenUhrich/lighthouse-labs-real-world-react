import React, { useRef } from 'react';

const RefCounter = () => {
    const counterRef = useRef(0);

    const handleClick = () => {
        counterRef.current++;
        alert('The current count is: '+counterRef.current);
    };

    return (
        <>
            <h2><code>refCounter</code></h2>
            <button onClick={handleClick}>
                Click to update count and show alert box.
                &nbsp;
                You won't see {counterRef.current} update here. It isn't state!
            </button>
        </>
    );
};

export default RefCounter;
