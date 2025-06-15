import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from '../../pages/mainPage/sliceLog';
import { reducer as registerReducer } from '../../features/register/slice';
import { reducer as advensReduser } from "../../features/advButton/slice";
import { reducer as allAdvReduser } from "../../pages/mainPage/advSlice"
import { reducer as loginReduser } from "../../features/login/slice"
import { reducer as signReduser } from "../../features/signup/slice"

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  login: loginReduser,
  adv: advensReduser,
  allAdv: allAdvReduser,
  sign: signReduser,
});

export default rootReducer;