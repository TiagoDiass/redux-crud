import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import {
  Patient,
  PatientForm
} from '../../store/ducks/patients/patients.types';
import * as PatientsActions from '../../store/ducks/patients/patients.actions';

import { Container, Header, Main } from './styles';
import { bindActionCreators, Dispatch } from 'redux';

type StateProps = {
  patients: Patient[];
  loading: boolean;
};

type DispatchProps = {
  loadRequest: () => void;
  addRequest: (form: PatientForm) => void;
  deleteRequest: (patientId: number) => void;
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const Patients: React.FC<Props> = ({
  patients,
  loading,
  loadRequest,
  addRequest,
  deleteRequest
}) => {
  const [form, setForm] = useState<PatientForm>({
    name: '',
    email: ''
  });

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    loadRequest();
  }, []);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addRequest(form);
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleEditClick = (patient: Patient) => {
    setForm({
      ...patient
    });

    setIsEdit(true);
  };

  const handleDeleteClick = (id: number) => {
    const confirmation = confirm('Tem certeza que quer deletar este registro?');

    if (confirmation) {
      deleteRequest(id);
    } else {
      alert('Registro não foi deletado');
    }
  };

  const handleClearForm = (event: React.FormEvent) => {
    event.preventDefault();

    setForm({
      name: '',
      email: ''
    });

    setIsEdit(false);
  };

  return (
    <Container>
      <Header>
        <h1>React + Redux + TypeScript CRUD</h1>
      </Header>
      <Main>
        <form onSubmit={handleFormSubmit}>
          <h4>{isEdit ? 'Editar' : 'Cadastrar'}</h4>
          <input
            type='text'
            placeholder='Nome'
            name='name'
            value={form.name}
            onChange={handleInputChange}
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={form.email}
            onChange={handleInputChange}
          />
          <div>
            <button onClick={handleClearForm} type='submit'>
              Limpar formulário
            </button>
            <button type='submit'>{isEdit ? 'Editar' : 'Cadastrar'}</button>
          </div>
        </form>

        {loading ? (
          <h2 style={{ alignSelf: 'center', marginTop: 12 }}>Carregando...</h2>
        ) : (
          <ul>
            {patients.length ? (
              patients.map(patient => (
                <li key={patient.id}>
                  <span>ID: {patient.id}</span>{' '}
                  <span>Nome: {patient.name}</span>{' '}
                  <span>Email: {patient.email}</span>
                  <div>
                    <button onClick={() => handleEditClick(patient)}>
                      Editar
                    </button>
                    <button onClick={() => handleDeleteClick(patient.id)}>
                      Apagar
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li>Sem usuários cadastrados</li>
            )}
          </ul>
        )}
      </Main>
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
