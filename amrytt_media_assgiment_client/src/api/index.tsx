import axios, { CreateAxiosDefaults } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + '/api' || 'https://amrytt-media-assigment.onrender.com/api';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
} as CreateAxiosDefaults);


export default apiClient;