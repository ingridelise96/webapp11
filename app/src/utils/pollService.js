import http from './http.mjs';

const API_URL = '/polls';

// Returns all polls
export const listAllPolls = async () => {
    try {
        return await http.get(`${API_URL}`);
    } catch (err) {
        return err.response.data;
    }
};

// Submits answer to poll with id
export const submitPollAnswer = async (data, id) => {
    try {
        return await http.put(`${API_URL}/${id}`, data);
    } catch (err) {
        return err.response.data;
    }
};

export default { listAllPolls, submitPollAnswer };
