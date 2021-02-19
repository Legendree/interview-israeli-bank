import { act } from 'react-dom/test-utils';

const initialState = {
  isFething: true,
  data: [],
  albumsInfo: {},
};

const tracksReducer = (state = initialState, action) => {
  if (action.type === 'SET_DATA') {
    return { ...state, isFetching: false, data: action.payload };
  } else if (action.type === 'SET_ALBUM_DATA') {
    return { ...state, albumsInfo: action.payload };
  }
  return state;
};

export default tracksReducer;
