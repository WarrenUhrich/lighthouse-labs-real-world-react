import styled from 'styled-components';

import MyCustomComponent from './MyCustomComponent';

const StyledP = styled.p`
    color: black;
    padding: 16px;
    background: salmon;
    border: 3px solid black;
    border-radius: 6px;
`;

const StyledMyCustomComponent = styled(MyCustomComponent)`
    color: salmon;
    padding: 16px;
    background: black;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const StyledComponentExample = () => {
    return (
        <>
            <StyledP>Hello, World! <strong>So cool!!!</strong></StyledP>
            <StyledP>Goodbye, World!</StyledP>
            <StyledMyCustomComponent />
            <StyledMyCustomComponent underline={true} />
        </>
    );
};

export default StyledComponentExample;
