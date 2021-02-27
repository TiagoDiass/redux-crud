import { all, takeLatest } from 'redux-saga/effects';
import { PatientsTypes } from './patients/types';
import { load } from './patients/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(PatientsTypes.LOAD_REQUEST, load)]);
}
