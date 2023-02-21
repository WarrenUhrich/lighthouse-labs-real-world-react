import styled from 'styled-components';
import ContentComponent from './ContentComponent';

const CustomP = styled.p`
    padding: 16px;
    background-color: salmon;
    border: 3px solid black;
    border-radius: 3px;
`;

const StyledContentComponent = styled(ContentComponent)`
    color: aquamarine;
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const StyledComponentExample = () => {

    return (
        <CustomP>
            Hello, World! This is my styled component!
            &nbsp;
            <StyledContentComponent underline={true}>
                This Text!
            </StyledContentComponent>
            &nbsp;
            <StyledContentComponent>
                This Other Text!
            </StyledContentComponent>
        </CustomP>
    );
};

export default StyledComponentExample;