import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import { store, persistor  } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
     
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
