import { combineReducers } from "redux";

const user = (state = { logged: false }, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return {
        ...state,
        logged: true,
      };
    case "USER_LOGGED_OUT":
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default combineReducers({ user });
