export const userLogged = () => ({
  type: "USER_LOGGED",
});

export const userLoggedOut = () => ({
  type: "USER_LOGGED_OUT",
});

export const logIn = () => (dispatch) => {
  dispatch(userLogged());
};

export const logOut = () => (dispatch) => {
  dispatch(userLoggedOut());
};
