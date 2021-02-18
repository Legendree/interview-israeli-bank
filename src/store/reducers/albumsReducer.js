const initialState = {
  isFetching: true,
  data: [],
};

const albumReducer = (state = initialState, action) => {
  if (action.type === 'SET_FETCHING') {
    return { ...state, isFetching: action.payload };
  } else if (action.type === 'DONE_FETCHING') {
    return action.payload;
  }
  return state;
};

export default albumReducer;
