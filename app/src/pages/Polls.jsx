import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/core';
import { listAllPolls, submitPollAnswer } from '../utils/pollService.js';
import { AnswerForm } from '../components/AnswerForm';
import { StyledPageHeading } from '../styles/mainStyle.js';

const Polls = () => {
    const [polls, setPolls] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [error, setError] = useState(null);
    const [submittedMsg, setSubmittedMsg] = useState(null);

    // Displays all polls on front page when page is mounted
    useEffect(() => {
        const fetchAllPolls = async () => {
            const { data, error } = await listAllPolls();
            if (error) {
                setError(error.statusCode);
            } else {
                setPolls(data);
            }
        };
        fetchAllPolls();
    }, []);

    // Submits poll answer
    const answerPoll = async (id) => {
        if ( answer ) {
            const data = [answer];
            const { error } = await submitPollAnswer(data, id);
            if (error) {
                setError(error.statusCode);
            } else {
                setSubmittedMsg({answer: data[0].answer_text, pollId: id});
            }
        } else {
            setError('No answer detected');
        }
    };

    return (
        <section>
            <StyledPageHeading>
                All polls
            </StyledPageHeading>
            {error && <p>{error}</p>}
                <Flex wrap="wrap" direction="row">
                    {polls && polls.map ((poll) => (
                            <AnswerForm 
                            id={poll._id}
                            question={poll.question_text}
                            setAnswer={setAnswer}
                            answerPoll={answerPoll}
                            submittedMsg={submittedMsg}/>
                    ))}
                </Flex>
        </section>
    );
};

export default Polls;
