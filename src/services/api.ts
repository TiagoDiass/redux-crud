import axios from 'axios';
import { PatientForm } from '../store/ducks/patients/types';

const api = axios.create({
  baseURL: 'https://patients-simple-api.herokuapp.com'
});

export default api;

interface AddPatientRequest {
  endpoint: string;
  data: PatientForm;
}

export async function addPatientApiReq({ endpoint, data }: AddPatientRequest) {
  return api.post(endpoint, data);
}
