import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { PatientsState } from './ducks/patients/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export type ApplicationState = {
  patients: PatientsState;
};

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
