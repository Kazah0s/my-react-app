import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchAdvSuccess, fetchAdvFailure, fetchAdvRequest, deleteAdRequest, updateAdvRequest, updateStatusAdRequest } from './slice';
import { fetchAdvApi, AdvensData, deleteAdApi, updateStatusAdApi, updateAdApi } from '../../app/api/advApi';

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
    yield call(updateAdApi, payload);
    yield put(fetchAdvSuccess(payload));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

function* updateAdvStatusSaga({ payload }: ReturnType<typeof updateStatusAdRequest>) {
  try {
    yield call(updateStatusAdApi, payload);
    yield put(fetchAdvSuccess(payload));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

function* deleteAdvSaga({ payload }: ReturnType<typeof deleteAdRequest>) {
  try {
    yield call(deleteAdApi, payload);
    yield put(fetchAdvSuccess(payload));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

export function* watchFetchAdv() {
  yield takeEvery(fetchAdvRequest.type, fetchAdvSaga);
  yield takeEvery(updateAdvRequest.type, updateAdvSaga);
  yield takeEvery(updateStatusAdRequest.type, updateAdvStatusSaga);
  yield takeEvery(deleteAdRequest.type, deleteAdvSaga);
}