export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  if (action.payload && action.payload.message) {
    state.error = action.payload.message;
  } else {
    state.error = 'An error occurred';
  }
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
