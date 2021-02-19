import { combineReducers } from 'redux';
import { createStore } from 'redux';
import albumReducer from './reducers/albumsReducer';
import tracksReducer from './reducers/tracksReducer';

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  albums: albumReducer,
  tracks: tracksReducer,
});

const store = createStore(rootReducer);

export default store;
