// import { takeEvery, call, put } from 'redux-saga/effects';
// import { PayloadAction } from '@reduxjs/toolkit';
// import { fetchUserSuccess, fetchUserRequest } from './sliceLog';
// import { fetchUserApi, UsersData } from '../../app/api/userApi';
// import { AxiosResponse } from 'axios';

// function* fetchUserSaga() {
//   try {
//     const user: string = yield localStorage.getItem("user");
//     if (user) {
//       const response: UsersData = yield JSON.parse(user)
//       yield put(fetchUserSuccess(response));

//       console.log(response.username);

//     } else {
//       const response: AxiosResponse<UsersData> = yield call(fetchUserApi);
//       yield put(fetchUserSuccess(response.user));

//       console.log("saga", response.data);

//     }
//   } catch (error: any) {
//     yield put((error.message));
//   }
// }
// export function* watchFetchUser() {
//   yield takeEvery(fetchUserRequest.type, fetchUserSaga);
// }