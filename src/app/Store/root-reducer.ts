import { combineReducers } from '@reduxjs/toolkit';
import {reducer as userReducer} from '../pages/RegAutPage/slice';
import {reducer as adminReduser} from '../pages/mainPage/';

const rootReducer = combineReducers({
  user: userReducer, 
  admin: adminReduser, 
});

export default rootReducer;