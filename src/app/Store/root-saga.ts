import { all } from 'redux-saga/effects';
import { watchFetchUser } from '../../pages/mainPage/saga';
import { watchFetchAdmin } from '../../pages/moderatorPage/saga';
import { watchFetchRegister } from '../../features/register/saga';


export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    watchFetchAdmin(),
    watchFetchRegister(),
  ]);
}