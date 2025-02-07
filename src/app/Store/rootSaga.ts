import { all } from 'redux-saga/effects';
import { watchFetchUser } from './sagas/userSaga';
import { watchFetchAdmin } from './sagas/adminSaga';

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    watchFetchAdmin(),
  ]);
}