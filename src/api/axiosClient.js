import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const axiosClient = axios.create({
    baseURL: 'https://www.api-box-app.fun/api/',
    headers: {
        'content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        const token = await currentUser.getIdToken();
        config.headers.Authorization = token;
    }

    return config;
});

export default axiosClient;
