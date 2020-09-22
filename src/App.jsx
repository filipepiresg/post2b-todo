import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import './config/tron';

import RootTodo from '~/pages/Todo';
import { store, persistor } from '~/store';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <RootTodo />
      </PersistGate>
    </Provider>
  );
}

export default App;
