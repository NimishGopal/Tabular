import { combineReducers } from "redux";
import userData from "./userData";
import pagination from "./pagination";
import filter from "./filter";

const rootReducer = combineReducers({ userData, pagination, filter });

export default rootReducer;
