import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import '../public/image';
import {store} from './Redux-setup/store';
import { Provider } from 'react-redux';

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);