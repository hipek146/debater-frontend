export const userLogged = (token) => ({
  type: "USER_LOGGED",
  token,
});

export const userLoggedOut = () => ({
  type: "USER_LOGGED_OUT",
});

export const restoreSession = (data) => (dispatch) => {
  const getCookie = (name) => {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };
  const session = getCookie("session");
  if (session) {
    const now = new Date();
    now.setTime(now.getTime() + 12 * 3600 * 1000);
    document.cookie =
      "session=" + session + "; expires=" + now.toUTCString() + "; path=/";
    dispatch(userLogged(session));
  }
};

export const logIn = (data) => (dispatch) => {
  const now = new Date();
  now.setTime(now.getTime() + 12 * 3600 * 1000);
  const token = "token";
  document.cookie =
    "session=" + token + "; expires=" + now.toUTCString() + "; path=/";
  dispatch(userLogged(token));
};

export const logOut = () => (dispatch) => {
  document.cookie = "session=; path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  dispatch(userLoggedOut());
};

export const createMessage = ({ title, content }) => ({
  type: "MESSAGE_CREATED",
  title,
  content,
});

export const closeMessage = () => ({
  type: "MESSAGE_CLOSED",
});
