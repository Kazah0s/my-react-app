import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchAdminSuccess, fetchAdminFailure } from '../slices/adminSlice';
import { fetchAdminApi } from '../../api/adminApi';

function* fetchAdminSaga() {
  try {
    const admin: string = yield call(fetchAdminApi);
    yield put(fetchAdminSuccess(admin));
  } catch (error: any) {
    yield put(fetchAdminFailure(error.message));
  }
}

export function* watchFetchAdmin() {
  yield takeEvery('admin/fetchAdminRequest', fetchAdminSaga);
}