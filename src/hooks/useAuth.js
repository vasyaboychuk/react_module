import {useContext} from "react";
import {authContext} from "../hoc";

const useAuth=() => useContext(authContext);

export {useAuth}