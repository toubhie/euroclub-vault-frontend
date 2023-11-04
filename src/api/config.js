import axios from 'axios';
import constants from '../util/constants';

const makeGetRequest = async (url) => {
    return axios.get(`${constants.baseUrl}${url}`)
        .then(response => response)
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


const makePostRequest = async (url , data) => {
    return axios.post(`${constants.baseUrl}${url}`, data)
        .then(response => response)
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

export {
    makeGetRequest,
    makePostRequest
}