import { ActionTypes, DEFAULT } from "../constants";

const initialState = {
  userDetailsHashMap: {}
};

export default function userDetailsHashMap(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_USER_TO_HASHMAP: {
      const { id } = action.payload;
      return Object.assign(
        {},
        {
          ...state,
          userDetailsHashMap: {
            [id]: action.payload
          }
        }
      );
    }
    default:
      return state;
  }
}
