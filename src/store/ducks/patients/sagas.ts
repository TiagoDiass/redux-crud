import { Action } from 'redux';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { addFailure, addSuccess, loadFailure, loadSuccess } from './actions';
import { PatientForm } from './types';

export function* load() {
  try {
    const response = yield call(api.get, '/patients');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

type MyAction = {
  payload: {
    data: PatientForm;
  };

  type: string;
};

export function* add(action: MyAction) {
  try {
    const response = yield call(api.post, '/patients/new', action.payload.data);

    if (response.status == 200) {
      const { data: totalPatients } = yield call(api.get, '/patients');

      yield put(addSuccess(totalPatients));
    }
  } catch (err) {
    yield put(addFailure());
  }
}
