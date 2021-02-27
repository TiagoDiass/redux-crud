import { Reducer } from 'redux';
import { PatientsState, PatientsTypes } from './types';

const INITIAL_STATE: PatientsState = {
  data: [],
  error: false,
  loading: false,
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
        data: action.payload.data,
      };

    case PatientsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
