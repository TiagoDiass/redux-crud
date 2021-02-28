import { call, put } from 'redux-saga/effects';

import {
  addFailure,
  addSuccess,
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

type SagaActionWithPayload<T = any> = {
  type: string;
  payload: T;
};

export function* add(action: SagaActionWithPayload<PatientForm>) {
  try {
    const response = yield call(api.post, '/patients/new', action.payload);
    yield put(addSuccess());

    if (response.status == 200) {
      yield put(loadRequest());
    }
  } catch (err) {
    yield addFailure();
  }
}
