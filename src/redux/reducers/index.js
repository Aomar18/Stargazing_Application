import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import location from './locationReducer';
import details from './detailsReducer';
import update from './updateReducer.js';

const store = combineReducers({
  location,
  details,
  update,
  user,
  login,
});

export default store;
