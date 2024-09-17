import axios from "axios";

const baseUrl = 'http://localhost:4000/';

function createHttpClient() {
    return axios.create({ baseURL: baseUrl });
}

export default createHttpClient;