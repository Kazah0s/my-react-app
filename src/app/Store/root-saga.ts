import { all } from 'redux-saga/effects';
// import { watchFetchUser } from '../../pages/mainPage/sagaLog';
import { watchFetchRegister } from '../../features/register/saga';
import { watchFetchAdv } from '../../features/advButton/saga'
import { watchFetchAllAdv } from '../../pages/mainPage/advSaga';
import { watchFetchLogin } from '../../features/login/saga';


export default function* rootSaga() {
  yield all([
    // watchFetchAdmin(),
    // watchFetchUser(),
    watchFetchRegister(),
    watchFetchAdv(),
    watchFetchAllAdv(),
    watchFetchLogin(),
  ]);
}