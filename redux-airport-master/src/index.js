import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const defaultState = [];

const addAirline = (state = defaultState, action) => {
  if (action.type === 'BUTTON_CLICK') {
    return [...this.state, this.action.payload];
  }
  return state;
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
