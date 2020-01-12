import { ActionTypes } from "../constants";

export const setUserData = data => ({
  type: ActionTypes.SET_USER_DATA,
  payload: data
});

export const setSelectedUserDetails = userDetails => ({
  type: ActionTypes.SET_SELECTED_USER_DETAILS,
  payload: userDetails
});

export const deleteUser = id => ({
  type: ActionTypes.DELETE_USER,
  payload: id
});

export const setSelectedUser = uid => ({
  type: ActionTypes.SET_SELECTED_USER,
  payload: uid
});
