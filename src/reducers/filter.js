import { ActionTypes, FILTER } from "../constants";

const initialState = {
  sortBy: FILTER.SORT.NAME
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_FILTER: {
      return {
        sortBy: action.payload
      };
    }
    default:
      return state;
  }
}
