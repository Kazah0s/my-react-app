import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchAdvSuccess, fetchAdvFailure, fetchAdvRequest, deleteAdRequest as deleteAdvRequest, updateAdRequest as updateAdvRequest } from './slice';
import { fetchAdvApi, AdvensData, deleteAdApi as deleteAdvApi, updateAdApi } from '../../app/api/advApi';

function* fetchAdvSaga({ payload }: ReturnType<typeof fetchAdvRequest>) {
  try {
    const advens: AdvensData = yield call(fetchAdvApi, payload);
    yield put(fetchAdvSuccess(advens));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

function* updateAdvSaga({ payload }: ReturnType<typeof updateAdvRequest>) {
  try {
    // yield call(updateAdApi, payload);
    yield put(fetchAdvSuccess(payload));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

function* deleteAdvSaga({ payload }: ReturnType<typeof deleteAdvRequest>) {
  try {
    yield call(deleteAdvApi, payload);
    yield put(fetchAdvSuccess(payload));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

export function* watchFetchAdv() {
  yield takeEvery(fetchAdvRequest.type, fetchAdvSaga);
  yield takeEvery(updateAdvRequest.type, updateAdvSaga);
  yield takeEvery(deleteAdvRequest.type, deleteAdvSaga);
}