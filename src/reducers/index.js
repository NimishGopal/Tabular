import { combineReducers } from "redux";
import userData from "./userData";
import pagination from "./pagination";
import filter from "./filter";
import userDetailsHashMap from "./userDetailsHashMap";

const rootReducer = combineReducers({
  userData,
  pagination,
  filter,
  userDetailsHashMap
});

export default rootReducer;
