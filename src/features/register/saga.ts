import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchRegisterSuccess, fetchRegisterFailure, fetchRegisterRequest } from './slice';
import { fetchRegisterApi, RegisterData } from '../../app/api/regApi';
import {apiInstance} from "../../app/api/axiosInstance"
import { Axios, AxiosResponse } from 'axios';



function* fetchRegisterSaga(regData: RegisterData) {
  try {
    const register: AxiosResponse<RegisterData, null> = yield call(apiInstance.post, fetchRegisterRequest.type, regData);
    yield put(fetchRegisterSuccess(register.data));
  } catch (error: any) {
    yield put(fetchRegisterFailure(error.message));
  }
}

export function* watchFetchRegister() {
  const action: RegisterData = yield take(fetchRegisterRequest.type);
    const regData = action; 
    yield call(fetchRegisterSaga, regData);
}