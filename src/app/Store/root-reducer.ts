import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from '../../pages/mainPage/sliceLog';
import { reducer as registerReducer } from '../../features/register/slice';
import { reducer as advensReduser } from "../../features/advButton/slice";
import { reducer as allAdvReduser } from "../../pages/mainPage/advSlice"

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  adv: advensReduser,
  allAdv: allAdvReduser,
});

export default rootReducer;