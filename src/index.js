import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import history from './history';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
