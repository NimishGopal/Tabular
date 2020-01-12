import { setUserData, setSelectedUserDetails } from "../actions/userData";
import { Utils } from "../utils/index.js";

export const fetchUserData = url => async dispatch => {
  const data = await Utils.fetch(url);
  dispatch(setUserData(data));
};

export const fetchSelectedUserDetails = url => async dispatch => {
  const data = await Utils.fetch(url);
  dispatch(setSelectedUserDetails(data));
};
