import React from 'react';
import { StyledInput, StyledButton, StyledForm, StyledText } from '../styles/formStyle';
import { StyledPageHeading } from '../styles/mainStyle.js';


const UserForm = ({ heading, submitUser, userData, setUserData, setHasUser, hasUser, toggleForm, signedInMsg }) => {

    // Sets input data to userData on change
    const updateUserData = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    };
    
    return (
        <StyledForm>
            <StyledPageHeading>
                {heading}
            </StyledPageHeading>
            {signedInMsg !== '' && <StyledText>{signedInMsg}</StyledText>}
            <StyledInput type="email" placeholder="Email" name="email" onChange={updateUserData}/>
            <StyledInput type="password" placeholder="Password" name="password" onChange={updateUserData}/>
            <StyledButton onClick={() => submitUser()}>
                {heading}
            </StyledButton>

            <StyledButton onClick={() => setHasUser (hasUser === false ? true : false)}>
                {toggleForm}
            </StyledButton>
        </StyledForm>
    );
};

export default UserForm;