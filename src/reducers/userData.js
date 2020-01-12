import { ActionTypes } from "../constants";

const initialState = {
  userData: [],
  selectedUser: 0,
  selectedUserDetails: {}
};

export default function userData(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA: {
      return Object.assign(
        {},
        {
          ...state,
          userData: action.payload
        }
      );
    }
    case ActionTypes.DELETE_USER: {
      return Object.assign(
        {},
        {
          ...state,
          userData: state.userData.filter(user => user.id !== action.payload)
        }
      );
    }
    case ActionTypes.SET_SELECTED_USER_DETAILS: {
      return Object.assign(
        {},
        {
          ...state,
          selectedUserDetails: action.payload
        }
      );
    }
    case ActionTypes.SET_SELECTED_USER: {
      return Object.assign(
        {},
        {
          ...state,
          selectedUser: action.payload
        }
      );
    }
    default:
      return state;
  }
}
