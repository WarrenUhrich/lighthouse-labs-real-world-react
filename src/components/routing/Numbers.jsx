import React from 'react';
import { useParams } from 'react-router-dom';

const Numbers = () => {
    const { myvalue } = useParams();

    return (
        <>
            <h2>
                Numbers
            </h2>
            <p>
                The number entered was:
                {myvalue}
            </p>
        </>
    );
};

export default Numbers;
