import { all } from 'redux-saga/effects';
import { watchFetchUser } from '../pages/RegAutPage/saga';
import { watchFetchAdmin } from '../pages/mainPage/saga';

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    watchFetchAdmin(),
  ]);
}