import { action } from 'typesafe-actions';
import { PatientsTypes, Patient, PatientForm } from './patients.types';

export const loadRequest = () => action(PatientsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Patient[]) =>
  action(PatientsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(PatientsTypes.LOAD_FAILURE);

export const addRequest = (patient: PatientForm) =>
  action(PatientsTypes.ADD_REQUEST, patient);

export const addSuccess = () => action(PatientsTypes.ADD_SUCCESS);

export const addFailure = () => action(PatientsTypes.ADD_FAILURE);

export const deleteRequest = (patientId: number) =>
  action(PatientsTypes.DELETE_REQUEST, patientId);

export const deleteSuccess = () => action(PatientsTypes.DELETE_SUCCESS);

export const deleteFailure = () => action(PatientsTypes.DELETE_FAILURE);
