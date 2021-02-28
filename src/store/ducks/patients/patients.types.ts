// Action types
export enum PatientsTypes {
  LOAD_REQUEST = '@patients/LOAD_REQUEST',
  LOAD_SUCCESS = '@patients/LOAD_SUCCESS',
  LOAD_FAILURE = '@patients/LOAD_FAILURE',
  ADD_REQUEST = '@patients/ADD_REQUEST',
  ADD_SUCCESS = '@patients/ADD_SUCCESS',
  ADD_FAILURE = '@patients/ADD_FAILURE',
  DELETE_REQUEST = '@patients/DELETE_REQUEST',
  DELETE_SUCCESS = '@patients/DELETE_SUCCESS',
  DELETE_FAILURE = '@patients/DELETE_FAILURE'
}

// Data types
export type Patient = {
  id: number;
  name: string;
  email: string;
};

export type PatientForm = {
  name: string;
  email: string;
};

// State type
export type PatientsState = {
  readonly data: Patient[];
  readonly loading: boolean;
  readonly error: boolean;
};
