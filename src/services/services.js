import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com';

const axiosInstance=axios.create({baseURL})

const apiService={
    getTodos: () => axiosInstance.get(baseURL + '/todos'),
    getAlbums: () => axiosInstance.get(baseURL + '/albums'),
    getComments: () => axiosInstance.get(baseURL + '/comments'),
    getPosts:(id)=>axiosInstance.get(`${baseURL}/posts/${id}`)

}

export {baseURL, apiService};