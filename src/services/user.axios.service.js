import axios from "axios";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
})

const getUsersAxios=()=>{
    return axiosInstance.get()
}
export {getUsersAxios}