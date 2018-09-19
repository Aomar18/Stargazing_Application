import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import location from './locationReducer';

const store = combineReducers({
  location,
  user,
  login,
});

export default store;
