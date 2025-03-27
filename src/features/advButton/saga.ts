import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchAdvSuccess, fetchAdvFailure, fetchAdvRequest } from './slice';
import { fetchAdvApi, AdvensData } from '../../app/api/advApi';
import { apiInstance } from "../../app/api/axiosInstance"
import { Axios, AxiosResponse } from 'axios';

function* fetchAdvSaga({payload}: ReturnType<typeof fetchAdvRequest>) {
  try {
    const advens: AxiosResponse<AdvensData, null> = yield call(fetchAdvApi, payload);
    yield put(fetchAdvSuccess(advens.data));
  } catch (error: any) {
    yield put(fetchAdvFailure(error.message));
  }
}

export function* watchFetchAdv() {
   yield takeEvery(fetchAdvRequest.type, fetchAdvSaga);
}