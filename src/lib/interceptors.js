import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/"

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401) {
        const { data, status } = await axios.post('/auth/refresh', {}, { withCredentials: true })
        if (status === 200) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            return axios(error.config)
        }
    }else{
        return Promise.reject(error)
    }
})