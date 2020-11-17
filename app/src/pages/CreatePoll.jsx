import React, { useState } from 'react';
import CreatePollForm from '../components/CreatePollForm';
import { create } from '../utils/createPollService.js';
import { StyledPageHeading } from '../styles/mainStyle.js';

const CreatePoll = (props) => {
    const [pollData, setPollData] = useState(null);
    const [error, setError] = useState(null);

    // Submits a new poll with data from input field
    const submitNewPoll = async () => {
        if ( pollData ) {
            const question = pollData;
            const { statusText, error } = await create(question);
            if (error) {
                setError(error.statuscode);
            } else {
                props.history.push('/');
            }
        } else {
            console.log('No poll data');
        }
    };

    return (
        <section>
            <StyledPageHeading>
                Create new poll
            </StyledPageHeading>
            {error && <p>{error}</p>}
            <CreatePollForm setPollData={setPollData} submitNewPoll={submitNewPoll} />
        </section>
    );
};

export default CreatePoll;