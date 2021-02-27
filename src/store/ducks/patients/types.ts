// Action types
export enum PatientsTypes {
  LOAD_REQUEST = '@patients/LOAD_REQUEST',
  LOAD_SUCCESS = '@patients/LOAD_SUCCESS',
  LOAD_FAILURE = '@patients/LOAD_FAILURE',
}

// Data types
export type Patient = {
  id: number;
  name: string;
  email: string;
};

// State type
export type PatientsState = {
  readonly data: Patient[];
  readonly loading: boolean;
  readonly error: boolean;
};
