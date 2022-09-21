import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const userService={
    getAll: () => axiosInstance.get(urls.users),
    create: (user) => axiosInstance.post(urls.users, user),
}
export {userService};