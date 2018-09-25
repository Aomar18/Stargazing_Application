import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import location from './locationReducer';
import details from './detailsReducer';

const store = combineReducers({
  location,
  details,
  user,
  login,
});

export default store;
