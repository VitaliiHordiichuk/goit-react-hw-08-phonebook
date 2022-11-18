export const getToken = state => state.auth.token;

export const getUserMail = state => state.auth.user.email;

export const getUserName = state => state.auth.user.name;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const tokenSelector = state => state.auth.token;

export const isRefreshing = state => state.auth.isRefreshing;
