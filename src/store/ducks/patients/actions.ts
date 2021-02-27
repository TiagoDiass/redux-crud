import { action } from 'typesafe-actions';
import { PatientsTypes, Patient, PatientForm } from './types';

export const loadRequest = () => action(PatientsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Patient[]) =>
  action(PatientsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PatientsTypes.LOAD_FAILURE);

export const addRequest = (data: PatientForm) =>
  action(PatientsTypes.ADD_REQUEST, { data });

export const addSuccess = (data: Patient[]) =>
  action(PatientsTypes.ADD_SUCCESS, { data });

export const addFailure = () => action(PatientsTypes.ADD_FAILURE);
