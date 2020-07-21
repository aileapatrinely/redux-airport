import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    handleClick = (event) => {
      this.props.dispatch({
        type: 'BUTTON_CLICK',
        payload: event.target.value,
      });
    };

    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airline Name" />
        <button onClick={this.handleClick}>Add Airline</button>
        <table>{/* Airlines should be listed here */}</table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};
export default connect(mapStoretoProps)(App);
