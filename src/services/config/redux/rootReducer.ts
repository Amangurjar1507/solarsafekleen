import {combineReducers} from 'redux';
import userReducer from './userReducer/reducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
