const initialState = {
  isLogged: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGGED') {
    return action.payload;
  }
  return state;
};

export default userReducer;
