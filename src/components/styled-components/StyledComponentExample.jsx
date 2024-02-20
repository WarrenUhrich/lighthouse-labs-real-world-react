import React from 'react';
import styled from 'styled-components';

import ContentComponent from './ContentComponent';

// This is the syntax for existing HTML elements:
const CustomP = styled.p`
    padding: 32px;
    background-color: salmon;
    border: 3px solid black;
    border-radius: 3px;

    &:hover {
        background: cyan;
    }
`;

// This is the syntax for custom components:
const StyledContentComponent = styled(ContentComponent)`
    color: aquamarine;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const StyledComponentExample = () => {
    return(
        <CustomP>
            Hello, World! I am a styled component.
            &nbsp;
            <StyledContentComponent underline>
                This is probably bold.
            </StyledContentComponent>
            &nbsp;
            And...
            &nbsp;
            <StyledContentComponent>
                so is this.
            </StyledContentComponent>
        </CustomP>
    );
};

export default StyledComponentExample;
