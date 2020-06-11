import { combineReducers } from "redux";

const user = (state = { logged: false }, action) => {
  switch (action.type) {
    case "USER_LOGGED":
      return {
        ...state,
        logged: true,
        token: action.token,
        mode: action.mode,
      };
    case "USER_LOGGED_OUT":
      return {
        ...state,
        logged: false,
        token: null,
      };
    default:
      return state;
  }
};

const message = (state = { active: false }, action) => {
  switch (action.type) {
    case "MESSAGE_CREATED":
      return {
        ...state,
        active: true,
        title: action.title,
        content: action.content,
      };
    case "MESSAGE_CLOSED":
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default combineReducers({ user, message });
