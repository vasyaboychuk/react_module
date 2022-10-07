import {combineReducers} from "redux";
import {commentsReducer, postsReducer, usersReducer} from "../reducers";

const reducer=combineReducers({usersReducer,postsReducer,commentsReducer})

export {reducer};