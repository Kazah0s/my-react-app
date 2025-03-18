import { all } from 'redux-saga/effects';
import { watchFetchUser } from '../../pages/mainPage/saga';
import { watchFetchRegister } from '../../features/register/saga';


export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    // watchFetchAdmin(),
    watchFetchRegister(),
  ]);
}