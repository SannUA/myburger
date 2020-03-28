import axios from 'axios';

const instance = axios.create({
    baseURL: "https://myburger-a8f7b.firebaseio.com/"
})

export default instance;