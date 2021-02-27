import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './globalStyles';
import Patients from './pages/Patients/Patients';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Patients />;
      <GlobalStyles />
    </Provider>
  );
};

export default App;
