import { useRef, useState } from 'react';

const RefExample = () => {
    const [textFieldValue, setTextFieldValue] = useState();
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <form onSubmit={event => event.preventDefault()}>
            <label>
                Enter a text value:
                <input
                    ref={inputRef}
                    type="text"
                    value={textFieldValue}
                    onChange={event => setTextFieldValue(event.target.value)}
                />
            </label>
            <button onClick={handleClick}>
                Focus Text Input
            </button>
        </form>
    );
};

export default RefExample;
