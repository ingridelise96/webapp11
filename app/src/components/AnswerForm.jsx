import React from 'react';
import { StyledCard, StyledHeading, StyledInput, StyledButton, StyledText } from '../styles/formStyle.js';

export const AnswerForm = ({ id, question, setAnswer, answerPoll, submittedMsg }) => {

    // Sets data from input to answer on update
    const updateAnswer = (event) => {
        setAnswer({
            answer_text: event.target.value,
            user: "5fac176c2e9edc63e4c63e98",
            poll: id
        });
    };

    return (
        <StyledCard key={id}>
            <StyledHeading>
                {question}
            </StyledHeading>
            {submittedMsg !== null && submittedMsg.pollId === id ? (
                <StyledText>{`Answer submitted: ${submittedMsg.answer}`}</StyledText>
            ) : (
                <>
                    <StyledInput type="text" className="answerInput" placeholder="Your answer" onChange={updateAnswer}/>
                    <StyledButton onClick={() => answerPoll(id)}>
                        Submit
                    </StyledButton>
                </>
            )}
        </StyledCard>
    );
}