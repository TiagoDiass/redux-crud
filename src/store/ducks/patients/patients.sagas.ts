import { call, put } from 'redux-saga/effects';

import {
  addFailure,
  addSuccess,
  deleteFailure,
  deleteSuccess,
  editFailure,
  editSuccess,
  loadFailure,
  loadRequest,
  loadSuccess
} from './patients.actions';

import { PatientForm } from './patients.types';
import api from '../../../services/api';

export function* load() {
  try {
    const response = yield call(api.get, '/patients');

    yield put(loadSuccess(response.data));

    return Promise.resolve({ retorno: true });
  } catch (err) {
    yield put(loadFailure());
  }
}

type SagaAction<T = any> = {
  type: string;
  payload: T;
};

export function* add(action: SagaAction<PatientForm>) {
  try {
    const response = yield call(api.post, '/patients/new', action.payload);

    if (response.status == 200) {
      yield put(addSuccess());
      yield put(loadRequest());
    }
  } catch (err) {
    yield put(addFailure());
  }
}

export function* remove(action: SagaAction<number>) {
  try {
    const response = yield call(api.delete, `/patients/${action.payload}`);

    if (response.status == 200) {
      yield put(deleteSuccess());
      yield put(loadRequest());
    }
  } catch (err) {
    yield put(deleteFailure());
  }
}

export function* edit(
  action: SagaAction<{ patientId: number; patient: PatientForm }>
) {
  try {
    const response = yield call(
      api.put,
      `/patients/${action.payload.patientId}`,
      action.payload.patient
    );

    if (response.status == 200) {
      yield put(editSuccess());
      yield put(loadRequest());
    }
  } catch (err) {
    yield put(editFailure());
  }
}
