import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchRegisterSuccess, fetchRegisterFailure, fetchRegisterRequest } from './slice';
import { fetchRegisterApi, RegisterRecievedData } from '../../app/api/regApi';
import { Axios, AxiosResponse } from 'axios';

function* fetchRegisterSaga({ payload }: ReturnType<typeof fetchRegisterRequest>) {
  try {
    const register: AxiosResponse<boolean> = yield call(fetchRegisterApi, payload);
    yield localStorage.setItem("user", JSON.stringify(register));
    console.log(register);
    
    if (register.status === 200) {
      yield put(fetchRegisterSuccess({
        username: payload.username,
        isModer: register.data,
      }));
    }
  } catch (error: any) {
    yield put(fetchRegisterFailure(error.message));
  }
}

export function* watchFetchRegister() {
  yield takeEvery(fetchRegisterRequest.type, fetchRegisterSaga);
}