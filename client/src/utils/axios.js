import axios from "axios";

const  instance = axios.create({
    baseURL: 'http://localhost:3003/api'
    //http://localhost:3003/api/auth/register
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
});

export default instance