import { action } from 'typesafe-actions';
import { PatientsTypes, Patient } from './types';

export const loadRequest = () => action(PatientsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Patient[]) =>
  action(PatientsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PatientsTypes.LOAD_FAILURE);
