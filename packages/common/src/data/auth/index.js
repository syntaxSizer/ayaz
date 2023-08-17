import axios from 'axios';

const API =  {
    authenticate(credentials) {
        return axios.post('https://api.ayazona.com/v2/customers/login',
       {
        role: "user",
        device_token: "",
        ...credentials
       })
    },
    register(data) {
        return axios.post('https://api.ayazona.com/v2/customers/registerUser',
       {
        role: "user",
        device_token: "",
        ...data
       })
    }
}

export default API;