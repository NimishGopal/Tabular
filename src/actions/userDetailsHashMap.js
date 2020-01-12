import { ActionTypes } from "../constants";

export const addUserToUserDetailsHashMap = userDetails => ({
  type: ActionTypes.ADD_USER_TO_HASHMAP,
  payload: userDetails
});
