import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com",
    auth: {
        username: 'usuarioteste',
        password    : 'senhateste',
    }    
});