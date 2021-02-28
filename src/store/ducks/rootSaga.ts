import { all, takeLatest } from 'redux-saga/effects';
import { PatientsTypes } from './patients/patients.types';
import { add, load } from './patients/patients.sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PatientsTypes.LOAD_REQUEST, load),
    takeLatest(PatientsTypes.ADD_REQUEST, add)
  ]);
}
