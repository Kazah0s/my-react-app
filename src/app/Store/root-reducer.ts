import { combineReducers } from '@reduxjs/toolkit';
import {reducer as userReducer} from '../../pages/mainPage/slice';
import {reducer as adminReduser} from '../../pages/moderatorPage/slice';

const rootReducer = combineReducers({
  user: userReducer, 
  admin: adminReduser, 
});

export default rootReducer;