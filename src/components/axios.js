import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://adopts-backend.herokuapp.com/'
})

export default instance;