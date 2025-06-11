import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchRegisterSuccess, fetchRegisterFailure, fetchRegisterRequest } from './slice';
import { fetchRegisterApi, RegisterRecievedData } from '../../app/api/regApi';
import { Axios, AxiosResponse } from 'axios';
import { fetchUserSuccess } from '../../pages/mainPage/sliceLog';

function* fetchRegisterSaga({ payload }: ReturnType<typeof fetchRegisterRequest>) {
  try {
    const register: AxiosResponse<{ isAdmin: boolean, SessionId: string }> = yield call(fetchRegisterApi, payload);
    yield localStorage.setItem("user", JSON.stringify(register));
    console.log(register.headers);

    if (register.status === 200) {
      document.cookie = register.data.SessionId;
      yield put(fetchRegisterSuccess());
      yield put(fetchUserSuccess({
        username: payload.username,
        isModer: register.data.isAdmin
      }));
    }
  } catch (error: any) {
    yield put(fetchRegisterFailure(error.message));
  }
}

export function* watchFetchRegister() {
  yield takeEvery(fetchRegisterRequest.type, fetchRegisterSaga);
}