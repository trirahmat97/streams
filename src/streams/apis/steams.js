import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3001'
    // baseURL: 'http://db-streams.trirahmataribowo.com'
    baseURL: 'https://db-stream.herokuapp.com'
});