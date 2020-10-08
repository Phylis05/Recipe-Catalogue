import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import rootreducer from './reducers/index';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  rootreducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
