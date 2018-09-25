import { combineReducers } from 'redux';

const details = (state = [], action) => {
    if (action.type === 'SET_POST') {
        return action.payload;
    }
    return state
};


export default combineReducers({
    details
});