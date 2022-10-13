import {axiosService} from "./axios.service";

import {urls} from "../config/urls";

const commentService = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    commentService
}