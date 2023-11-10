import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '4c7a491654d74df6a4e4e966f3bafe27'
    }
})