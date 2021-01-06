import { combineReducers } from 'redux';

// reducers
import userReducer from './user/user.reducer.js';

export default combineReducers({
    user: userReducer
})