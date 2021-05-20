import axios from 'axios';

const API_PORT = process.env.API_PORT;

const API = axios.create({
    baseURL: `http://localhost:${API_PORT}`,
    withCredentials: true
});

export default API;