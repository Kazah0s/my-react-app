import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailure, fetchUserRequest} from './slice';
import { fetchUserApi } from '../../app/api/userApi';

function* fetchUserSaga() {
  try {
    const user: string = yield call(fetchUserApi);
    yield put(fetchUserSuccess(user));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchUser() {
  yield takeEvery(fetchUserRequest, fetchUserSaga);
}