import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import locationReducer from './locationReducer';

const store = combineReducers({
  locationReducer,
  user,
  login,
});

export default store;
