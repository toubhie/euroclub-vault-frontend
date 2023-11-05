import axios, { AxiosResponse, AxiosError } from 'axios';
import { constants } from '../util/helpers';

const makeGetRequest = async (url: string, data?: any): Promise<AxiosResponse> => {
    try {
        return await axios.get(`${constants.baseUrl}${url}`, data);
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

const makePostRequest = async (url: string, data?: any): Promise<AxiosResponse> => {
    try {
        return await axios.post(`${constants.baseUrl}${url}`, data);
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

const makePutRequest = async (url: string, data?: any): Promise<AxiosResponse> => {
    try {
        return await axios.put(`${constants.baseUrl}${url}`, data);
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

const makePatchRequest = async (url: string, data?: any): Promise<AxiosResponse> => {
    try {
        return await axios.patch(`${constants.baseUrl}${url}`, data);
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

const makeDeleteRequest = async (url: string): Promise<AxiosResponse> => {
    try {
        return await axios.delete(`${constants.baseUrl}${url}`);
    } catch (error) {
        handleRequestError(error);
        throw error;
    }
};

const handleRequestError = (error: AxiosError) => {
    // Handle the error, e.g., logging or error reporting
    console.log(error);
};

export {
    makeGetRequest,
    makePostRequest,
    makePutRequest,
    makePatchRequest,
    makeDeleteRequest
};
