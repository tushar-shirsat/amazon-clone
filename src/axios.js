import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:5001/challenge-e20f9/us-central1/api'
})

export default instance;