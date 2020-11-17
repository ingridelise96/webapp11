import React from 'react';
import { Box, Input, Button } from '@chakra-ui/core';
import {StyledInput, StyledButton, StyledForm} from '../styles/formStyle';

const CreatePollForm = ({setPollData, submitNewPoll}) => {

    // Sets data from input field to pollData on update
    const updatePollData = (event) => {
        setPollData({question_text: event.target.value});
    };
    
    return (
        <StyledForm>
            <StyledInput type="text" placeholder="Poll question" name="email" onChange={updatePollData}/>
            <StyledButton onClick={() => submitNewPoll()}>
                Create
            </StyledButton>
        </StyledForm>
    );
};

export default CreatePollForm;