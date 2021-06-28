import axios from 'axios';



const apiInstance = axios.create({
    baseURL : "http://localhost:5000/api"
});

export default apiInstance