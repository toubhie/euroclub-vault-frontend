import { $axios, baseURL } from "./config";

export const loginUser = async (form) => {
    return $axios.post('/Login', form);
}

export const getAllTasks = async () => {
    return $axios.get('/tasks');
}

export const createTask = async (payload) => {
    return $axios.post('/tasks', payload);
}

export const updateTask = async (taskId, payload) => {
    return $axios.put(`/tasks/${taskId}`, payload);
}

export const deleteTask = async (taskId) => {
    return $axios.delete(`/tasks/${taskId}`);
}

export const UpdateTaskStatus = async (taskId, status) => {
    return $axios.patch(`/tasks/${taskId}`, { status });
}