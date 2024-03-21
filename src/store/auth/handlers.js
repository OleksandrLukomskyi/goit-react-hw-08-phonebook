export const handleSingUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};
