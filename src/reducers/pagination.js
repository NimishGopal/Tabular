import { ActionTypes, DEFAULT } from "../constants";

const initialState = {
  rowPerPage: DEFAULT.ROW_PER_PAGE,
  currentPage: DEFAULT.CURRENT_PAGE
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_ROW_PER_PAGE: {
      return Object.assign(
        {},
        {
          ...state,
          rowPerPage: action.payload
        }
      );
    }
    case ActionTypes.SET_CURRENT_PAGE: {
      return Object.assign(
        {},
        {
          ...state,
          currentPage: action.payload
        }
      );
    }
    default:
      return state;
  }
}
