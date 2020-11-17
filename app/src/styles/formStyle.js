import styled from 'styled-components';

// Styled form components

export const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    width: 23%;
    padding: 15px;
    margin: 10px;
    background-color: #e6ebe8;
    border-radius: 7px;
`;

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 30rem;
    padding: 15px;
    margin: 10px;
    background-color: #e6ebe8;
    border-radius: 7px;
`;

export const StyledHeading = styled.h2`
    color: #007b5f;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const StyledInput = styled.input`
    border: 1px solid #007b5f;
    border-radius: 3px;
    padding: 3px;
    min-height: 2.5rem;
    margin-bottom: 20px;
`;

export const StyledButton = styled.button`
    background-color: #007b5f;
    color: white;
    font-weight: bold;
    border-radius: 3px;
    padding: 7px;
    min-height: 2.5rem;
    min-width: 120px;
    max-width: 20rem;
    align-self: center;
    margin-bottom: 10px;
`;

export const StyledText = styled.p`
    color: #007b5f;
    margin-bottom: 10px;
    font-weight: bold;
`;
