import {createStore} from "redux";

import {reducer} from "./combaine";

const store = createStore(reducer);

export {store};