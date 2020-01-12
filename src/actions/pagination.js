import { ActionTypes } from "../constants";

export const setRowPerPage = rowPerPage => ({
  type: ActionTypes.SET_ROW_PER_PAGE,
  payload: rowPerPage
});

export const setCurrentPage = currentPage => ({
  type: ActionTypes.SET_CURRENT_PAGE,
  payload: currentPage
});
