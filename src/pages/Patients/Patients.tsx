import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Patient } from '../../store/ducks/patients/types';
import * as PatientsActions from '../../store/ducks/patients/actions';

import { Container } from './styles';
import { bindActionCreators, Dispatch } from 'redux';

type StateProps = {
  patients: Patient[];
};

type DispatchProps = {
  loadRequest: () => void;
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const Patients: React.FC<Props> = ({ patients, loadRequest }) => {
  useEffect(() => {
    loadRequest();
  }, []);

  return (
    <Container>
      <h1>Hey</h1>
      <br />
      <hr />
      <br />
      {patients.map(p => (
        <h1 key={p.id}>{p.name}</h1>
      ))}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  patients: state.patients.data,
  loading: state.patients.loading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PatientsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Patients);
