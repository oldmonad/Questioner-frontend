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
import Footer from './components/presentationals/Footer/Footer';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <div className="page--content">
          <Navbar />
          <ToastContainer autoClose={5000} />
          <main>
            <Routes />
          </main>
        </div>

        <Footer />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
