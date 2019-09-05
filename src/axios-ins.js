import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://favs-proj.firebaseio.com/'
});

export default instance;