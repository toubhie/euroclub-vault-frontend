import axios from 'axios'

const baseURL = process.env.REACT_APP_SERVER_URL

const $axios = axios.create({
    baseURL,
});

$axios.interceptors.request.use((config) => {
    return config
})

$axios.interceptors.response.use(
    request => {
        return Promise.resolve(request?.data || {})
    },
    error => {
        if((error?.response?.status === 401 || error?.status === 401) && (error?.config?.url !== ('/login'))) {
            window.location.href = '/'
        } 
        return Promise.reject(error?.response?.data || 'An error occurred')
    }
)

export { $axios };