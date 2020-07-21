import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const addAirline = (state, action) => {
  if (action.type === 'BUTTON_CLICK') {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    addAirline,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
