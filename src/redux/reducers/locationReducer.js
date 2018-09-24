import { combineReducers } from 'redux';

const location = (state = [], action) => {
    if (action.type === 'SET_LOCATION') {
        return action.payload;
    }
    return state
};


export default combineReducers({
    location,
});