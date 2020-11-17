import http from './http.mjs';

const API_URL = '/users';

// Creates new user
export const create = async (data) => {
    try {
        return await http.post(`${API_URL}`, data);
    } catch (err) {
        return err.response.data;
    }
};

// Signs in user
export const login = async (data) => {
    const userEmail = data.email;
    try {
        return await http.get(`${API_URL}/${userEmail}`);
    } catch (err) {
        return err.response.data;
    }
};

export default { create, login };
