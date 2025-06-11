import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchLoginSuccess, fetchLoginFailure, fetchLoginRequest } from './slice';
import { fetchLoginApi, RegisterRecievedData } from '../../app/api/regApi';
import { Axios, AxiosResponse } from 'axios';
import { fetchUserSuccess } from '../../pages/mainPage/sliceLog';

function* fetchLoginSaga({ payload }: ReturnType<typeof fetchLoginRequest>) {
  try {
    const login: AxiosResponse<{ isAdmin: boolean, SessionId: string }> = yield call(fetchLoginApi, payload);
    yield localStorage.setItem("user", JSON.stringify(login));
    console.log(login.headers);

    if (login.status === 200) {
      document.cookie = login.data.SessionId;
      yield put(fetchLoginSuccess());
      yield put(fetchUserSuccess({
        username: payload.username,
        isModer: login.data.isAdmin
      }));
    }
  } catch (error: any) {
    yield put(fetchLoginFailure(error.message));
  }
}

export function* watchFetchLogin() {
  yield takeEvery(fetchLoginRequest.type, fetchLoginSaga);
}