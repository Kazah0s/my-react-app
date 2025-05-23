import { all } from 'redux-saga/effects';
import { watchFetchUser } from '../../pages/mainPage/saga';
import { watchFetchRegister } from '../../features/register/saga';
import { watchFetchAdv } from '../../features/advButton/saga'


export default function* rootSaga() {
  yield all([
    // watchFetchAdmin(),
    watchFetchUser(),
    watchFetchRegister(),
    watchFetchAdv()

  ]);
}