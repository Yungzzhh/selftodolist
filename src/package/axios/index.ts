import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: '/api',
    timeout: 10000
})

export default axiosConfig