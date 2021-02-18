import { combineReducers } from 'redux';
import { createStore } from 'redux';
import albumReducer from './reducers/albumsReducer';

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  albums: albumReducer,
});

const store = createStore(rootReducer);

export default store;
