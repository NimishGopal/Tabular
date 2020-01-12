import { setUserData, setSelectedUserDetails } from "../actions/userData";
import Utils from "../utils";

export const fetchUserData = url => async dispatch => {
  const userData = await Utils.fetch(url);
  dispatch(setUserData(userData));
};

export const fetchSelectedUserDetails = url => async dispatch => {
  const userDetails = await Utils.fetch(url);
  dispatch(setSelectedUserDetails(userDetails));
};
