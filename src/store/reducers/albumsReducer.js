const initialState = {
  isFetching: true,
  data: [],
};

const albumReducer = (state = initialState, action) => {
  if (action.type === 'SET_FETCHING') {
    return { ...state, isFetching: action.payload };
  } else if (action.type === 'SET_DATA') {
    return {
      ...state,
      data: action.payload,
    };
  } else if (action.type === 'SET_PAGE') {
    return { ...state, page: action.payload };
  } else if (action.type === 'DONE_FETCHING') {
    return action.payload;
  }
  return state;
};

export default albumReducer;
