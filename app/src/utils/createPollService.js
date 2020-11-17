import http from './http.mjs';

const API_URL = '/createpoll';

// Creates new poll
export const create = async (data) => {
    try {
        return await http.post(`${API_URL}`, data);
    } catch (err) {
        return err.response.data;
    }
};

export default { create };
