import React from 'react';

const ContentComponent = (props) => {
    return (
        <strong className={props.className}>
            {props.children}
        </strong>
    );
};

export default ContentComponent;
