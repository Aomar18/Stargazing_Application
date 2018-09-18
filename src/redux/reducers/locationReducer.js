import { combineReducers } from 'redux';

const locationReducer = (state = [], action) => {
    if (action.type === 'SET_LOCATION') {
        return action.payload;
    }
    return state
};

export default combineReducers({
    locationReducer,
});