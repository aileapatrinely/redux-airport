import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const addAirline = (state = [{ airline: 'Potato', planes: '2' }], action) => {
  if (action.type === 'BUTTON_CLICK') {
    return [
      ...state,
      {
        airline: action.payload.airline,
        planes: action.payload.planes,
      },
    ];
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
