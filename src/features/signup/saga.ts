import { takeEvery, call, put, take } from 'redux-saga/effects';
import { fetchSignAdv } from './slice';
import { fetchSignApi } from '../../app/api/signApi';

function* fetchSignSaga({ payload }: ReturnType<typeof fetchSignAdv>) {
  try {
    yield call(fetchSignApi, payload);
  } catch (error: any) {
    console.log(error.message);
  }
}

export function* watchFetchSing(){
  yield takeEvery(fetchSignAdv.type, fetchSignSaga)
}