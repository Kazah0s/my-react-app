import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchAdminSuccess, fetchAdminFailure, fetchAdminRequest} from './slice';
import { fetchAdminApi } from '../../app/api/adminApi';


function* fetchAdminSaga() {
  try {
    const admin: string = yield call(fetchAdminApi);
    yield put(fetchAdminSuccess(admin));
  } catch (error: any) {
    yield put(fetchAdminFailure(error.message));
  }
}

export function* watchFetchAdmin() {
  yield takeEvery(fetchAdminRequest, fetchAdminSaga);
}