import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/presentationals/Navbar/Navbar';

import Routes from './Routes.jsx';
import store from './store/store';

import 'react-toastify/dist/ReactToastify.css';
import './reset.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer autoClose={5000} />
      <div className="page--content">
        <Navbar />
        <Routes />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
