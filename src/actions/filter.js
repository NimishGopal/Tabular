import { ActionTypes } from "../constants";

export const setFilter = filter => ({
  type: ActionTypes.SET_FILTER,
  payload: filter
});
