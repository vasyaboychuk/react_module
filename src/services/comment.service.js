import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const commentService={
    get: () => axiosInstance.get(urls.comments),
    create:(comment)=>axiosInstance.post(urls.comments,comment)
}
export {commentService};