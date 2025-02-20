import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailure } from './slice';
import { fetchUserApi } from '../../api/userApi';

function* fetchUserSaga() {
  try {
    const user: string = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchUser() {
  yield takeEvery('user/fetchUserRequest', fetchUserSaga);
}