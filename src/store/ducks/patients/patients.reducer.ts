import { Reducer } from 'redux';
import { PatientsState, PatientsTypes } from './patients.types';

const INITIAL_STATE: PatientsState = {
  data: [],
  error: false,
  loading: false
};

const reducer: Reducer<PatientsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PatientsTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case PatientsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };

    case PatientsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    case PatientsTypes.ADD_REQUEST:
    case PatientsTypes.EDIT_REQUEST:
    case PatientsTypes.DELETE_REQUEST:
      return { ...state, loading: true, error: false };

    case PatientsTypes.ADD_SUCCESS:
    case PatientsTypes.EDIT_SUCCESS:
    case PatientsTypes.DELETE_SUCCESS:
      return { ...state, loading: false, error: false };

    case PatientsTypes.ADD_FAILURE:
    case PatientsTypes.EDIT_FAILURE:
    case PatientsTypes.DELETE_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
