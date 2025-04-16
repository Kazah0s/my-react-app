import { takeEvery, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchUserSuccess, fetchUserFailure, fetchUserRequest } from './slice';
import { fetchUserApi, UsersData } from '../../app/api/userApi';
import { AxiosResponse } from 'axios';

function* fetchUserSaga() {
  try {
    const response: AxiosResponse<UsersData> = yield call(fetchUserApi);
    yield put(fetchUserSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchUser() {
  yield takeEvery(fetchUserRequest.type, fetchUserSaga);
}