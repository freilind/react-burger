import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-rx.firebaseio.com/'
});

export default instance;
