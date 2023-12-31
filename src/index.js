import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import serviceWorkerDev from './serviceWorkerDev'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <App  />
      {/* </Provider> */}
    </React.StrictMode>
  </BrowserRouter>
);
// serviceWorkerDev();


