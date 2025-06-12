import { takeEvery, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';


import { fetchAdvGetRequest, fetchAdvGetSuccess, fetchAdvGetFailure } from './advSlice';
import { AdvensExportData, fetchAllAdvApi } from '../../app/api/GetApi';

function* fetchAdvGetSaga(action: PayloadAction<number>) {
  try {
    const page = action.payload
    const response: AdvensExportData[] = yield call(fetchAllAdvApi, page)
    yield put(fetchAdvGetSuccess(response));
  } catch (error: any) {
    yield put(fetchAdvGetFailure(error));
  }
}
export function* watchFetchAllAdv() {
  yield takeEvery(fetchAdvGetRequest.type, fetchAdvGetSaga);
}