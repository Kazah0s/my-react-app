import { combineReducers } from '@reduxjs/toolkit';
import {reducer as userReducer} from '../../pages/mainPage/slice';
// import {reducer as adminReducer} from '../../pages/moderatorPage/slice';
import {reducer as registerReducer} from '../../features/register/slice';

const rootReducer = combineReducers({
  user: userReducer, 
  // admin: adminReducer, 
  register: registerReducer,
});

export default rootReducer;