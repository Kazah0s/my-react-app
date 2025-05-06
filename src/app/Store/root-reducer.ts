import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from '../../pages/mainPage/slice';
import { reducer as registerReducer } from '../../features/register/slice';
import { reducer as advensReduser } from "../../features/advButton/slice";

const rootReducer = combineReducers({
  user: userReducer,
  // admin: adminReducer, 
  register: registerReducer,
  adv: advensReduser
});

export default rootReducer;