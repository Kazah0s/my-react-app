import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchRegisterSuccess, fetchRegisterFailure, fetchRegisterRequest } from './slice';
import { fetchRegisterApi, RegisterData } from '../../app/api/regApi';
import { apiInstance } from "../../app/api/axiosInstance"
import { Axios, AxiosResponse } from 'axios';

function* fetchRegisterSaga({ payload }: ReturnType<typeof fetchRegisterRequest>) {
  try {
    const register: AxiosResponse<RegisterData, null> = yield call(fetchRegisterApi, payload);
    yield put(fetchRegisterSuccess(register.data));
  } catch (error: any) {
    yield put(fetchRegisterFailure(error.message));
  }
}

export function* watchFetchRegister() {
  yield takeEvery(fetchRegisterRequest.type, fetchRegisterSaga);
}